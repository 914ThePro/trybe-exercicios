const myFizzBuzz = require('./myFizzBuzz.js');

describe('testa a função myFizzByzz', () => {
  it('verifica se myFizzBuzz(15) retorna fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('verifica se myFizzBuzz(3) retorna fizz', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });
  it('verirfica se myFizzBuzz(5) retorna buzz', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });
  it('verifica se myFizzBuzz(16) retorna 16', () => {
    expect(myFizzBuzz(16)).toBe(16);
  });
  it('verifica se myFizzBuzz("teste") retorna false', () => {
    expect(myFizzBuzz('teste')).toBe(false);
  });
});