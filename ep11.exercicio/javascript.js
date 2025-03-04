function verificar() {
    var num = document.getElementById('quest')
    var resp = document.getElementById('res')
    resp.innerText = ''
    var n = Number(num.value)
    if (n == 99) {
        resp.innerHTML += 'Resposta correta!'
    } else {
        resp.innerHTML += 'Resposta errada!'
    }
}

function clicar() {
    var idade = document.getElementById('ida')
    var resposta = document.getElementById('resposta')
    var id = Number(idade.value)
    resposta.innerHTML = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (id >= 1 && id <=12) {
        resposta.innerHTML += `você tem ${id} anos!`
        img.setAttribute('src', 'gojo.png')
        img.style.margin = 'auto'
        img.style.display = 'block'
    } else if(id >= 13 && id <=18) {
        resposta.innerHTML += `Você tem ${id} anos! Já tá nascendo cabelo.`
        img.setAttribute('src', 'adoles.png')
        img.style.margin = 'auto'
        img.style.display = 'block'
    } else if (id > 18 && id <= 50) {
        resposta.innerHTML += `Você tem ${id} anos! VAGABUNDO.`
        img.setAttribute('src', 'aldul.png')
        img.style.margin = 'auto'
        img.style.display = 'block'
    } else {
        resposta.innerHTML += `Você tem ${id} anos! Jájá bate as botas.`
        img.setAttribute('src', 'vey.png')
        img.style.margin = 'auto'
        img.style.display = 'block'

    }
      
    resposta.appendChild(img)
    resposta.style.textAlign = 'center'
    resposta.style.color = 'white'
    img.style.paddingTop = '10px'
}
