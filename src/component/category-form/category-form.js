import React, {Component, Fragment} from 'react';
import uuid from 'uuid/v4';
export default class CatCreateForm extends Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      timestamp: Date.now(),
      userName: '',
     password: 0,
      view: 'false'
    };
    const initialState = this.props.category || this.defaultState;

    this.state =  {...initialState};
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState({ ...this.defaultState, id: uuid() });
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

    display = () => {
      if(this.state.id !== null) {
        return(this.state.name);
      } 
    }

  render() {
      return(
        <Fragment>
          <fieldset>
          <form onSubmit={this.onSubmit} onChange={this.onChange}>
              <label>User Name
              <input name="userName" placeholder="user name" value = {this.state.userName}/>
              </label>
              <label>Password
              <input name="password" value = {this.state.password}/>
              </label>
              <button onClick={this.props.returnView}>{this.props.buttonText}</button>
          </form>
          </fieldset>
        </Fragment>
      );
    
  }
}
