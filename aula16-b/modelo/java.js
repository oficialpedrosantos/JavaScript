let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let resultado = document.querySelector('div#res')
valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) == -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        resultado.innerHTML = ''
    } else {
        alert('Valor invalido ou já imposto na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        alert('Adicione um valor antes de finalizar!')
    } else {
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            media = soma / valores.length
            if (valores[pos] > maior){
                maior = valores[pos]
            }
            if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        


        resultado.innerHTML = '<p>Resultado:</p>'
        resultado.innerHTML += `<p>Ao todo temos ${valores.length} números cadastrados.</p>`
        resultado.innerHTML += `<p>O menor valor adicionado foi: ${menor}</p>`
        resultado.innerHTML += `<p>O maior valor adicionado foi: ${maior}</p>`
        resultado.innerHTML += `<p>A soma dos valores foi: ${soma}</p>`
        resultado.innerHTML += `<p>A media dos valores foi: ${media}</p>`
    }
}