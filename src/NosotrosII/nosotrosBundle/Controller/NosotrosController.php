<?php

namespace NosotrosII\nosotrosBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class NosotrosController extends Controller
{
    public function nosotros2Action()
    {
        return $this->render('@NosotrosIInosotros/Default/index.html.twig');
    }
}
