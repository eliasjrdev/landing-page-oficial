
function calcular(){

    let c1 = document.getElementById('campo1')
    let c2 = document.getElementById('campo2')
    let resp = document.getElementById('conteudomodal')
    let eq = document.getElementById('equacao')

    if(c1.value == "" && c2.value == ""){
        window.alert("[ERRO] PARA COMEÇAR, INFORME UM VALOR !!!")

    } else if(c1.value != '' && c2.value == ''){
        let modal = document.querySelector('.modal')
        modal.style.display = "block"

        let res = c1.value * 9/5 + 32
        resp.innerHTML= `${c1.value}°C é equivalente a ${res.toFixed(2)}°F`
        eq.innerHTML= `${c1.value} x 9/5 + 32 `
    } else if(c2.value != '' && c1.value == ''){
        let modal = document.querySelector('.modal')
        modal.style.display = "block"

        let res = (c2.value - 32) * 5/9
        resp.innerHTML= `${c2.value}°F é equivalente a ${res.toFixed(2)}°C`
        eq.innerHTML= `${c2.value} - 32 x 5/9 `
    } else {
        window.alert('[ERRO] PREENHA APENAS UM CAMPO POR VEZ !!! ')
    }
}

function fechar(){
    let modal = document.querySelector('.modal')
    modal.style.display = "none" 
}