const { sum } = require('./test-unit-1-to-5');

describe('Verificações básicas da função sum', ()=> {
  it('A função existe', () => {
    expect(sum(2, 3)).toBe(5);
  });

});