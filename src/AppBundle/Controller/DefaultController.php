<?php

namespace AppBundle\Controller;

use Inicio\inicioBundle\Controller\model\InicioModel;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;


class DefaultController extends Controller
{
    private $InicioModel;
    public function __construct()
    {
        $this -> InicioModel = new InicioModel();
    }
    
    public function indexAction(Request $request)
    {
        // replace this example code with whatever you need
        return $this->render('@Inicioinicio/Default/index.html.twig');
    }
    public function getProductsAction(Int $id = 0)
    {
        $columns = ['id_product', 'name', 'active'];
        $condition = ['active' => 'true'];
        if ($id) $condition['id_product'] = $id;
        $response = $this->InicioModel->getProductsOrProduct('public', $columns, $condition);
        print_r($columns);
      
        $message = 'No hay productos';
        $response['message'] = $response['data'] ? 'OK' : $message;
        return new JsonResponse($response);
    }
}
