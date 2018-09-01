import superagent from 'superagent';

const API_URL = 'http://localhost:3000';

// Actions
const TOKEN_SET = 'Resource/TOKEN_SET';
const TOKEN_DELETE = 'Resource/TOKEN_DELETE';

// Reducer
export default function authRed(state = null, action) {
 
  let {type, payload} = action;
  console.log('Reducer action: ', action);
  switch (type) {
  case TOKEN_SET: return payload;
  case TOKEN_DELETE: return null;
  default: return state;
  }
}

// Action Creators
export function userLogin(user) {
  return dispatch => {
    return superagent.get(`${API_URL}/login`)
      .auth(user.username, user.password)
      .then(res => {
        const token = res.text;
        const action = tokenSet(token);
        dispatch(action);
        return res;
      });
  };
    
}

export const tokenSet = (token) => ({
  type: TOKEN_SET,
  payload: token,
});

export const tokenDelete = () => ({
  type: TOKEN_DELETE,
  payload: null,
});