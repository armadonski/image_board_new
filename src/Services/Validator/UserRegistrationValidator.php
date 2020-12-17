<?php

namespace App\Services\Validator;

use App\Entity\User;
use App\Exception\UserRegistrationException;
use App\Model\ModelInterface;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class UserRegistrationValidator extends AbstractValidator
{
    private $entityManager;

    public function __construct(ValidatorInterface $validator, EntityManagerInterface $entityManager)
    {
        parent::__construct($validator);
        $this->entityManager = $entityManager;
    }

    public function validate(ModelInterface $model): void
    {
        $this->throwError($model, UserRegistrationException::class);
        $this->checkIfUserExists($model);
        $this->checkIfNicknameExists($model);
    }

    private function checkIfUserExists(ModelInterface $model): void
    {
        $users = $this->entityManager->getRepository(User::class)->findBy(
            [
                'email' => $model->getEmail()
            ]
        );
        if ($users) {
            throw new UserRegistrationException(json_encode([sprintf('%s e-mail is already in use', $model->getEmail())], JSON_FORCE_OBJECT), Response::HTTP_BAD_REQUEST);
        }
    }

    private function checkIfNicknameExists(ModelInterface $model): void
    {
        $users = $this->entityManager->getRepository(User::class)->findBy(
            [
                'nickname' => $model->getNickname()
            ]
        );
        if ($users) {
            throw new UserRegistrationException(json_encode([sprintf('%s nickname is already in use', $model->getNickname())], JSON_FORCE_OBJECT), Response::HTTP_BAD_REQUEST);
        }
    }
}