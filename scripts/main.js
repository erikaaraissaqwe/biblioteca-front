
$(document).ready(function(){

    //Lista que simula pessoas de um banco de dados
    var pessoas = [
        {
            cpf: "05575072002",
            nome: "Naowi Ferreira",
            rua: "Marta Clemente",
            nro: "01",
            cep: "14715-000",
            emails: ["Naowi01@gmail.com", "NaowiFerreira@gmail.com"],
            telefones: ["(00)0000-0001","(99)99999-9999"],
            nascimento: "30/01/1999",
            profissao: "Aluno"
        },
        {
            cpf: "87376535047",
            nome: "Nuwea da Silva",
            rua: "Maria Pecemente",
            nro: "31",
            cep: "13912-000",
            emails: ["Nuwea01@gmail.com", "NuweaSilva@gmail.com"],
            telefones: ["(00)0000-0031","(99)99999-8899"],
            nascimento: "17/07/2000",
            profissao: "Professor"
        },
    ]

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

    function convertDate(date) {
        console.log(date)
        var yyyy = date.getFullYear().toString();
        var mm = (date.getMonth()+1).toString();
        var dd  = (date.getDate()+1).toString();
        console.log(dd)
        var mmChars = mm.split('');
        var ddChars = dd.split('');

        return yyyy + '-' + (mmChars[1]?mm:"0"+mmChars[0]) + '-' + (ddChars[1]?dd:"0"+ddChars[0]);
    }

    //Adicionar mais campos de email
    $("#addEmails").click(function(){
        $("#emails").append(
            "<input class='emails' type='text'>"
        );
    })

    //Remover campos de email
    $("#rmEmails").click(function(){
        if($("#emails").children().length>1){
            $("#emails").children().last().remove();
        }
    })

    //Adicionar campos de telefone
    $("#addTelefones").click(function(){
        $("#telefones").append(
            "<input class='telefones' type='text'>"
        );
    })

    //remover campos de telefone
    $("#rmTelefones").click(function(){
        if($("#telefones").children().length>1){
            $("#telefones").children().last().remove();
        }
    })

    //Montar Lista de pessoas
    $('#tabela_pessoas').ready(function(){
        var linhas = ""
        pessoas.forEach(p => {
            linhas +="<tr>\
                        <td class='td_name'>"+p.nome+"</p></td>\
                        <td>\
                            <div class='acoes'>\
                                <a class='link_acao' value="+p.cpf+" href='../pages/detalhesPessoa.html'>\
                                    <div>\
                                        <img src='../assets/user.png'>\
                                        <p>Ver perfil</p>\
                                    </div>\
                                </a>\
                                <a class='link_acao' value="+p.cpf+">\
                                    <div>\
                                        <img src='../assets/bin.png'>\
                                        <p>Deletar</p>\
                                    </div>\
                                </a>\
                                <a class='link_acao' value="+p.cpf+" href='../pages/editarPessoa.html'>\
                                    <div>\
                                        <img src='../assets/editing.png'>\
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
    
    //Detalhes de Pessoas
    $("#detalhesPessoa").ready(function(){
        var pessoa = get_pessoa(localStorage.getItem('cpfDetalhes'))

        $("#detalhesPessoa").append(
            "<h2>Detalhes sobre "+pessoa.nome+" </h2>\
            <div>\
                <p> Nome: "+pessoa.nome+"</p>\
                <p> Profissao: "+pessoa.profissao+"</p>\
                <p> CPF: "+pessoa.cpf+"</p>\
                <p> Data de Nascimento: "+pessoa.nascimento+"</p>\
                <p> Endereço: Rua "+pessoa.rua+", Nº "+pessoa.nro+", "+pessoa.cep+"</p>\
                <p> Emails:"+pessoa.emails.join(', ')+"</p>\
                <p> Telefones: "+pessoa.telefones.join(', ')+"</p>\
            </div>\
            <button id='back'>Voltar</button>"
        )
        
        //voltar pagina
        $('#back').click(function(){
            window.location.replace("gerenciaPessoa.html")
        })
    })

    //Editar pessoa
    $("#editarPessoa").ready(function(){
        var pessoa = get_pessoa(localStorage.getItem('cpfDetalhes'))
        $("#nome").val(pessoa.nome)
        $("#cpf").val(pessoa.cpf)
        data = pessoa.nascimento.split("/")
        $("#dataNascimento").val(convertDate(new Date((data[2]+"-"+data[1]+"-"+data[0]))))
        $('#emails').empty();
        pessoa.emails.forEach(email => {
            $('#emails').append(
                "<input class='emails' type='text' value="+email+">"
            )
        });
        $('#telefones').empty();
        pessoa.telefones.forEach(telefone => {
            $('#telefones').append(
                "<input class='emails' type='text' value="+telefone+">"
            )
        });
        $("#endereco").val(pessoa.rua)
        $("#numero").val(pessoa.nro)
        $("#cep").val(pessoa.cep)
        $('#profissao').val(pessoa.profissao)

            //voltar pagina
            $('#back').click(function(e){
                e.preventDefault();
                window.location.replace("gerenciaPessoa.html")
            })
    })
})

