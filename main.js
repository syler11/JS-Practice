let words = ['shower', 'frog', 'fire','smile', 'phone', 'horse'];

function addWords() {
    let newWord = words.map(word => `<li>${word}</li>`).join('\n');
    document.getElementById('easy').innerHTML = newWord;
    sortWords();
   
}



let btnAdd = document.getElementById('btnAdd');
let inputWord = document.getElementById('inputWord');



btnAdd.addEventListener('click', () =>{
    words.push(inputWord.value)
    inputWord.value = '';
    addWords();
});


addWords();





function sortWords() {
    word_four = [];
for(var i=0; i<words.length; i++){
    if(words[i].length == 4) 
        word_four.push(words[i]);
}

document.getElementById('easy').innerHTML = (word_four).join("<br/>");

word_five = [];
for(var i=0; i<words.length; i++){
    if(words[i].length == 5) 
        word_five.push(words[i]);
}

document.getElementById('medium').innerHTML = (word_five).join("<br/>");

word_six = [];
for(var i=0; i<words.length; i++){
    if(words[i].length == 6) 
        word_six.push(words[i]);
}

document.getElementById('hard').innerHTML = (word_six).join("<br/>");
}

function removeWord() {
    let input = document.querySelector('#deleteWord').value;
    index = words.indexOf(input);
    if (index >= 0) {
    words.splice(index, 1);
    sortWords();
    document.getElementById('deleteWord').value = "";
    alert("The word " + input + " was deleted.")
    } else {
    alert("The word " + input + " is not in the database.")
    }
}

function randomWord() {
   let randNum = Math.floor((Math.random())*words.length);
   randWord = words[randNum];
   document.getElementById('word1').innerHTML = randWord;
}

randomWord();

document.querySelector("#picture").classList.add('fa-'+randWord);
