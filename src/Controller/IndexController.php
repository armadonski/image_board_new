<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    /**
     * @Route("/", name="index", options={"expose"=true}, methods={"GET"})
     */
    public function indexAction(): Response
    {
        $user = $this->getUser();
        $username = null;
        if ($user) {
            $username = $this->getUser()->getUsername();
        }

        return $this->render(
            'index.html.twig', [
                'username' => $username
            ]
        );
    }
}
