let mudarCor = document.querySelector(".mudar-cor")
let trocarAutomaticamente = document.querySelector(".trocar-automaticamente")
let intervalo = null
let trocandoAutomaticamente = false

function Cor() {

    let corAleatoria = Math.floor(Math.random()* 16777215).toString(16)
    document.body.style.backgroundColor = "#" + corAleatoria 
}

function trocaAutomatica(){
    if(trocandoAutomaticamente){
        clearInterval(intervalo)
        trocandoAutomaticamente = false
    } else{
        intervalo = setInterval(function(){
            let corAleatoria = Math.floor(Math.random()* 16777215).toString(16)
            document.body.style.backgroundColor = "#" + corAleatoria 

        },1000)
        trocandoAutomaticamente = true
    }

}

mudarCor.addEventListener("click", Cor)
trocarAutomaticamente.addEventListener("click",trocaAutomatica)
