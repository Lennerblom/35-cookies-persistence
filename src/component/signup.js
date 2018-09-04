import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import uuid from 'uuid/v4';
import { userLogin, userSignUp } from '../reducer/auth';

 class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      username: '',
      password: '',
      email: '',
    };
    const initialState = this.props.authstate || this.defaultState;

    this.state = {...initialState};
  }

  onSubmit = (e) => {
      e.preventDefault();
      console.log('props', this.props);
      this.props.userSignUp(this.state);
      this.setState({...this.defaultState, id: uuid()});
      console.log(this.state);
  };
  onChange = (e) => {
    const val =
    e.target.type === "checkbox"
      ? e.target.checked
      : e.target.value;

  const changedBit = {
    [e.target.name]: val
  };
  this.setState(changedBit);
  }

  render() {
    return(
      <Fragment>
          <h2>New User Sign Up</h2>
        <fieldset>
            
        <form onSubmit={this.onSubmit} onChange={this.onChange}>
                  <label>
                      <input name="username" placeholder="username" value={this.state.username}/>
                  </label>
                  <label>
                      <input name="password" type="password" placeholder="password" value={this.state.password}/>
                  </label>
                  <label>
                      <input name="email" placeholder="email" value={this.state.email}/>
                  </label>
                  <button>submit</button>
              </form>
        </fieldset>
      </Fragment>
    );
  
}
}

const mapStateToProps = (state) => ({token: state.authState});
const mapDispatchToProps = (dispatch) => ({

userLogin: token => dispatch(userLogin(token)),
userSignUp: token => dispatch(userSignUp(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);