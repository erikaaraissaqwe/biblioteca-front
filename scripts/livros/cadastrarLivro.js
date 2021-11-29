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
            if(validar()){
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
            document.getElementById("reqTitulo").innerHTML = "Este campo é requerido."
            salvar = false;
        }
        if(document.getElementById("isbn").value === ""){
            document.getElementById("reqIsbn").innerHTML = "Este campo é requerido."
            salvar = false;
        }
        if(document.getElementById("genero").value === ""){
            document.getElementById("reqGen").innerHTML = "Este campo é requerido."
            salvar = false;
        }
        if(document.getElementById("nPaginas").value === ""){
            document.getElementById("reqPag").innerHTML = "Este campo é requerido."
            salvar = false;
        }
        if(document.getElementById("autores").value === ""){
            document.getElementById("reqAutores").innerHTML = "Este campo é requerido."
            salvar = false;
        }

        return salvar;
    }
})