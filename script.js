//var diferencaIdade = diferenca
function diferencaIdade(diferenca) {
  document.write(diferenca) //quando eu imprimo o atributo "diferenca", estou chamado o que foi declarado fora da function
}

var minhaIdade = 27
var idadeIrmao = 26
var diferencaEntreNos = minhaIdade - idadeIrmao

diferencaIdade(
  //o código dentro das chaves é o atributo "diferenca" dentro das chaves da function "diferencaIdade"
  'A diferença de idade entre eu e meu irmão é: ' + diferencaEntreNos + ' anos'
)
