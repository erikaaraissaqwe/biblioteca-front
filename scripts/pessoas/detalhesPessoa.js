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
})

