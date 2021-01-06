<?php

namespace App\Controller\View;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/** @Route("/post"), name="posts_" */
class PostPageController extends AbstractController
{
    /** @Route(
     *     "/{uuid}",
     *      name="get_post_page",
     *      options={"expose"=true},
     *      methods={"GET"}
     *     )
     */
    public function getPostPageAction(string $uuid)
    {
        $userName = null;
        if ($this->getUser()) {
            $userName = $this->getUser()->getUsername();
        }

        return $this->render(
            "post_page.html.twig",
            [
                'username' => $userName,
                'post' => $uuid
            ]
        );
    }
}