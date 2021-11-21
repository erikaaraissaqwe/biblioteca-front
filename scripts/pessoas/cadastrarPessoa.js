$(document).ready(function() {
    //Cadastrar pessoa
    $('#cadastrarPessoa').ready(function() {
        //voltar pagina
        $('#back').click(function(e) {
                e.preventDefault();
                window.location.replace("gerenciaPessoa.html")
            })
            //salvar
        $('#save').click(function(e) {
            e.preventDefault();
            alert("Pessoa salva com sucesso!")
            window.location.replace("gerenciaPessoa.html")
        })

        //Adicionar mais campos de email
        $("#addEmails").click(function() {
            $("#emails").append(
                "<input class='emails' type='text'>"
            );
        })

        //Remover campos de email
        $("#rmEmails").click(function() {
            if ($("#emails").children().length > 1) {
                $("#emails").children().last().remove();
            }
        })

        //Adicionar campos de telefone
        $("#addTelefones").click(function() {
            $("#telefones").append(
                "<input class='telefones' type='text'>"
            );
        })

        //remover campos de telefone
        $("#rmTelefones").click(function() {
            if ($("#telefones").children().length > 1) {
                $("#telefones").children().last().remove();
            }
        })
    })
})