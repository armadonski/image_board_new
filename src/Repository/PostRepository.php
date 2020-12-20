<?php

namespace App\Repository;

use Doctrine\ORM\EntityRepository;
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
           u.nickname as user,      
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
            JOIN user u on u.id = p.user      
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
