import calculate from '../../logic/calculator';

const calc1 = { total: null, next: null, operation: null };
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
  const result = calculate('AC', { total: '10', next: '3', operation: '+' });
  expect(result.total).toBe(null);
  expect(result.next).toBe(null);
  expect(result.operation).toBe(null);
});

it('should return addition result', () => {
  const result = calculate('=', { total: '100', next: '50', operation: '+' });
  expect(result.total * 1).toEqual(150);
  expect(result.next).toEqual(null);
  expect(result.operation).toEqual(null);
});

it('should return substration result', () => {
  const result = calculate('=', { total: '3', next: '1', operation: '-' });
  expect(result.total * 1).toEqual(2);
  expect(result.next).toEqual(null);
  expect(result.operation).toEqual(null);
});

it('should return multiplication result', () => {
  const result = calculate('=', { total: '3', next: '1', operation: 'X' });
  expect(result.total * 1).toEqual(3);
  expect(result.next).toEqual(null);
  expect(result.operation).toEqual(null);
});

it('should return division result', () => {
  const result = calculate('=', { total: '2', next: '2', operation: '÷' });
  expect(result.total * 1).toEqual(1);
  expect(result.next).toEqual(null);
  expect(result.operation).toEqual(null);
});

it('Should return a float or add a dot value', () => {
  const result = calculate('.', calc1);
  expect(result).toEqual({ next: null, operation: null, total: '0.' });
});

/* negative test */

it('should not perform addition', () => {
  const result = calculate('=', { total: '20', next: '10', operation: '+' });
  expect(result.total * 1).not.toBe(0);
  expect(result.next).not.toBe(0);
  expect(result.operation).not.toBe('+');
});

it('should not perform substration', () => {
  const result = calculate('=', { total: '20', next: '10', operation: '-' });
  expect(result.total * 1).not.toBe(0);
  expect(result.next).not.toBe(0);
  expect(result.operation).not.toBe('-');
});

it('should not perform multiplcation', () => {
  const result = calculate('=', { total: '20', next: '10', operation: 'X' });
  expect(result.total * 1).not.toBe(0);
  expect(result.next).not.toBe(0);
  expect(result.operation).not.toBe('X');
});

it('should not perform division', () => {
  const result = calculate('=', { total: '20', next: '10', operation: '÷' });
  expect(result.total * 1).not.toBe(0);
  expect(result.next).not.toBe(0);
  expect(result.operation).not.toBe('÷');
});
