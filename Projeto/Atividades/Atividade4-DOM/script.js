
const titulo = document.getElementById("spanTextoAzul"); 
titulo.style.color = "blue";

const botaoAlterarTexto = document.getElementById('btnAlterarTexto');
const Texto = document.getElementById('spanTextoAzul');
botaoAlterarTexto.addEventListener('click', () => {Texto.textContent= 'Avaliação!';});

const input = document.getElementById('numeroInput');
const resultado = document.getElementById('resultado');

input.addEventListener('input', function() {
    const valor = Number(input.value);

    if (input.value === '') {
        resultado.textContent = '';
    }
    if (valor > 0) {
        resultado.textContent = 'O número é maior que zero .';
    } else if (valor < 0) {
        resultado.textContent = 'O número é menor que zero.';
    } else {
        resultado.textContent = 'O número é igual a zero.';
    }
});
