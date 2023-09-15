arrayDoadores = [
    {nome: "JOAO", idade: "17", peso: "80", tipoSangue: "A+", dataDoacao: "11/09/2011"},
    {nome: "DAVI", idade: "27", peso: "70", tipoSangue: "O-", dataDoacao: "16/05/2006"},
    {nome: "ERICK", idade: "69", peso: "60", tipoSangue: "A+", dataDoacao: "24/09/2018"}
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
        //Rage quit/ n quero esse site ou simplesmente sair
        break;

      default:
        alert("Opção inválida. Tente novamente.");
        menu();
    }
}


//CASE 1
function cadastrarDoador () {
    let nome = prompt("Digite seu nome:").toUpperCase()
    let idade = prompt("Digite sua idade:").toUpperCase()
    let peso = prompt("Insira seu peso:").toUpperCase()
    let tipoSangue = prompt("Digite seu tipo sanguíneo:").toUpperCase()
    let dataDoacao = prompt("Por fim, a data de sua última doação de sangue:").toUpperCase()

    arrayDoadores.push({nome: nome, idade: idade, peso: peso, tipoSangue: tipoSangue, dataDoacao: dataDoacao})
}

//CASE 2
function listarDoadores () {
    let lista = `
 --------------------
LISTAGEM DE DOADORES:
--------------------
NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
-----------------------------------------------------------------
 
`
   for(doador of arrayDoadores){
     lista += `${doador.nome.padEnd(20)}|  ${doador.idade.padEnd(5)}|  ${doador.peso.padEnd(5)}|  ${doador.tipoSangue.padEnd(24)}|  ${doador.dataDoacao.padEnd(10)}      

`  }

lista += `-----------------------------------------------------------------`

 prompt(lista) 
}

//CASE 3
function buscarTipoSangue (){
 let buscar = prompt(`Tipo sanguíneo a procurar:`)
 const novoArray = []
 let lista = `
 --------------------
 LISTAGEM DE DOADORES COMPATÍVEIS:
 --------------------
 NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
 -----------------------------------------------------------------
 
 `
  for(let doador of arrayDoadores){
      if(doador.tipoSangue.toUpperCase() === buscar.toUpperCase()){
        novoArray.push(doador)
        }
      }

      for(let novoDoador of novoArray){
        lista += `
   ${novoDoador.nome.padEnd(20)}|  ${novoDoador.idade.padEnd(5)}|  ${novoDoador.peso.padEnd(5)}|  ${novoDoador.tipoSangue.padEnd(24)}| ${novoDoador.dataDoacao.padEnd(10)}       
  
    ` }

  lista += `
  -----------------------------------------------------------------`
  prompt(lista) 
  }


//CASE 4
function buscarPorData(){
  let buscarData = prompt(`Data a procurar:`)
  const novoArray2 = []
  let listaData = `
  --------------------
  DOAÇÕES REALIZADAS EM ${buscarData} E ANTERIORES:
  --------------------
  NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO
  -----------------------------------------------------------------
  
  `

  const buscaSplit = buscarData.split('/')

  for(let doador of arrayDoadores){
    const splitDoador = doador.dataDoacao.split('/')
   
    if(Number(splitDoador[2]) <= Number(buscaSplit[2])){
      novoArray2.push(doador)
      }
    }

  for(let novoDoador2 of novoArray2){
    listaData += `${novoDoador2.nome.padEnd(20)}|  ${novoDoador2.idade.padEnd(5)}|  ${novoDoador2.peso.padEnd(5)}|  ${novoDoador2.tipoSangue.padEnd(30)}|  ${novoDoador2.dataDoacao.padEnd(10)}       
   
   ` }
     

  listaData += `
  -----------------------------------------------------------------`
     
  prompt(listaData) 
  

}

//CASE 5



menu()
