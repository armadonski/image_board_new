<?php

namespace App\Controller;

use App\Model\PaginatedRequestModel;
use App\Model\UploadFileRequestModel;
use App\Services\PostService;
use App\Services\UploadService;
use Ramsey\Uuid\Uuid;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/** @Route("/post"), name="posts_" */
class PostsController extends AbstractController
{
    /**
     * @Route(
     *     "/get-posts",
     *      name="get_all_posts",
     *      options={"expose"=true},
     *      methods={"GET"})
     * @param PaginatedRequestModel $requestModel
     * @param PostService $postsFetcher
     * @return JsonResponse
     */
    public function getPostsAction(PaginatedRequestModel $requestModel, PostService $postsFetcher): JsonResponse
    {
        $userId = null;
        if ($this->getUser()) {
            $userId = $this->getUser()->getId();
        }

        return new JsonResponse($postsFetcher->getAllPosts($userId, $requestModel));
    }

    /** @Route(
     *     "/get",
     *      name="get_post",
     *      options={"expose"=true},
     *      methods={"POST"}
     *     )
     * @param Request $request
     * @param PostService $postService
     * @return JsonResponse
     */
    public function getPostAction(Request $request, PostService $postService): JsonResponse
    {
        $userId = null;
        if ($this->getUser()) {
            $userId = $this->getUser()->getId();
        }
        $uuid = $request->request->get('uuid');
        $post = $postService->getPost(Uuid::fromString($uuid), $userId);

        return new JsonResponse($post);
    }

    /**
     * @Route(
     *     "/upload",
     *      name="upload_post",
     *      options={"expose"=true},
     *      methods={"POST"}
     *     )
     */
    public function uploadAction(UploadFileRequestModel $post, UploadService $upload)
    {
        return $upload->upload($post, $this->getUser()->getId());
    }
}
