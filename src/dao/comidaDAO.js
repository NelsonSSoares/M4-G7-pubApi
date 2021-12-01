const conexao = require('../infra/conexao');

class ComidaDAO{
    constructor(conexao){
        this.conexao = conexao;
    }

    selectAllFood(){

    }
    
    selectFoodById(){

    }
    
    insertFood(){

    }

    updateFood(){

    }

    deleteFood(){
        
    }



}

module.exports = new ComidaDAO(conexao);