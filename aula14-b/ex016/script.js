function contar(){
    let i = document.getElementById('txti')
    let f = document.getElementById('txtf')
    let p = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        alert('[ERRO] Dados Incompletos')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let inicio = Number(i.value)
        let fim = Number(f.value)
        let passo = Number(p.value)

        if (passo <= 0){
            alert('Passo invalido, valor considerado = 1')
            passo = 1
        }

        if (inicio < fim){
            for(let c = inicio;c <= fim; c += passo) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for(let c = inicio; c >= fim; c -= passo) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C}`
    }
}