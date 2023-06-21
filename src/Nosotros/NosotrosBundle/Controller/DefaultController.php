<?php

namespace Nosotros\NosotrosBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function nosotrosAction()
    {
        return $this->render('NosotrosNosotrosBundle:Default:index.html.twig');
    }
   
}
