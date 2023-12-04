function contar() {
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')
    var resultado = document.getElementById('resultado')
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossivel contar'
    } else {
        resultado.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Considerando passo = 1')
            p = 1
        }
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                resultado.innerHTML += `${c} \u{1f449}`
            }
        } else {
            for (var c = i; c >= f; c -= p) {
            resultado.innerHTML += `${c} \u{1f449}`
            } 
        }
        resultado.innerHTML += `\u{1f3c1}`
    }
}