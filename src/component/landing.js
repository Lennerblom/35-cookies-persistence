import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import {userLogin} from '../reducer/auth';
import uuid from 'uuid/v4';
import Form from '../component/form';

class Landing extends Component {


  fakeLogin = () => {
      this.props.userLogin({username: 'sara', password: 'sara'});
  };

  render() {
      return(
          <Fragment>
             <Form onComplete={this.props.userLogin}/>
              <button onClick={this.props.fakeLogin}>fakesubmit</button>
              <p>{this.props.token}</p>
          </Fragment>
      );
  }
}
const mapStateToProps = (state) => ({token: state.authState});
const mapDispatchToProps = (dispatch) => ({

userLogin: token => dispatch(userLogin(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);