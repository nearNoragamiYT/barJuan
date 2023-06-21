<?php

namespace Tapas\TapasBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Tapas\TapasBundle\model\TapasModel;
use Utilerias\TextoBundle\Model\TextoModel;


class TapasController extends Controller
{
    protected $TapasModel, $TextoModel, $idTapa;

    public function __construct()
    {
        $this->TapasModel = new TapasModel();
        $this->TextoModel = new TextoModel();
    }
    public function TapasAction($id)
    {
        if ($id != null) {
            $resultTapasID = $this->TapasModel->getTapas();
            foreach ($resultTapasID['data'] as $total => $idObteido) {
                if ($id == $idObteido['idtapa']) {
                    // return $this->render('TapasTapasBundle:Default:tapa.html.twig', array("id" => $resultTapasID['data'][0]));
                    // print_r("id es " . $id . " con el valor en el if" . $idObteido['idtapa']. "<br>");
                    return $this->render('TapasTapasBundle:Default:tapa.html.twig', array("id" => $idObteido));
                }
            }
        } else {
            return $this->redirectToRoute('inicioinicio_homepage');
        }
    }
}
