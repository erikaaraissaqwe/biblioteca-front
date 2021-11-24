$(document).ready(function(){
    var livros = JSON.parse(localStorage.getItem("livros"))

    //Função que retorna um livro baseado no seu isbn
    function get_livro(isbn){
        var livro
        livros.forEach(l => {
                if(l.isbn === isbn){
                    livro = l
                }
            });
        return livro
    }

    //Montar Lista de livros
    $('#tabela_livros').ready(function(){
        var linhas = ""
        livros.forEach(l => {
            linhas +="<tr>\
                        <td class='td_name'>"+l.titulo+"</p></td>\
                        <td>\
                            <div class='acoes'>\
                                <a class='link_acao' value="+l.isbn+" href='./detalhesLivro.html'>\
                                    <div>\
                                        <img src='../../assets/open-book.png'>\
                                        <p>Ver perfil</p>\
                                    </div>\
                                </a>\
                                <a class='link_acao' value="+l.isbn+">\
                                    <div>\
                                        <img src='../../assets/bin.png'>\
                                        <p>Deletar</p>\
                                    </div>\
                                </a>\
                                <a class='link_acao' value="+l.isbn+" href='./editarLivro.html'>\
                                    <div>\
                                        <img src='../../assets/editing.png'>\
                                        <p>Editar</p>\
                                    </div>\
                                </a>\
                            </div>\
                        </td>\
                    </tr>"
        });

        $('#tabela_livros').find('tbody').append(linhas)

        //Salva ao cpf da pessoal clicada
        $("a.link_acao").click(function(){
            option = $(this).find('p').text()
            isbn = $(this).attr('value')
            localStorage.setItem('isbnDetalhes', isbn);
            //Simular a remoção de uma pessoa
            if(option === "Deletar"){
                livro = get_livro(isbn)
                var r = confirm("Deseja remover o livro "+livro.titulo+"?");
                if (r == true) {
                    alert("Livro "+livro.titulo+" removido!");
                }
                else {
                    alert("Livro "+livro.titulo+" não foi removido!");
                }
            }
        });
    })
})