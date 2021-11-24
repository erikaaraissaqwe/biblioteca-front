$(document).ready(function(){
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


    //Detalhes de Pessoas
    $("#detalhesLivro").ready(function(){
        var livro = get_livro(localStorage.getItem('isbnDetalhes'))

        $("#detalhesLivro").append(
            "<h2>Detalhes sobre "+livro.titulo+" </h2>\
            <div>\
                <p> Nome: "+livro.titulo+"</p>\
                <p> Género: "+livro.genero+"</p>\
                <p> ISBN: "+livro.isbn+"</p>\
                <p> Autores:"+livro.autores.join(', ')+"</p>\
                <p> Número de paginas: "+livro.nPaginas+"</p>\
            </div>\
            <button id='back'>Voltar</button>"
        )
        
        //voltar pagina
        $('#back').click(function(){
            window.location.replace("gerenciaLivro.html")
        })
    })
})

