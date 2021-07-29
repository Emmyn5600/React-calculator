import calculate from '../../logic/calculator';

const calc1 = {total: null, next: null, operation: null};
const calc2 = { total: '5', next: null, operation: null };

describe('calculate a method', () => {
   it('should be a function', () => {
      expect(typeof calculate).toBe('function');
   });
});

it('Should return total divide by 100', () => {
    const result = calculate('%', calc2);
    expect(result.total).toEqual(0.05);
});

it('should return an object', () => {
    const result = calculate(5, calc1);
    expect(typeof result).toEqual('object');
});