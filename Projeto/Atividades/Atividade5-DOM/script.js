const tarefas =[
    'Estudar HTML',
    'Estudar javascript',
    'Compreeender o DOM',
    'Entender o conceito de "for" no javascript',
    'Entender a função "addEventListener" no javascript',
    'Entender a função "createElement" no javascript',
];




const container = document.getElementById('divContainer');
const botaoCarregar = document.getElementById('btnCarregar');


const listaUl = document.createElement('ul');

botaoCarregar.addEventListener('click',() => {

    for (let i = 0; i < tarefas.length; i++) {

        const itemLi = document.createElement('li');

        itemLi.innerHTML = '<strong>Item' + (i + 1 ) + tarefas[i];

        listaUl.appendChild(itemLi);



    }

    container.appendChild(listaUl);
});






)