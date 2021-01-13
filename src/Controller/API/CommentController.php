<?php

namespace App\Controller\API;

use App\Exception\InvalidCommentException;
use App\Services\CommentService;
use Ramsey\Uuid\Uuid;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

/** @Route("/api/comment"), name="comment_" */
class CommentController extends AbstractController
{
    /**
     * @Route("/get/{postUuid}", options={"expose"=true}, name="get_comments",  methods={"GET"})
     */
    public function getComments(CommentService $commentService, string $postUuid)
    {
        $uuid = Uuid::fromString($postUuid);

        return $commentService->getAllComments($uuid);
    }

    /**
     * @Route("/post/{postUuid}", options={"expose"=true}, name="add_comment",  methods={"POST"})
     */
    public function postAction(Request $request, CommentService $commentService, string $postUuid)
    {
        $content = json_decode($request->getContent(), true)['content'];
        $uuid = Uuid::fromString($postUuid);
        $userId = null;
        if ($this->getUser()) {
            $userId = $this->getUser()->getId();
        }
        try {
            return $commentService->postComment($uuid, $content, $userId);
        } catch (InvalidCommentException $e) {
            return new Response($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }
    }

    public function replyAction(string $postUuid, int $parentComment)
    {

    }
}