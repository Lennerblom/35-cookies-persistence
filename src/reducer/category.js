//import defaultState from '../lib/default-state';

let initialState = [];

export default (state=initialState, action) => {
  let {type, payload} = action;

  switch(type) {
  case 'CATEGORY_CREATE':
    if(payload.name === '') {
      alert('Please add category name');
      return state;
    }
    if(payload.budget <= 0) {
      alert('please add a budget value greater than 0');
      return state;
    }

    return [...state, payload  ];
  case 'CATEGORY_UPDATE': return state.map(category => category.id === payload.id ? payload : category);
  case 'CATEGORY_DESTROY': return state.filter(category => category.id !== payload.id);
  default: return state;
  }
};