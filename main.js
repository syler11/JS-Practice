let words = ['apple', 'smile'];

function addWords() {
    let newWord = words.map(word => `<li>${word}</li>`).join('\n');
    document.getElementById('easy').innerHTML = newWord;
}

addWords();

let btnAdd = document.getElementById('btnAdd');
let inputWord = document.getElementById('inputWord');

let btnDelete = document.getElementById('btnDelete');
let inputDelete = document.getElementById('deleteWord');



btnAdd.addEventListener('click', () =>{
    words.push(inputWord.value)
    inputWord.value = '';
    addWords();
});

btnDelete.addEventListener('click', () =>{
    words.splice(inputDelete.value)
    inputDelete.value = '';
    addWords();
});