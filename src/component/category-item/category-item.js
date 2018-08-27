import React, { Component, Fragment } from 'react';
import CatCreateForm from '../category-form/category-form';
export default class CategoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false,
      expense: false
    }
  }
  updateView = () => {
    this.setState({view: true});
  }
  returnView = () => {
    this.setState({view: false});
  }
  onDestroy = () => {
      this.props.onDestroy(this.props.category);
    }
  
 catUpdate = (category) => {
  this.props.onComplete(category);
  }
  addExpense = () => {
    this.setState({expense: true});
  }
  closeExpense = () => {
    this.setState({expense: false});
  }

  render() {
      return(
        <Fragment>
          <div onDoubleClick={this.updateView}>
            <li>
              <h3>{this.props.category.userName}</h3>
            </li>
            <li>
              <h3>{this.props.category.password}</h3>
            </li>
            <button onClick={this.onDestroy}>Delete</button>
      {this.state.view && <div><CatCreateForm onComplete={this.catUpdate} category={this.props.category} onClick={this.props.returnView} buttonText = 'edit category'/><button onClick={this.returnView}>cancel update</button></div>}
          </div>
          {/* <button onClick={this.addExpense}>Add an Expense</button>
          <button onClick={this.closeExpense}>Close Expense Form</button>
          {this.state.expense && <ExpenseContainer categoryName={this.props.category.name} onClick={this.props.closeExpense}/>} */}
        </Fragment>
      );
      
  }
}