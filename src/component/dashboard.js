import React, {Fragment, Component} from 'react';
import { connect } from 'react-redux';
import CatCreateForm from './category-form/category-form';
import CategoryItem from './category-item/category-item';
import {catCreate, catUpdate, catDestroy} from '../action/category-action';

import superagent from 'superagent';
class Dashboard extends Component {

  componentDidMount() {
    superagent
    .get('http://localhost:3000/usernames/foo')
    .then(response => console.log('response', response));
  }
  render() {
    return(
     
      <Fragment>
        <h1>Sluggram</h1>
        <CatCreateForm onComplete={this.props.catCreate} buttonText='submit'/>
        
        <ul>
      {this.props.category.map(category => (
        <CategoryItem category={category} key={category.id} onComplete={this.props.catUpdate} onDestroy={this.props.catDestroy}/>
      ))}
    </ul>
      </Fragment>
      );
    }
}

const mapStateToProps = (state) => ({ 
  category: state.category,

 });

const mapDispatchToProps = (dispatch) => ({
  catCreate: category => dispatch(catCreate(category)),
  catUpdate: category => dispatch(catUpdate(category)),
  catDestroy: category => dispatch(catDestroy(category)),

});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);