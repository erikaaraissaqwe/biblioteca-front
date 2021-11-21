$(document).ready(function(){
    var pessoas = JSON.parse(localStorage.getItem("pessoas"))

    //Função que retorna uma pessoa baseado no seu cpf
    function get_pessoa(cpf){
        var pessoa
        pessoas.forEach(p => {
                if(p.cpf === cpf){
                    pessoa = p
                }
            });
        return pessoa
    }

    //Montar Lista de pessoas
    $('#tabela_pessoas').ready(function(){
        var linhas = ""
        pessoas.forEach(p => {
            linhas +="<tr>\
                        <td class='td_name'>"+p.nome+"</p></td>\
                        <td>\
                            <div class='acoes'>\
                                <a class='link_acao' value="+p.cpf+" href='../../pages/pessoas/detalhesPessoa.html'>\
                                    <div>\
                                        <img src='../../assets/user.png'>\
                                        <p>Ver perfil</p>\
                                    </div>\
                                </a>\
                                <a class='link_acao' value="+p.cpf+">\
                                    <div>\
                                        <img src='../../assets/bin.png'>\
                                        <p>Deletar</p>\
                                    </div>\
                                </a>\
                                <a class='link_acao' value="+p.cpf+" href='../../pages/pessoas/editarPessoa.html'>\
                                    <div>\
                                        <img src='../../assets/editing.png'>\
                                        <p>Editar</p>\
                                    </div>\
                                </a>\
                            </div>\
                        </td>\
                    </tr>"
        });

        $('#tabela_pessoas').find('tbody').append(linhas)

        //Salva ao cpf da pessoal clicada
        $("a.link_acao").click(function(){
            option = $(this).find('p').text()
            cpf = $(this).attr('value')
            localStorage.setItem('cpfDetalhes', cpf);
            //Simular a remoção de uma pessoa
            if(option === "Deletar"){
                pessoa = get_pessoa(cpf)
                var r = confirm("Deseja remover o usuário "+pessoa.nome+"?");
                if (r == true) {
                    alert("Usuário "+pessoa.nome+" removido!");
                }
                else {
                    alert("Usuário "+pessoa.nome+" não foi removido!");
                }
            }
        });
    })
})