//Programa de calculo de IMC
const calcular = document.getElementById('calcular')

function imc () {
    const nome = document.getElementById('nome').value
    const altura = document.getElementById('altura').value
    const peso = document.getElementById('peso').value
    const resultado = document.getElementById('resultado')

    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso/(altura*altura)).toFixed(1)
        resultado.textContent = valorIMC

        let classificacao = ''

       if(valorIMC <18.5){
        classificacao = 'abaixo do peso.'
       } else if(valorIMC <25){
        classificacao = 'com peso ideal, parabéns!'
       }else if(valorIMC < 30){
        classificacao = 'levemente abaixo do peso'
       }else if(valorIMC < 35){
        classificacao = 'com obesidade grau I'
       }else if(valorIMC < 40){
        classificacao = 'com ob{sidade grau II'
       }else{
        classificacao = 'obesidade grau III'
       }

     resultado.textContent = `${nome} seu peso é: ${valorIMC} e você está ${classificacao}`

    
    } else{
        resultado.textContent = 'Preencha todos os campos!!' 
    } 
}



calcular.addEventListener('click', imc)