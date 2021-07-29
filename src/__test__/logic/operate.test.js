import operate from '../../logic/operate';

describe('should perform the operation', () => {
  it('should add two numbers', ()=> {
      const result = operate('2', '2', '+');
      expect(result * 1).toEqual(4);
  });

  it('should substract two numbers', () => {
     const result = operate('2', '2', '-');
     expect(result * 1).toEqual(0);
  });

 it('should divide two numbers', () => {
    const result = operate('10', '20', '÷');
    expect(result * 1).toEqual(0.5);
  });

 it('should multiply of two numbers', () => {
    const result = operate('5', '4', 'X');
    expect(result * 1).toEqual(20);
  });
});