import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';


import superagent from 'superagent';
export default class Dashboard extends Component {

  componentDidMount() {
    superagent
    .get('http://localhost:3000/usernames/foo')
    .then(response => console.log('response', response));
  }
  render() {
    return(
     
      <Fragment>
        <h1>Sluggram</h1>
       
      </Fragment>
      );
    }
}

// const mapStateToProps = (state) => ({ 
//   category: state.category,

//  });

// const mapDispatchToProps = (dispatch) => ({
//   catCreate: category => dispatch(catCreate(category)),
//   catUpdate: category => dispatch(catUpdate(category)),
//   catDestroy: category => dispatch(catDestroy(category)),

// });
// export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);