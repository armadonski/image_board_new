<?php

namespace App\Controller\API;

use App\Services\CommentService;
use Ramsey\Uuid\Uuid;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/** @Route("/api/comment"), name="comment_" */
class CommentController extends AbstractController
{
    /**
     * @Route("/get/{postUuid}", options={"expose"=true}, name="get_comments",  methods={"POST"})
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
        $content = $request->request->get('content');
        $uuid = Uuid::fromString($postUuid);
        $userId = null;
        if ($this->getUser()) {
            $userId = $this->getUser()->getId();
        }

        return $commentService->postComment($uuid, $content, $userId);
    }

    public function replyAction(string $postUuid, int $parentComment)
    {

    }
}