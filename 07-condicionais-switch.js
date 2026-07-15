// document.body.innerHTML = "Testando"
// switch/case
// o switch é mais organizado quando você precisa verificar se uma variável é igual a UM entre VÁRIOS VALORES

/* 

switch(condição){
  case 1:
    // código do case 1

  case 2:
    // código do case 2

}

*/

let dia = 16

switch (dia) {
  case 14:
    document.body.innerHTML = "Terça-feira"
    break // serve para impedir que o programa execute os próximos cases

  case 15:
    document.body.innerHTML = "Quarta-feira. Aula de projeto"
    break

  case 16:
    document.body.innerHTML = "Quinta-feira. Aula de JavaScript"
    break

  default: // funciona como um plano B caso nenhuma das opções acima seja atendida
    document.body.innerHTML = "Data inválida"
    break
}