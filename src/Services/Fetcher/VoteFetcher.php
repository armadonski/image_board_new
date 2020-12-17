<?php

namespace App\Services\Fetcher;

use App\Entity\Vote;
use Doctrine\ORM\EntityManagerInterface;
use Ramsey\Uuid\UuidInterface;

class VoteFetcher
{
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function fetchVote(UuidInterface $uuid, int $userId)
    {
        return $this->em->getRepository(Vote::class)->getVoteByUuidAndUser($uuid, $userId);
    }

    public function fetchPoints(UuidInterface $uuid)
    {
        return $this->em->getRepository(Vote::class)->getPoints($uuid);
    }
}