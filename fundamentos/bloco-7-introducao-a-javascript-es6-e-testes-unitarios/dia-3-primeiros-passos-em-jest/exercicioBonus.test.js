const searchEmployee = require('./exercicioBonus.js');

describe('testa o exercicio bonus', () => {
  it('testa o specialities', () => {
    expect(searchEmployee('4456-4', 'specialities')).toBe('4456-4: Context API,RTL,Bootstrap');
  });
  it('testa o firstName', () => {
    expect(searchEmployee('1256-4', 'firstName')).toBe('1256-4: Linda');
  });
  it('testa o lastName', () => {
    expect(searchEmployee('5569-4', 'lastName')).toBe('5569-4: Jobs');
  });
  it('testa um id invalido', () => {
    expect(searchEmployee('552169-4', 'lastName')).toBe('ID não identificada');
  });
  it('testa um detail invalido', () => {
    expect(searchEmployee('1256-4', 'lastNames')).toBe('1256-4: Informação indisponível');
  });
});