function somar() {
    var n1 = document.getElementById('in1')
    var n2 = document.getElementById('in2')
    var res = document.querySelector('div#res')
    var nu1 = Number(n1.value)
    var nu2 = Number(n2.value)
    var s = nu1 + nu2
    res.innerHTML = ''
    res.innerHTML += `${nu1} + ${nu2} = ${s}`
}

function subtrair() {
    var n1 = document.getElementById('in1')
    var n2 = document.getElementById('in2')
    var res = document.querySelector('div#res')
    var nu1 = Number(n1.value)
    var nu2 = Number(n2.value)
    var s = nu1 - nu2
    res.innerHTML = ''
    res.innerHTML += `${nu1} - ${nu2} = ${s}`
}

function multiplicar() {
    var n1 = document.getElementById('in1')
    var n2 = document.getElementById('in2')
    var res = document.querySelector('div#res')
    var nu1 = Number(n1.value)
    var nu2 = Number(n2.value)
    var s = nu1 * nu2
    res.innerHTML = ''
    res.innerHTML += `${nu1} x ${nu2} = ${s}`
}

function dividir() {
    var n1 = document.getElementById('in1')
    var n2 = document.getElementById('in2')
    var res = document.querySelector('div#res')
    var nu1 = Number(n1.value)
    var nu2 = Number(n2.value)
    var s = nu1 / nu2
    res.innerHTML = ''
    res.innerHTML += `${nu1} / ${nu2} = ${s}`
}