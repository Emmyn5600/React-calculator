import calculate from '../../logic/calculator';

const calc1 = {total: null, next: null, operation: null};

describe('calculate a method', () => {
   it('should be a function', () => {
      expect(typeof calculate).toBe('function');
   });
});