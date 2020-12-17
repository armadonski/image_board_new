<?php

namespace App\Services\Fetcher;

use App\Entity\Comment;
use Doctrine\ORM\EntityManagerInterface;
use Ramsey\Uuid\UuidInterface;

class CommentFetcher
{
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function getAllCommentsByPost(UuidInterface $uuid)
    {
        return $this->em->getRepository(Comment::class)->getAllCommentsByPost($uuid);
    }
}