<?php

namespace App\Services;

use App\Entity\User;
use App\Exception\UserRegistrationException;
use App\Model\UserRegistrationModel;
use App\Services\Security\AuthenticatorService;
use App\Services\Validator\UserRegistrationValidator;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Guard\GuardAuthenticatorHandler;

class UserRegistrationService
{
    private $encoder;
    private $entityManager;
    private $guardHandler;
    private $authenticator;

    public function __construct(
        UserPasswordEncoderInterface $encoder,
        EntityManagerInterface $entityManager,
        GuardAuthenticatorHandler $guardAuthenticatorHandler,
        AuthenticatorService $authenticator
    )
    {
        $this->encoder = $encoder;
        $this->entityManager = $entityManager;
        $this->guardHandler = $guardAuthenticatorHandler;
        $this->authenticator = $authenticator;
    }

    public function registerUser(UserRegistrationModel $userRegistrationModel): ?Response
    {
        $user = (new User())->setEmail($userRegistrationModel->getEmail())->setNickname($userRegistrationModel->getNickname())->setRoles(["ROLE_USER"]);
        $password = $this->encoder->encodePassword($user, $userRegistrationModel->getPassword());
        $user->setPassword($password);
        $this->entityManager->persist($user);
        $this->entityManager->flush();

        return $this->guardHandler->authenticateUserAndHandleSuccess(
            $user,
            new Request(),
            $this->authenticator,
            'main'
        );
    }

    public function checkUsername(string $username): JsonResponse
    {
        $users = $this->entityManager->getRepository(User::class)->findBy(
            [
                'nickname' => $username
            ]
        );
        if ($users) {
            throw new UserRegistrationException(json_encode([sprintf('%s nickname is already in use', $username)], JSON_FORCE_OBJECT), Response::HTTP_BAD_REQUEST);
        }

        return new JsonResponse(false);
    }

    public function checkEmail(string $email): JsonResponse
    {
        $users = $this->entityManager->getRepository(User::class)->findBy(
            [
                'email' => $email
            ]
        );
        if ($users) {
            throw new UserRegistrationException(json_encode([sprintf('%s e-mail is already in use', $email)], JSON_FORCE_OBJECT), Response::HTTP_BAD_REQUEST);
        }

        return new JsonResponse(false);
    }
}
