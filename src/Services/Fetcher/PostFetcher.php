<?php

namespace App\Services\Fetcher;

use App\Entity\Post;
use Doctrine\ORM\EntityManagerInterface;
use Ramsey\Uuid\UuidInterface;

class PostFetcher
{
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function findAllPosts(?int $userId)
    {
        return $this->em->getRepository(Post::class)->getAllPosts($userId);
    }

    public function getPostForPostPage(UuidInterface $uuid, ?int $userId): array
    {
        $sql = $this->em->getRepository(Post::class)->getPost($uuid, $userId);

        return $this->em->getConnection()->fetchAssoc($sql);
    }

    public function getPostByUuid(UuidInterface $uuid)
    {
        return $this->em->getRepository(Post::class)->findOneBy(['uuid' => $uuid]);
    }
}
