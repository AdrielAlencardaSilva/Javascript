function sorteio () {
    var n1 = document.getElementById ('num')
    var res = document.getElementById ('res')
    var numero = Number(n1.value)
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    
    res.innerHTML = ('')
    if (numero == 10) {
        res.innerHTML += 'Parabens você ganhou!'
        res.style.fontSize = '2em'
        img.style.padding = '20px'
        document.body.style.background = 'aqua'
        document.body.style.color = 'black'
        img.setAttribute('src', 'feliz.png')
        img.style.display = 'block'
        img.style.margin = 'auto'
    } else {
        res.innerHTML += 'Infelizmente você perdeu!'
        res.style.fontSize = '2em'
        document.body.style.background = 'black'
        document.body.style.color = 'blue'
        img.setAttribute('src', 'triste.png')
        img.style.padding = '20px'
        img.style.display = 'block'
        img.style.margin = 'auto'
         
    }
    res.appendChild(img)
     
}