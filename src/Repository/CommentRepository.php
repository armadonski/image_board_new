<?php

namespace App\Repository;

use App\Entity\Post;
use App\Entity\User;
use Doctrine\ORM\EntityRepository;
use Doctrine\ORM\Query\Expr\Join;
use Ramsey\Uuid\UuidInterface;

class CommentRepository extends EntityRepository
{
    public function getAllCommentsByPost(UuidInterface $uuid)
    {
        $qb = $this->createQueryBuilder('c');
        return $qb->select('c as comment', 'u.nickname')
            ->join(User::class, 'u', Join::WITH, 'c.user = u.id')
            ->join(Post::class, 'p', Join::WITH, 'p.id = c.post')
            ->where('p.uuid = :uuid')
            ->setParameter('uuid', $uuid)
            ->getQuery()
            ->getResult();
    }
}
