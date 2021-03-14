

function addWords() {
    let newWord = words.map(word => `<li>${word}</li>`).join('\n');
    document.getElementById('easy').innerHTML = newWord;
}


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

let words = ['apple', 'call', 'test','smile'];

addWords();

word_four = [];
for(var i=0; i<words.length; i++){
    if(words[i].length == 4) 
        word_four.push(words[i]);
}

document.getElementById('medium').innerHTML = (word_four).join("<br/>");

word_five = [];
for(var i=0; i<words.length; i++){
    if(words[i].length == 5) 
        word_five.push(words[i]);
}

document.getElementById('hard').innerHTML = (word_five).join("<br/>");

