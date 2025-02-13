<?php

namespace App\Controller\API;

use App\Services\VoteService;
use Ramsey\Uuid\Uuid;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/** @Route("/api/vote", name="vote_") */
class VoteController extends AbstractController
{
    /** @Route("/like", name="like", options={"expose"=true}, methods={"POST"})
     */
    public function likeAction(Request $request, VoteService $vote): JsonResponse
    {
        $userId = null;
        if ($this->getUser()) {
            $userId = $this->getUser()->getId();
        }

        $uuid = json_decode($request->getContent(), true)['uuid'];

        return $vote->like(Uuid::fromString($uuid), $userId);
    }

    /**
     * @Route("/dislike", name="dislike", options={"expose"=true}, methods={"POST"})
     */
    public function disLikeAction(Request $request, VoteService $vote): JsonResponse
    {
        $userId = null;
        if ($this->getUser()) {
            $userId = $this->getUser()->getId();
        }
        $uuid = json_decode($request->getContent(), true)['uuid'];

        return $vote->dislike(Uuid::fromString($uuid), $userId);
    }

    /** @Route("/unlike", name="unlike", options={"expose"=true}, methods={"POST"}) */
    public function unlikeAction(Request $request, VoteService $vote): JsonResponse
    {
        $userId = null;
        if ($this->getUser()) {
            $userId = $this->getUser()->getId();
        }
        $uuid = json_decode($request->getContent(), true)['uuid'];

        return $vote->unlike(Uuid::fromString($uuid), $userId);
    }
}
