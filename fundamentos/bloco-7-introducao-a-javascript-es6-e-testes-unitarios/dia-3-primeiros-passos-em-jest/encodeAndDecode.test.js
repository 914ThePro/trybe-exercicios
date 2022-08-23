const {encode, decode} = require('./encodeAndDecode');

 describe('testa as funções encode e decode', () => {
  it('testa se encode é uma função', () => {
    expect(typeof(encode)).toBe('function');
  });
  it('testa se decode é uma função', () => {
    expect(typeof(decode)).toBe('function');
  });
  it('testa a conversao de vogais em numeros', () => {
    expect(encode('aeiou')).toEqual('12345');
  });
  it('testa a conversao de numeros em vogais', () => {
    expect(decode('12345')).toEqual('aeiou');
  });
  it('testa se as demais letras nao sao convertidas', () => {
    expect(encode('bcdfghjklmnpqrstvxwyz')).toEqual('bcdfghjklmnpqrstvxwyz');
  });
  it('testa se os demais numeros nao sao convertidas', () => {
    expect(decode('67890')).toEqual('67890');
  });
  it('testa se a string retornada continua com o mesmo comprimento da string passada', () => {
    expect(encode('testando').length).toBe('testando'.length);
  });
  it('testa se a string retornada continua com o mesmo comprimento da string passada', () => {
    expect(decode('testando').length).toBe('testando'.length);
  });
 });