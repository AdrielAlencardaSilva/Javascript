function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.querySelector('div#res')
    if (fano.value.lemgth == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sex = document.getElementsByName('sexo')
        var idade = ano - (fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sex[0].checked) {
            genero ='homem'

            if (idade > 0 && idade <= 12) {
                //criança
                img.setAttribute('src', 'criançam.png')
                img.style.borderRadius = '50%'
                img.style.display = ' block'
                img.style.margin = 'auto'
                img.style.marginTop = '20px'
                 
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'jovem.png')
                img.style.borderRadius = '50%'
                img.style.marginTop = '20px'
                
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'homem.png') 
                img.style.borderRadius = '50%'
                img.style.margin = 'auto'
                img.style.display = 'block'
                img.style.marginTop = '20px'
            } else {
                //idoso
                img.setAttribute('src', 'idoso.png')
                img.style.borderRadius = '50%'
                img.style.margin = 'auto'
                img.style.display = 'block'
                img.style.marginTop = '20px'
                
            }

        } else if (sex[1].checked) {
            genero = 'mulher'

            if (idade > 0 && idade <= 12) {
                //criança
                img.setAttribute('src', 'criançaf.png')
                img.style.borderRadius = '50%'
                img.style.margin = 'auto'
                img.style.display = 'block'
                img.style.marginTop = '20px'
                
            } else if (idade < 18) {
                //jovem
                img.setAttribute('src', 'jovemf.png') 
                img.style.borderRadius = '50%'
                img.style.margin = 'auto'
                img.style.display = 'block'
                img.style.marginTop = '20px'
            } else if ( idade < 50) {
                //adulto
                img.setAttribute('src', 'mulher.png')
                img.style.borderRadius = '50%'
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.marginTop = '20px'
            } else {
                //idoso
                img.setAttribute('src', 'idosa.png')
                img.style.borderRadius = '50%'
                img.style.display = 'block'
                img.style.margin = 'auto'
                img.style.marginTop = '20px'
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
        
    }
}