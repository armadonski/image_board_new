<?php

namespace App\Repository;

use Doctrine\ORM\EntityRepository;
use Ramsey\Uuid\UuidInterface;

class VoteRepository extends EntityRepository
{
    public function getVoteByUuidAndUser(UuidInterface $uuid, int $userId)
    {
        $qb = $this->createQueryBuilder('v');
        $qb->select('DISTINCT v')
            ->where('v.postUuid = :uuid')
            ->andWhere('v.user = :userId')
            ->setParameters
            (
                [
                    'uuid' => $uuid,
                    'userId' => $userId
                ]
            );

        return $qb->getQuery()->getOneOrNullResult();
    }

    public function getPoints(UuidInterface $uuid): ?array
    {
        $qb = $this->createQueryBuilder('v');
        $qb->select('SUM(v.likes) AS points')
            ->where('v.postUuid = :uuid')
            ->setParameters(['uuid' => $uuid]);

        return $qb->getQuery()->getOneOrNullResult();
    }
}
