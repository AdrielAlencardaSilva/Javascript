function contar() {
    var ini = document.getElementById('n1')
    var fim = document.getElementById('n2')
    var passo = document.getElementById('ipa')
    var res = document.getElementById('res')
   
    if (ini.value.length == 0 || fim.value.length == 0  ) {
        res.innerHTML = 'Impossivel contar!'
    } else {
        res.innerHTML = 'Contando: '
        var i = Number (ini.value)
        var f = Number (fim.value)
        var p = Number (passo.value)
        if (i < f) {
            i = 0
        }
        while (i < f) {
            
            i++
            res.innerHTML += `${i},  `
                
        }
}

}