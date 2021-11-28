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
            if(validar()){
                alert("Pessoa salva com sucesso!")
                window.location.replace("gerenciaPessoa.html")
            }
           
        })

        //Adicionar mais campos de email
        $("#addEmails").click(function() {
            $("#emails").append(
                "<input class='emails' type='text' required>"
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
                "<input class='telefones' type='text' required>"
            );
        })

        //remover campos de telefone
        $("#rmTelefones").click(function() {
            if ($("#telefones").children().length > 1) {
                $("#telefones").children().last().remove();
            }
        })
    })

    function validar(){
        let salvar = true;
        if(document.getElementById("nome").innerHTML === ""){
            document.getElementById("reqNome").innerHTML = "Este campo é requerido.";
            salvar = false;
        }
        if(document.getElementsByClassName("emails")[0].innerHTML === ""){
            document.getElementById("reqEmail").innerHTML = "Este campo é requerido.";
            salvar = false;
        }
        if(document.getElementById("dataNascimento").innerHTML === ""){
            document.getElementById("reqData").innerHTML = "Este campo é requerido.";
            salvar = false;
        }
        if(document.getElementById("endereco").innerHTML === ""){
            document.getElementById("reqEnd").innerHTML = "Este campo é requerido.";
            salvar = false;
        }
        if(document.getElementById("cpf").innerHTML === ""){
            document.getElementById("reqCpf").innerHTML = "Este campo é requerido.";
            salvar = false;
        }
        if(document.getElementsByClassName("telefones")[0].innerHTML === ""){
            document.getElementById("reqTel").innerHTML = "Este campo é requerido.";
            salvar = false;
        }
        if(document.getElementById("profissao").innerHTML === ""){
            document.getElementById("reqProf").innerHTML = "Este campo é requerido.";
            salvar = false;
        }
        if(document.getElementById("numero").innerHTML === ""){
            document.getElementById("reqNum").innerHTML = "Este campo é requerido.";
            salvar = false;
        }
        if(document.getElementById("cep").innerHTML === ""){
            document.getElementById("reqCep").innerHTML = "Este campo é requerido.";
            salvar = false;
        }

        return salvar;
    }
})