
const sum = require ('./sum.js');

describe('testar o sum', () => {
  it('testa se sum(4,5) retorna 9', () => {
    expect(sum(4,5)).toBe(9);
  });
  it('testa se sum(0,0) retorna 0', () => {
    expect(sum(0,0)).toBe(0);
  });
  it('testa se sum(4,"5") retorna um erro', () => {
    expect(() => {sum(4,'5')}).toThrow();
  });
  it('verifica se a mensagem do erro esta correta', ()=> {
    expect(() => {sum(4,'5')}).toThrowError(new Error('parameters must be numbers'));
  });
});