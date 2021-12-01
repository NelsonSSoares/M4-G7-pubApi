const conexao = require('../infra/conexao');

class EntradasDAO{
    constructor(conexao){
        this.conexao = conexao;
    }

    selectAllEntradas(){

    }
    
    selectEntradasById(){

    }
    
    insertEntradas(){

    }

    updateEntradas(){

    }

    deleteEntradas(){
        
    }



}

module.exports = new EntradasDAO(conexao);