$(document).ready(function() {
    //Cadastrar pessoa
    $('#cadastrarPessoa').ready(function() {
        //voltar pagina
        $('#back').click(function(e) {
                e.preventDefault();
                window.location.replace("gerenciaLivro.html")
            })
            //salvar
        $('#save').click(function(e) {
            e.preventDefault();
            alert("Pessoa salva com sucesso!")
            window.location.replace("gerenciaLivro.html")
        })

        //Adicionar mais campos de email
        $("#addAutores").click(function() {
            $("#autores").append(
                "<input class='autores' type='text'>"
            );
        })

        //Remover campos de email
        $("#rmAutores").click(function() {
            if ($("#autores").children().length > 1) {
                $("#autores").children().last().remove();
            }
        })

    })
})