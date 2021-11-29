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
            if(true){
                alert("Pessoa salva com sucesso!");
                window.location.replace("gerenciaLivro.html");
            }
            
        })

        //Adicionar mais campos de email
        $("#addAutores").click(function() {
            $("#autores").append(
                "<input class='autores' type='text' required>"
            );
        })

        //Remover campos de email
        $("#rmAutores").click(function() {
            if ($("#autores").children().length > 1) {
                $("#autores").children().last().remove();
            }
        })
    })

    function validar(){
        let salvar = true;
        if(document.getElementById("titulo").value === ""){
            document.getElementById("reqNome").innerHTML = "Este campo é requerido."
            salvar = false;
        }
        if(document.getElementsByClassName("emails")[0].value === ""){
            document.getElementById("reqEmail").innerHTML = "Este campo é requerido."
            salvar = false;
        }
        if(document.getElementById("dataNascimento").value === ""){
            document.getElementById("reqData").innerHTML = "Este campo é requerido."
            salvar = false;
        }
        if(document.getElementById("endereco").value === ""){
            document.getElementById("reqEnd").innerHTML = "Este campo é requerido."
            salvar = false;
        }
        if(document.getElementById("cpf").value === ""){
            document.getElementById("reqCpf").innerHTML = "Este campo é requerido."
            salvar = false;
        }
        if(document.getElementsByClassName("telefones")[0].value === ""){
            document.getElementById("reqTel").innerHTML = "Este campo é requerido."
            salvar = false;
        }
        if(document.getElementById("profissao").value === ""){
            document.getElementById("reqProf").innerHTML = "Este campo é requerido."
            salvar = false;
        }
        if(document.getElementById("numero").value === ""){
            document.getElementById("reqNum").innerHTML = "Este campo é requerido."
            salvar = false;
        }
        if(document.getElementById("cep").value === ""){
            document.getElementById("reqCep").innerHTML = "Este campo é requerido."
            salvar = false;
        }

        return salvar;
    }
})