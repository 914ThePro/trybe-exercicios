const factorial = number => result = number > 0 ? number * factorial(number-1) : 1; 
 


console.log(`Esse é o fatorial ${factorial(3)}`);