function calcular(){
    var n = new Date
    var data = n.getFullYear()
    var nasc = document.getElementById('txtf')
    var res = document.querySelector('div#res')
    if (nasc.value.length == 0 || nasc.value > data){
        alert('[ERRO] Data invalida')
    } else {
        var sex = document.getElementsByName('fsex')
        var idade = data - Number(nasc.value)
        var genero = ''
        if (sex[0].checked){
            genero = 'homem'

             
        }
    }

    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    img.src = 'jovem-m.png'
}