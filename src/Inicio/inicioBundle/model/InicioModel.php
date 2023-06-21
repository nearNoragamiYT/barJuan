<?php

namespace Inicio\inicioBundle\model;

use Utilerias\SQLBundle\Model\SQLModel;

class InicioModel extends SQLModel {
    
    protected $SQLModel;

    public function __construct()
    {
        $this->SQLModel = new SQLModel();
    }

    public function getTapas()
    {
        $query = 'SELECT * FROM "SAD"."tapa" where "top"=TRUE order by idtapa';
        return $this->SQLModel->executeQuery($query);
        
    }
    public function getTapasall()
    {
        $query = 'SELECT * FROM "SAD"."tapa" order by idtapa' ;
        return $this->SQLModel->executeQuery($query);
        
    }
}