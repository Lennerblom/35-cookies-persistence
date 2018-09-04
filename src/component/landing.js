import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { userLogin, userSignUp } from '../reducer/auth';
import Form from '../component/form';
import SignUpForm from '../component/signup';

class Landing extends Component {
    constructor(props) {
        super(props);
       this.state = {
           view: false
    };
    }
  signUpSubmit = () => {
      this.setState({view: true});
  };

  render() {
      console.log('log', this.props.userSignUp);
      return(
          <Fragment>
             <Form onComplete={this.props.userLogin}/>
              <a href="/signup"><button onClick={this.signUpSubmit}>sign up</button></a>
              <p>{this.props.token}</p>
              {this.state.view && <SignUpForm onSignUp={this.props.userSignUp}/>}
          </Fragment>
      );
  }
}
const mapStateToProps = (state) => ({token: state.authState});
const mapDispatchToProps = (dispatch) => ({

userLogin: token => dispatch(userLogin(token)),
userSignUp: token => dispatch(userSignUp(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);