<?php

namespace App\Services;

use App\Model\PaginatedRequestModel;
use App\Services\Fetcher\PostFetcher;
use App\Services\Fetcher\VoteFetcher;
use App\Services\Helper\PaginationHelper;
use Ramsey\Uuid\UuidInterface;

class PostService
{
    private $postFetcher;
    private $voteFetcher;
    private $paginationHelper;

    public function __construct(PostFetcher $postFetcher, VoteFetcher $voteFetcher, PaginationHelper $paginationHelper)
    {
        $this->postFetcher = $postFetcher;
        $this->voteFetcher = $voteFetcher;
        $this->paginationHelper = $paginationHelper;
    }

    public function getAllPosts(?int $userId, PaginatedRequestModel $requestModel): array
    {
        $posts = $this->postFetcher->findAllPosts($userId);
        $requestModel->setQueryBuilder($posts)->setUser($userId);
        $this->paginationHelper->setRequestModel($requestModel);

        return $this->addImagePath($this->paginationHelper->getResponse());
    }

    private function addImagePath(array $response): array
    {
        foreach ($response['rows'] as &$row) {
            $row['image'] = sprintf('/images/posts/%s', $row['image']);
        }

        return $response;
    }

    public function getPost(UuidInterface $uuid, ?int $userId): array
    {
        return $this->postFetcher->getPostForPostPage($uuid, $userId);
    }
}
