window.alert  ('Seja bem vindo(a) ao ABSOLUTE CINEMA!')
function verificar() {
    var resposta = document.getElementById('res')
    var vazios = [3, 4 , 5]

    resposta.innerHTML = ` ${vazios} `
    
}

function concluir() {
    var assento = document.getElementById('ass')
   
    var res = document.getElementById('ser')

    res.innerHTML = ''
    var a = Number(assento.value)
 
    if (a == 3 || a == 4 || a == 5) {
        res.innerHTML += 'Ok, seu assento já foi reservado!'
    } else if (a == 1 || a == 2) {
        res.innerHTML += 'Desculpe, esse assento já foi reservado!'
    } else {
        window.alert('Por favor, escolha um assento de 1 a 5.')
    } 
    
}