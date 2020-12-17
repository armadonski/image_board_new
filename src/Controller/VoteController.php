<?php

namespace App\Controller;

use App\Services\VoteService;
use Ramsey\Uuid\Uuid;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/** @Route("/vote", name="vote_") */
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

        return $vote->like(Uuid::fromString($request->get('uuid')), $userId);
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

        return $vote->dislike(Uuid::fromString($request->get('uuid')), $userId);
    }

    /** @Route("/unlike", name="unlike", options={"expose"=true}, methods={"POST"}) */
    public function unlikeAction(Request $request, VoteService $vote): JsonResponse
    {
        $userId = null;
        if ($this->getUser()) {
            $userId = $this->getUser()->getId();
        }

        return $vote->unlike(Uuid::fromString($request->get('uuid')), $userId);
    }
}
