    arrayDoadores = ({nome: nome, idade: idade, peso: peso, tipoSangue: tipoSangue, dataDoacao: dataDoacao})
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

function listarDoadores () {
    let list = `--------------------
    LISTAGEM DE DOADORES:
    --------------------
    NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
    -----------------------------------------------------------------
    João da Silva    |  25   |  70  |      AB-       |   01/01/2022  
    Maria Santos     |  35   |  65  |      A+        |   03/02/2022  
    José Almeida     |  45   |  80  |      O+        |   10/01/2022  
    Ana Oliveira     |  27   |  58  |      B-        |   22/04/2022  
    Carlos Silva     |  30   |  75  |      A-        |   14/03/2022  
    -----------------------------------------------------------------`

for(doador of arrayDoadores){
    `${doador.nome}  |  ${doador.idade}  |   ${doador.peso}  |  ${doador.tipoSangue}   |  ${doador.dataDoacao}`
}
list += `---------------------------------------------------`
  let listagem = prompt()

}


 
 

menu()

