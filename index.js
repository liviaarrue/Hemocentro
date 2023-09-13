arrayDoadores = [
    {nome: "nome", idade: "idade", peso: "peso", tipoSangue: "tipoSangue", dataDoacao: "dataDoacao"},
    {nome: "noe", idade: "ide", peso: "pes", tipoSangue: "tipoSgue", dataDoacao: "dataD"},
    {nome: "nme", idade: "iade", peso: "eso", tipoSangue: "tipangue", dataDoacao: "dataao"}
]

function menu() {
    let opcao = Number(prompt(
        `===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
      1. Cadastrar doador
      2. Listar doadores
      3. Buscar doador por tipo sanguíneo
      4. Buscar doador por data da última doação
      5. Sair
      Escolha uma opção:`)
    )
    
    

    switch (opcao) {
      case 1:
        cadastrarDoador();
        break;
      case 2:
        listarDoadores();
        break;
      case 3:
        buscarTipoSangue();
        break;
      case 4:
        buscarPorData();
        break;
      case 5:
        
        break;

      default:
        alert("Opção inválida. Tente novamente.");
        menu();
    }
}

function cadastrarDoador () {
    let nome = prompt("Digite seu nome:")
    let idade = prompt("Digite sua idade:")
    let peso = prompt("Insira seu peso:")
    let tipoSangue = prompt("Digite seu tipo sanguíneo:")
    let dataDoacao = prompt("Por fim, a data de sua última doação de sangue:")

    arrayDoadores.push({nome: nome, idade: idade, peso: peso, tipoSangue: tipoSangue, dataDoacao: dataDoacao})
}

function listarDoadores () {
    let lista = `
 --------------------
LISTAGEM DE DOADORES:
--------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------
 
`
     for(doador of arrayDoadores){
       lista += `${doador.nome}    |  ${doador.idade}   |  ${doador.peso}  |      ${doador.tipoSangue}       |   ${doador.dataDoacao} `

     }

lista += `-----------------------------------------------------------------`

let listagem = prompt(`${lista}`) }

function buscarTipoSangue () {
    let buscar = prompt(`Tipo sanguíneo a procurar:`)
}

menu()
