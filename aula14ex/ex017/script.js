function gerartabuada() {
    numero = window.document.querySelector('input#numero')
    tabuada = document.querySelector('select#tabuada')

    if (numero.value.length == 0) {
       alert('Por favor, digite um numero!')
    } else {
        n = Number(numero.value)
        var c = 1
        tabuada.innerHTML = ''
        while (c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            c ++
        }
    }
    
}
