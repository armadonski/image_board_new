<?php

namespace App\Controller\View;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AuthenticationController extends AbstractController
{
    /**
     * @Route("/authentication", name="authentication", options={"expose"=true}, methods={"GET"})
     */
    public function indexAction(): Response
    {
        return $this->render('authentication.html.twig');
    }
}