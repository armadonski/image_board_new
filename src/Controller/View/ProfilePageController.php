<?php

namespace App\Controller\View;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/** @Route("/profile"), name="profile_" */
class ProfilePageController extends AbstractController
{
    /**
     * @Route("/", name="profile", options={"expose"=true}, methods={"GET"})
     */
    public function getProfileAction()
    {
        $userName = null;
        if ($this->getUser()) {
            $userName = $this->getUser()->getUsername();

            return $this->render(
                'profile.html.twig',
                [
                    'username' => $userName
                ]
            );
        }
        throw $this->createNotFoundException();
    }
}