function carregar(){
    var data = new Date
    var hora = 22//data.getHours()
    msg.innerHTML = `Agora são exatamente ${hora} horas`
    if (hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#f8ed7f'
    } else if (hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = '#a85801'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#1f5594'
    }
}