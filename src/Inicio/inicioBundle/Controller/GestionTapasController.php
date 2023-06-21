<?php

namespace Inicio\inicioBundle\Controller;


use Inicio\inicioBundle\model\InicioModel;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Utilerias\TextoBundle\Model\TextoModel;



class GestionTapasController extends Controller
{
    protected $InicioModel, $TextoModel;

    public function __construct()
    {
        $this->InicioModel = new InicioModel();
        $this->TextoModel = new TextoModel();
    }

    public function nuevaTapaAction(Request $request)
    {
        $resultTapas = $this->InicioModel->getTapasall();
        return $this->render('@Inicioinicio/Default/nuevaTapa.html.twig', array('resultTapas' => $resultTapas['data']));
    }
}
