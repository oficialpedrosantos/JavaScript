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
            if (idade >= 0 && idade < 10){
                img.src = 'crianca-m.png'
            } else if (idade < 21){
                img.src = 'jovem-m.png'
            } else if (idade < 59){
                img.src = 'adulto-m.png'
            } else {
                img.src = 'idoso-m.png'
            }
        } else {
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                img.src = 'crianca-f.png'
            } else if (idade < 21){
                img.src = 'jovem-f.png'
            } else if (idade < 59){
                img.src = 'adulto-f.png'
            } else {
                img.src = 'idoso-f.png'
            }
        }
        }
    res.style.textAlign = 'center'
    p.style.textAlign = 'center'  
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    
}