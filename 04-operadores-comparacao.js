// operadores de comparação são usados para comparar valores
// o resultado de uma comparação É SEMPRE um valor booleano: true ou false

// 1 - igual ==
// compara os valores, mas faz converte o tipo antes de comparar
console.log(5 == 5)
console.log(5 == "5")

// 2 - igual estrito ===
// compara tipo e valor. NÃO FAZ conversão
console.log(5 === 5)
console.log("5" === 5)

// 3 - maior que >
console.log(10 > 5) // true
console.log(3 > 7) // false

// 4 - menor que <
console.log(10 < 5) // false
console.log(3 < 7) // true

// 5 - maior ou igual >=
console.log(10 >= 10) // true
console.log(12 >= 8) // true
console.log(5 >= 9) // false

// 6 - menor ou igual <=
console.log(10 <= 10) // true
console.log(12 <= 8) // false
console.log(5 <= 9) // true