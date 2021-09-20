function carregar(){
    var msg = window.document.getElementById('msg')
    var msgGrande = window.document.getElementById('msgGrande')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds()

    function atualizaHora(){
        data = new Date()
        hora = data.getHours()
        minutos = data.getMinutes()
        segundos = data.getSeconds()
        msg.innerHTML = `Agora são ${hora} horas ${minutos} minutos e ${segundos} segundos`

        setTimeout(atualizaHora, 1000)
    }
   
    if(hora >= 0 && hora < 12) {
        msgGrande.innerHTML = 'Bom dia!'
        document.body.style.background = '#468ee9'
    } else if(hora >= 12 && hora <= 18) {
        msgGrande.innerHTML = 'Boa tarde!'
        document.body.style.background = '#e65908'
    } else {
        msgGrande.innerHTML = 'Boa noite!'
        document.body.style.background = '#1f021c'
    }

    atualizaHora()
}