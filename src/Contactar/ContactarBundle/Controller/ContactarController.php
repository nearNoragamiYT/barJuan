<?php

namespace Contactar\ContactarBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\BrowserKit\Request;

class ContactarController extends Controller
{
    public function contactarAction($sitio)
    {
        return $this->render('@ContactarContactar/Default/bares.html.twig',array("sitio"=>$sitio));
    }
}
