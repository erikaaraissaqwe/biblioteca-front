$(document).ready(function() {
    var pessoas = JSON.parse(localStorage.getItem("pessoas"))

    //Função que retorna uma pessoa baseado no seu cpf
    function get_pessoa(cpf) {
        var pessoa
        pessoas.forEach(p => {
            if (p.cpf === cpf) {
                pessoa = p
            }
        });
        return pessoa
    }

    //Converte a data para o padrão certo
    function convertDate(date) {
        var yyyy = date.getFullYear().toString();
        var mm = (date.getMonth() + 1).toString();
        var dd = (date.getDate() + 1).toString();
        var mmChars = mm.split('');
        var ddChars = dd.split('');

        return yyyy + '-' + (mmChars[1] ? mm : "0" + mmChars[0]) + '-' + (ddChars[1] ? dd : "0" + ddChars[0]);
    }

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

    //Editar pessoa
    $("#editarPessoa").ready(function() {
        var pessoa = get_pessoa(localStorage.getItem('cpfDetalhes'))
        $("#nome").val(pessoa.nome)
        $("#cpf").val(pessoa.cpf)
        data = pessoa.nascimento.split("/")
        $("#dataNascimento").val(convertDate(new Date((data[2] + "-" + data[1] + "-" + data[0]))))
        $('#emails').empty();
        pessoa.emails.forEach(email => {
            $('#emails').append(
                "<input class='emails' type='text' value=" + email + ">"
            )
        });
        $('#telefones').empty();
        pessoa.telefones.forEach(telefone => {
            $('#telefones').append(
                "<input class='telefones' type='text' value=" + telefone + ">"
            )
        });
        $("#endereco").val(pessoa.rua)
        $("#numero").val(pessoa.nro)
        $("#cep").val(pessoa.cep)
        $('#profissao').val(pessoa.profissao)

        //voltar pagina
        $('#back').click(function(e) {
            e.preventDefault();
            window.location.replace("gerenciaPessoa.html")
        })

        //salvar
        $('#save').click(function(e) {
            e.preventDefault();
            alert("Alterações salvas com sucesso!")
            window.location.replace("gerenciaPessoa.html")
        })
    })


})