const myRemove = require('./myRemove.js');

describe('testa a função myRemove', () => {
  it('verifica se remove o 3', () => {
    expect(myRemove([1, 2, 3, 4], 3) ).toEqual([1, 2, 4]);
  });
  it('verifica com not', () => {
    expect(myRemove([1, 2, 3, 4], 3) ).not.toEqual([[1, 2, 3, 4]]);
  });
  it('verifica se remove o 3', () => {
    expect(myRemove([1, 2, 3, 4], 5) ).toEqual([1, 2, 3, 4]);
  });
});