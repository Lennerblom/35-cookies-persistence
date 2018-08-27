import uuid from 'uuid/v4';
// Actions
export const EXP_ADD = 'expense/ADD';
export const EXP_UPDATE = 'expense/UPDATE';
export const EXP_DELETE = 'expense/DELETE';
// Reducer
let initialState = [];

export default (state = initialState, action) => {
  let {type, payload} = action;
  switch(type) {
  case EXP_ADD: 
    if(payload.name === '') {
      alert('please enter an expense');
      return state;
    }
    return [...state, payload];
  case EXP_UPDATE: return state.map(expense=> expense.id === payload.id ? payload : expense);
  case EXP_DELETE: return state.filter(expense=> expense.id !== payload.id);
  default: return state;
  }
};

// Action Creators
export const expenseCreate = (expense) => {
  expense.id = uuid();
  return {
    type: EXP_ADD,
    payload: expense,
  };
};
export const expenseUpdate = expense => ({
  type: EXP_UPDATE,
  payload: expense,
});
export const expenseDelete = expense => ({
  type: EXP_DELETE,
  payload: expense,
});

