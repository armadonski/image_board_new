<?php

namespace App\Services;

use App\Entity\Vote;
use App\Services\Fetcher\VoteFetcher;
use Doctrine\ORM\EntityManagerInterface;
use Ramsey\Uuid\UuidInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

class VoteService
{
    private const MESSAGE = 'success';
    private const UNSUCCESSFUL_MESSAGE = 'unsuccessful';

    private $em;
    private $voteFetcher;

    public function __construct(EntityManagerInterface $em, VoteFetcher $voteFetcher)
    {
        $this->voteFetcher = $voteFetcher;
        $this->em = $em;
    }

    public function like(UuidInterface $postUuid, ?int $userId): JsonResponse
    {
        $voteExists = $this->checkIfVoteExists($postUuid, $userId);

        if (!$voteExists) {
            $this->createVote($userId, 1, $postUuid);

            return new JsonResponse($this->voteFetcher->fetchPoints($postUuid));
        }
        $this->updateVote($voteExists, 1);

        return new JsonResponse($this->voteFetcher->fetchPoints($postUuid));

    }

    public function dislike(UuidInterface $postUuid, ?int $userId): JsonResponse
    {
        $voteExists = $this->checkIfVoteExists($postUuid, $userId);
        if (!$voteExists) {
            $this->createVote($userId, -1, $postUuid);

            return new JsonResponse($this->voteFetcher->fetchPoints($postUuid));
        }
        $this->updateVote($voteExists, -1);

        return new JsonResponse($this->voteFetcher->fetchPoints($postUuid));
    }

    public function unlike(UuidInterface $postUuid, ?int $userId): JsonResponse
    {
        $vote = $this->voteFetcher->fetchVote($postUuid, $userId);
        if ($vote) {
            $this->em->remove($vote);
            $this->em->flush();
        }

        return new JsonResponse($this->voteFetcher->fetchPoints($postUuid));
    }

    private function checkIfVoteExists(UuidInterface $postUuid, ?int $userId)
    {
        return $this->voteFetcher->fetchVote($postUuid, $userId);
    }

    private function createVote(?int $userId, int $likes, UuidInterface $postUuid): Vote
    {
        $vote = (new Vote())
            ->setUser($userId)
            ->setLikes($likes)
            ->setPostUuid($postUuid);
        $this->em->persist($vote);
        $this->em->flush();

        return $vote;
    }

    private function updateVote(Vote $vote, int $likes): Vote
    {
        $vote->setLikes($likes);
        $this->em->persist($vote);
        $this->em->flush();

        return $vote;
    }

}
