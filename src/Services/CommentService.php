<?php

namespace App\Services;

use App\Entity\Comment;
use App\Services\Fetcher\CommentFetcher;
use App\Services\Fetcher\PostFetcher;
use App\Services\Validator\CommentValidator;
use Doctrine\ORM\EntityManagerInterface;
use Ramsey\Uuid\UuidInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

class CommentService
{
    private $em;
    private $postFetcher;
    private $commentFetcher;
    private $commentValidator;

    public function __construct(
        EntityManagerInterface $em,
        PostFetcher $postFetcher,
        CommentFetcher $commentFetcher,
        CommentValidator $commentValidator
    )
    {
        $this->em = $em;
        $this->postFetcher = $postFetcher;
        $this->commentFetcher = $commentFetcher;
        $this->commentValidator = $commentValidator;
    }

    public function getAllComments(UuidInterface $uuid): JsonResponse
    {
        $serialized = [];
        $comments = $this->commentFetcher->getAllCommentsByPost($uuid);
        foreach ($comments as $key => $comment) {
            $serialized[] = $comment['comment']->serialize();
            $serialized[$key]['nickname'] = $comment['nickname'];
        }

        return new JsonResponse($serialized);
    }

    public function postComment(UuidInterface $postUuid, ?string $content, int $userId): JsonResponse
    {
        $post = $this->postFetcher->getPostByUuid($postUuid);
        $comment = (new Comment())
            ->setPost($post->getId())
            ->setContent($content)
            ->setUser($userId)
            ->setCreated();
        $this->commentValidator->validate($comment);
        $this->em->persist($comment);
        $this->em->flush();

        return new JsonResponse(
            'success'
        );
    }
}