const textoVermelho = document.getElementById('spanTextoVermelho');
const textoVerde = document.getElementById('spanTextoVerde');
const textoAzul = document.getElementById('spanTextoAzul');

const botaoAlterarVermelho = document.getElementById('btnAlterarVermelho');
const botaoAlterarVerde = document.getElementById('btnAlterarVerde');
const botaoAlterarAzul = document.getElementById('btnAlterarAzul');
botaoAlterarVermelho.addEventListener('click',()=>{
    textoVermelho.style.color ='red';
});

botaoAlterarVerde.addEventListener('click',()=>{
    textoVerde.style.color ='green';
});

botaoAlterarAzul.addEventListener('click',()=>{
    textoAzul.style.color ='blue';
});

const botaoModo = document.getElementById('btnModo');

botaoModo.addEventListener('click',() =>{
    if(document.body.style.background === 'black') {
        document.body.style.background = '';
        document.body.style.color = '';

    } else {
        document.body.style.background ='black';
        document.body.style.color = 'white';
    }
});





