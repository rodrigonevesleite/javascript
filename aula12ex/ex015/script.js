function verificar() {
    var date = new Date()
    var ano = date.getFullYear()
    var formularioano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (formularioano.value.length == 0 || formularioano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formularioano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'bebehomem-1.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultohomem.png')
            } else {
                //adulto
                img.setAttribute('src', 'idosohomem.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'bebemulher.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovemmulher.png') 
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultomulher.png')
            } else {
                //adulto
                img.setAttribute('src', 'idosomulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}