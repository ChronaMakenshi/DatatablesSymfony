<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DatatablesController extends AbstractController
{
    #[Route('/datatables', name: 'app_datatables')]
    public function index(): Response
    {
        return $this->render('datatables/index.html.twig', [
            'controller_name' => 'DatatablesController',
        ]);
    }
}
