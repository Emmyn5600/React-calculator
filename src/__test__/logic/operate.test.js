import operate from '../../logic/operate';

describe('should perform the operation', () => {
  it('should add two number', ()=> {
      const result = operate('2', '2', '+');
      expect(result * 1).toEqual(4);
  })
});