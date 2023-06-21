<?php

namespace Tapas\TapasBundle\model;

use Utilerias\SQLBundle\Model\SQLModel;

class TapasModel extends SQLModel {
    
    protected $SQLModel;

    public function __construct()
    {
        $this->SQLModel = new SQLModel();
    }

    public function getTapas()
    {
        $query = 'SELECT * FROM "SAD"."tapa"';
        return $this->SQLModel->executeQuery($query);
        
    }
}