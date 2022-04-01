
function calcular(){

    let c1 = document.getElementById('campo1')
    let c2 = document.getElementById('campo2')
    let resp = document.getElementById('conteudomodal')
    let eq = document.getElementById('equacao')

    if(c1.value == "" && c2.value ==""){
        window.alert("[ERRO] PARA COMEÇAR, INFORME UM VALOR !!!")

    } else if(c1.value == 0 && c2.value == 0){
        window.alert("[ERRO] PARA COMEÇAR, INFORME UM VALOR DIFERENTE DE ZERO !!!")
    } else{
        let modal = document.querySelector('.modal')
        modal.style.display = "block"

        let res = c1.value * 9/5 + 32
        resp.innerHTML= `${c1.value}C é equivalente a ${res}F`
        eq.innerHTML= `${c1.value} x 9/5 + 32 `

    }
}

function fechar(){
    let modal = document.querySelector('.modal')
    modal.style.display = "none" 
}