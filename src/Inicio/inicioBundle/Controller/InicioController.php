<?php

namespace Inicio\inicioBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Utilerias\TextoBundle\Model\TextoModel;
use Symfony\Component\HttpFoundation\Request;
use Inicio\inicioBundle\model\InicioModel;


class InicioController extends Controller
{
    protected $InicioModel, $TextoModel;

    public function __construct()
    {
        $this->InicioModel = new InicioModel();
        $this->TextoModel = new TextoModel();
    }

    public function InicioAction(Request $request)
    {
        $resultTapas = $this->InicioModel->getTapas();
        return $this->render('@Inicioinicio/Default/index.html.twig', array('resultTapas' => $resultTapas['data']));
    }
}
