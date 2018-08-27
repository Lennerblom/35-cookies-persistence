import reducer from './expense-duck';
import * as actions from './expense-duck';

describe('reducers', () => {
  it('should start with zero expenses', () => {
    const newState = reducer([], {});
    expect(newState).toEqual ([]);
  });

  it('should add an expense', ()=>{
    const newState = reducer([], actions.expenseCreate({
      timestamp: Date.now(),
      name: 'food',
      price: 100,
    }));

    expect(newState.length).toBe(1);
  });
});