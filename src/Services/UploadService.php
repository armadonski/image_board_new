<?php

namespace App\Services;

use App\Entity\Post;
use App\Model\UploadFileRequestModel;
use App\Services\Validator\UploadFileValidator;
use Doctrine\ORM\EntityManagerInterface;
use Ramsey\Uuid\Uuid;
use Symfony\Component\HttpFoundation\JsonResponse;

class UploadService
{
    private $em;

    public function __construct(EntityManagerInterface $em, UploadFileValidator $validator)
    {
        $this->em = $em;
    }

    public function upload(UploadFileRequestModel $request, int $userId): JsonResponse
    {
        $post = (new Post())
            ->setUser($userId)
            ->setCaption($request->getCaption())
            ->setTags($request->getTags())
            ->setImageFile($request->getFile())
            ->setImageName($request->getFile()->getBasename())
            ->setImageSize($request->getFile()->getSize())
            ->setUuid(Uuid::uuid4());
        $this->em->persist($post);
        $this->em->flush();

        return new JsonResponse(
            [
                'uploaded' => true,
                'uuid' => $post->getUuid()
            ]
        );
    }
}
