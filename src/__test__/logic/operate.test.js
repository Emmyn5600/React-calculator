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
});