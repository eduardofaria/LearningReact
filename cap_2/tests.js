/*const logCompliment = function(firstName) {
    console.log(`Teste teste teste, ${firstName}`);
}

logCompliment("Testado!");

const teste_2 = function(primeiro_nome, msg) {
    console.log(`Essa é o nome: ${primeiro_nome} e essa é a mensagem: ${msg}`);
}

teste_2("Eduardo", "Testando 123!");

const create_msg = function (nome, msg){
    return `${nome}: ${msg}`;
}

console.log(create_msg("Eduardo", "Teste 123"));


function registro_atividades(nome = "Eduardo", atividade = "Teste 123", pontos = 10){
    console.log(`${nome}: ${atividade} (${pontos})`)
}



//registro_atividades();

const registro_padrao = {
    nome_completo: {
    nome: "Transeunte",
    sobrenome: "da Silva"
}, atividade_fav: "Passando"
}

function registro_atividades_2(pessoa = registro_padrao) {
    console.log(`${pessoa.nome_completo.sobrenome} testa isso apenas ${pessoa.atividade_fav}`);
}

registro_atividades_2();
*/

// const registro_padrao = {nome_completo: {nome: "Transeunte", sobrenome: "da Silva"}, atividade_fav: "Passando"}

const obj_padrao = {
    basico: {
        nome: "Fulano",
        idade: 20,
        status: "Ativo"
    }, extra: {
        atividade: "CODE",
        tipo: "JS"
    }
}

function listarDados(objeto = obj_padrao) {
    console.log(`Nome: ${objeto.basico.nome} (${objeto.basico.idade}) - ${objeto.basico.status.toUpperCase()}\n / ${objeto.extra.atividade} : ${objeto.extra.tipo} /`);
}

listarDados();

console.log(`Teste: ${obj_padrao.basico.nome}`); // descobri que ele trás os dados diretamente mesmo sem declarar uma função :)