function carregar(){
    var msg = document.getElementById("msg")
    var imagem = document.getElementById ("imagem")
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`
    if (hora>=0 && hora < 12){
        imagem.src = "pexels-torsten-kellermann-955656.jpg"
        document.body.style.backgroundColor = 'green'
    } else if (hora>=12 && hora <= 18) {
        imagem.src = "pexels-anderson-martins-2386144.jpg"
        document.body.style.backgroundColor = 'orange'
    } else { 
        imagem.src = "pexels-reynaldo-brigworkz-brigantty-771883.jpg"
        document.body.style.backgroundColor = 'purple' 
    }
}

carregar()