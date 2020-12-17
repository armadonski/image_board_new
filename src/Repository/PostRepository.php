<?php

namespace App\Repository;

use App\Entity\Comment;
use App\Entity\Vote;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Query\Expr\Join;
use Ramsey\Uuid\UuidInterface;

class PostRepository extends EntityRepository
{
    public function getAllPosts(?int $userId): string
    {
        $sql = 'SELECT 
           p.uuid as uuid,
           p.tags as tags,
           p.caption as caption,
           p.image_name as image,
           p.user as user,      
           COUNT(c.id) as comments,
               (
                SELECT SUM(v.likes)
                FROM vote v 
                WHERE v.post_uuid = p.uuid
               ) AS points';
        if ($userId) {
            $sql .= ',(
                SELECT v.likes         
                FROM vote v 
                WHERE v.post_uuid = p.uuid
                AND v.user = ' . $userId . '
            ) as voted            
            ';
        }
        $sql .= '
            FROM post p
            LEFT JOIN comment c on p.id = c.post             
            GROUP BY p.uuid
            ORDER BY points DESC';

        return $sql;
    }

    public function getPost(UuidInterface $uuid, ?int $userId): string
    {
        $sql = 'SELECT 
           p.uuid as uuid,
           p.tags as tags,
           p.caption as caption,
           CONCAT("/images/posts/", p.image_name) as image,
           p.user as user,      
           COUNT(c.id) as comments,
               (
                SELECT SUM(v.likes)
                FROM vote v 
                WHERE v.post_uuid = p.uuid
               ) AS points';
        if ($userId) {
            $sql .= ',(
                SELECT v.likes         
                FROM vote v 
                WHERE v.post_uuid = "' . $uuid->toString() . '"
                AND v.user = ' . $userId . '
            ) as voted            
            ';
        }
        $sql .= '
            FROM post p
            LEFT JOIN comment c on p.id = c.post        
            WHERE p.uuid = "' . $uuid->toString() . '"';

        return $sql;
    }
}
