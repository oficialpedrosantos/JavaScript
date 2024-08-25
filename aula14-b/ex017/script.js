function tabuada(){
    let n = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    if (n.value.length == 0){
        alert('[Erro] Digite um número!')
    } else {
        let num = Number(n.value)
        /*let cont = 1
        tab.innerHTML = ''
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${num} x ${cont} = ${num*cont}`
            text.value = `tab${cont}`
            tab.appendChild(item)
            cont++
        }
    }*/
}