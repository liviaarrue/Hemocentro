arrayDoadores = [({nome: "Icaro", idade: "17", peso: "54", tipoSangue: "A-", dataDoacao: "17/09/2022"}),
({nome: "Akame", idade: "15", peso: "73", tipoSangue: "O-", dataDoacao: "09/04/2023"}),
({nome: "Bento", idade: "14", peso: "71", tipoSangue: "A+", dataDoacao: "23/12/2021"})]
function menu() {
    var opcao = Number(
      prompt(`
      ===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====
      1. Cadastrar doador
      2. Listar doadores
      3. Buscar doador por tipo sanguíneo
      4. Buscar doador por data da última doação
      5. Sair
      Escolha uma opção:`)
    );
     switch (opcao) {
      case 1:
     cadastrarDoador()  
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
        // Sair
        break;
      default:
        alert("Opção inválida. Tente novamente.");
        menu();
    }
}
function cadastrarDoador () {
    let nome = prompt("Digite seu nome:")
    let idade = prompt("Digite sua idade:")
    let peso = prompt("Insire seu peso:")
    let tipoSangue = prompt("Insire seu tipo sanguíneo:")
    let dataDoacao = prompt("Digite sua última data de doação de sangue:")

    arrayDoadores.push({nome: nome, idade: idade, peso: peso, tipoSangue: tipoSangue, dataDoacao: dataDoacao})
}

function listarDoadores () { let list = `--------------------
LISTAGEM DE DOADORES:
--------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO 
-----------------------------------------------------------------`
for(doador of arrayDoadores){
`${doador.nome}  |  ${doador.idade}  |   ${doador.peso}  |  ${doador.tipoSangue}   |  ${doador.dataDoacao}`

list += `---------------------------------------------------`
}
let listagem = prompt(`${list}`) }
    let list = `--------------------
    LISTAGEM DE DOADORES:
    --------------------
    NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO 
    -----------------------------------------------------------------`
for(doador of arrayDoadores){
    `${doador.nome}  |  ${doador.idade}  |   ${doador.peso}  |  ${doador.tipoSangue}   |  ${doador.dataDoacao}`
}

function buscarTipoSangue (){
  let buscarSangue = prompt(`Tipo sanguíneo a procurar`)
  const listaSangue = []

  for(let doador of arrayDoadores){
    if(doador.buscarTipoSangue.toUpperCase() <= buscarSangue.toUpperCase()){
      listaSangue += ``
    }
  }
}

menu()









