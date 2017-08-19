import React from 'react';
import { connect } from 'react-redux';
import Action_ToggleTodo from '../actions/Action_ToggleTodo';
import ListTodos from '../components/ListTodos';

const GetVisibleTodos = ({toggleCompleted, todos}) => {
  return (
    <ListTodos todos={todos} onTodoClick={toggleCompleted} />
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    toggleCompleted: (e) => { console.log('clicking----', e); dispatch(Action_ToggleTodo(e)) },
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps, 
)(GetVisibleTodos);