const numero1 = document.getElementById('inputNumero1')
const numero2 = document.getElementById('inputNumero2')
const botaoCalcular = document.getElementById('btnCalculos')
const textoSoma = document.getElementById('pSoma')
const textoSubtracao = document.getElementById('pSubtracao')
const textoMultiplicacao = document.getElementById('pMultiplicacao')
const  textoDivisao = document.getElementById('pDivisao')
const textoResto = document.getElementById('pResto')
const textoPotencia = document.getElementById('pPotencia')


botaoCalcular.addEventListener('click', ()=> {
    if(numero1.value != ''&& numero2.value != ''){

        const soma = Number(numero1.value) + Number(numero2.value);
        const Subtracao = Number(numero1.value) - Number(numero2.value);
        const Multiplicacao = Number(numero1.value) * Number(numero2.value);
        const Divisao = Number(numero1.value) / Number(numero2.value);
        const Resto = Number(numero1.value) % Number(numero2.value);
        const Potencia = Number(numero1.value) ** Number(numero2.value);  


        textoSoma.innerHTML = numero1.value + '+' + numero2.value + '=' + soma;
        textoSubtracao.innerHTML = numero1.value + '-' + numero2.value + '=' + Subtracao;
        textoMultiplicacao.innerHTML = numero1.value + '*' + numero2.value + '=' + Multiplicacao;
        textoDivisao.innerHTML = numero1.value + '/' + numero2.value + '=' + Divisao.toFixed(2);
        textoResto.innerHTML = numero1.value + '%' + numero2.value + '=' + Resto;
        textoPotencia.innerHTML = numero1.value + '**' + numero2.value + '</sup> = ' + Potencia;

    }
});

