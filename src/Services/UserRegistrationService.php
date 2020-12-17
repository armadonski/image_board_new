<?php

namespace App\Services;

use App\Entity\User;
use App\Model\UserRegistrationModel;
use App\Services\Security\AuthenticatorService;
use App\Services\Validator\UserRegistrationValidator;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
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
}
