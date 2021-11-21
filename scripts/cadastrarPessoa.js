$(document).ready(function(){
    //Cadastrar pessoa
    $('#cadastrarPessoa').ready(function(){
        //voltar pagina
        $('#back').click(function(e){
            e.preventDefault();
            window.location.replace("gerenciaPessoa.html")
        })
    })
})