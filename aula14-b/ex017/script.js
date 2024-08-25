function tabuada(){
    let n = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (n.value.length == 0){
        alert('[Erro] Digite um número!')
    } else {
        let num = Number(n.value)
        let cont = 0
        tab.innerHTML = ''
        while (cont <= 10) {
            let opt = document.createElement('option')
            opt.innerHTML = `${num} x ${cont} = ${num*cont}`
            opt.value = `tab${cont}`
            tab.appendChild(opt)
            cont++
        }
    }
}