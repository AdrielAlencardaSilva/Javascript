var nome = window.prompt ('Óla, qual seu nome ?')
alert(`Seja bem vindo, ${nome} ! `)

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        document.body.style.background = 'yellow'
        img.src = 'manha.png'

    } else if (hora > 12 && hora <= 18) {
        document.body.style.background = 'slategray'
        img.src = 'tarde.png'

    } else {
        document.body.style.background = 'blue'
        img.src = 'noite.png'
    }
}