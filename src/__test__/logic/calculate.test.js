import { operation } from 'retry';
import calculate from '../../logic/calculator';
import operate from '../../logic/operate';

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

    it('should return +/- sign before the number', () => {
   const result = calculate('+/-', calc2);
   expect(result.total).toBe(-5); 
});

    it('should return null value', () => {
    const result = calculate('AC', {total: '10', next: '3', operation: "+"});
    expect(result.total).toBe(null);
    expect(result.next).toBe(null);
    expect(result.operation).toBe(null);
});

   it('should return addition result', () => {
    const result = calculate('=', {total: '100', next: '50', operation: '+'});
    expect(result.total * 1).toEqual(150);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual(null);
   });