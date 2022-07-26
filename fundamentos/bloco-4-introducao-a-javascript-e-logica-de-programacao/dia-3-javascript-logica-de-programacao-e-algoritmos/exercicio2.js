let word = 'tryber';
let newWord = "";

for(count = word.length-1; count >= 0; count--){
  newWord += word[count];
}

console.log(newWord);