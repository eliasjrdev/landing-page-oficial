
function calcular(){

    let c1 = document.getElementById('campo1')
    let c2 = document.getElementById('campo2')

    if(c1.value == "" && c2.value ==""){
        window.alert("[ERRO] PARA COMEÇAR, INFORME UM VALOR !!!")
    } else{
        let modal = document.querySelector('.modal')
        modal.style.display = "block"
    }

}

function fechar(){
    let modal = document.querySelector('.modal')
    modal.style.display = "none" 
}