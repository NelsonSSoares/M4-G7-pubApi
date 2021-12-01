const conexao = require('../infra/conexao');

class EntradasDAO{
    constructor(){
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