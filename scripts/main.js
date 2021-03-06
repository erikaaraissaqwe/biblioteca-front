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

    var livros = [
        {
            isbn: "40028922",
            titulo: "Salock, o maligno",
            genero: "Fantasia",
            autores: ["Robson Matos", "Matias Roberson"],
            nPaginas: 500,
        },
        {
            isbn: "22982004",
            titulo: "Sangau do sul",
            genero: "Aventura",
            autores: ["Lucia Victoria", "Marina Rocha"],
            nPaginas: 317,
        },
    ]

    localStorage.setItem('livros', JSON.stringify(livros))
    localStorage.setItem('pessoas', JSON.stringify(pessoas))
})

