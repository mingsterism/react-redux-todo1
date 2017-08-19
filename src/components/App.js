import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddTodo from '../containers/AddTodo';
import ListTodos from './ListTodos';
import VisibleTodoList from '../containers/VisibleTodoList';

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <h1> React Todo with Redux </h1>
        <AddTodo />
        <VisibleTodoList />
      </div>
    );
  }
}


export default connect()(App);
