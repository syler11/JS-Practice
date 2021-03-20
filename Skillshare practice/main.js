let modal = document.querySelector('.modal-container');
let body = document.querySelector('body');

function openModal() {
   
    modal.style.display = 'block';
    modal.style.backgroundColor = '#fff';

    body.style.backgroundColor = 'rgba(0,0,0,0.1)';

}

function closeModal() {
    modal.style.display = 'none';

    body.style.backgroundColor = 'inherit';

}




function calculation() {
    let num1 = Number(document.querySelector('#num1').value);
    let num2 = Number(document.querySelector('#num2').value);
    let answer = document.querySelector('#answer-box');
    let select = document.querySelector('select');
    let operator = select.options[select.selectedIndex].value;
    let solution;

    if(operator == 'addition') {
        solution = num1 + num2;
    } else if (operator == 'substract'){
        solution = num1 - num2;
    } else if (operator == 'divide') {
        solution = num1 / num2;
    } else if (operator == 'multiply') {
        solution = num1 * num2;
    } else {
        "Invalid operator selected!"
    }

    answer.innerHTML = solution;

}

let title = document.querySelector('.modal-title').innerText;
let newTitle = document.querySelector('#newTitle').innerHTML = title;

let content = document.querySelector('.modal-content').innerText;
let newIndex = content.indexOf('.');
let excert = content.slice(0, newIndex+1);
let shortContent = document.querySelector('#shortContent').innerHTML = excert;


