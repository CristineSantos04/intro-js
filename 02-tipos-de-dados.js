// os tipos de dados primitivos do javaScript são
// 1 - string - cadeia de caracteres, usamos para texto
let nome = "Denian"
let sobrenome = "Moraes"

console.log(nome)


// 2 - number
// serve para armazenar números, sendo eles inteiros ou decimais
let idade = 20
let preco = 19.90

// 3 - bigint
// serve para garantir a precisão de números muito grandes
let numero = 123456789012345678901234567890n


// 4 - boolean - possui apenas dois valores, sendo eles o false(falso) e o true(verdadeiro)
let conectado = false
conectado = true

let ligado = true
let desligado = false

// 5 - undefined - não definidio.
// singnica que uma variável foi criado, mas ainda não recebeu valor
let nomePessoa
console.log(nomePessoa)


// 6 - null - vazio
// representa um valor vazio definido intencionalmente
let usuario = null


// 7 - symbol - é um identificador único
// uso mais comum é em bibliotecas de códigos mais avançados
const id1 = Symbol()
const id2 = Symbol()

console.log(id1)
console.log(id2)