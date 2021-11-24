$(document).ready(function() {
    var livros = JSON.parse(localStorage.getItem("livros"))

    //Função que retorna um livro baseado no seu isbn
    function get_livro(isbn){
        var livro
        livros.forEach(l => {
            console.log(l.isbn)
            console.log(l)
                if(l.isbn === isbn){
                    livro = l
                }
            });
        return livro
    }


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

    //Editar pessoa
    $("#editarLivro").ready(function() {
        var livro = get_livro(localStorage.getItem('isbnDetalhes'))
        $("#titulo").val(livro.titulo)
        $("#isbn").val(livro.isbn)
        $('#autores').empty();
        livro.autores.forEach(autor => {
            $('#autores').append(
                "<input class='autores' type='text' value='" + autor + "'>"
            )
        });
        $("#genero").val(livro.genero)
        $("#nPaginas").val(livro.nPaginas)

        //voltar pagina
        $('#back').click(function(e) {
            e.preventDefault();
            window.location.replace("gerenciaLivro.html")
        })

        //salvar
        $('#save').click(function(e) {
            e.preventDefault();
            alert("Alterações salvas com sucesso!")
            window.location.replace("gerenciaLivro.html")
        })
    })


})