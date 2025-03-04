function tabuada() {
    var nun = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    if (nun.value.length == 0) {
        window.alert ('Por favor, digite um número 1 a 10.')
    } else {
        var n = Number(nun.value)
        var c = 1
        tab.innerHTML = ('')
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}