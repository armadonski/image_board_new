<?php

namespace App\Controller\API;

use App\Exception\UserRegistrationException;
use App\Model\UserRegistrationModel;
use App\Services\UserRegistrationService;
use App\Services\Validator\UserRegistrationValidator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/** @Route("/api/authenticate", name="authenticate_") */
class AuthenticationController extends AbstractController
{
    /**
     * @Route("/", options={"expose"=true}, name="login", methods={"POST", "GET"})
     */
    public function loginAction(Request $request)
    {
        $authenticated = false;

        if ($request->isXmlHttpRequest() && $request->isMethod('POST')) {
            $authenticated = true;
        }

        return new JsonResponse(
            [
                'authenticated' => $authenticated
            ]
        );
    }

    /**
     * @Route("/register", options={"expose"=true}, name="register", methods={"POST"})
     */
    public function registerAction(UserRegistrationModel $userRegistrationModel, UserRegistrationService $registerUserService, UserRegistrationValidator $validator): ?Response
    {
        try {
            $validator->validate($userRegistrationModel);
        } catch (UserRegistrationException $e) {
            return new Response($e->getMessage(), Response::HTTP_BAD_REQUEST);
        }

        return $registerUserService->registerUser($userRegistrationModel);
    }

    /**
     * @Route("/logout", options={"expose"=true}, name="logout")
     */
    public function logoutAction(): void
    {

    }
}
