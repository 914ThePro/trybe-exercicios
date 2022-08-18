const longestWord = frase => frase.split(" ").sort((a,b) => b.length - a.length)[0];


console.log(longestWord("testando um paralepepipedo aqui"));