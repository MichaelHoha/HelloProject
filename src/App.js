import './App.css';
import React, { Component } from 'react';
import Header from './component/Header';
import AddTask from './component/AddTask';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list: []
    }
  }

  addItem = (t) => {
    this.setState({list: [{task: t},...this.state.list ]});
    
  }

  deleteItem = (index) => {

    let tempTask = this.state.list.filter((element, i) => (i != index ));
    this.setState({list: tempTask})

  }

  render() {
    return (

      <div className='App'>
        <Header logo='About to do' />
        <div className='app-div'>
          <AddTask addItem={this.addItem} list={this.state.list} deleteItem={this.deleteItem} />

        </div>
      </div>
    )
  }
}
