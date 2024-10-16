let num = [5, 4, 8, 3]

num.push(6)

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O vetor em ordem fica assim: ${num.sort()}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor esta na posição: ${pos}`)
}