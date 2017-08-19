import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todo from './Todo';

import Action_ToggleTodo from '../actions/Action_ToggleTodo';

const ListTodos = ({todos, onTodoClick}) => {
  return (
    <div>
      <p> Hello running listTodos </p>
      <ul>
        {todos.map((todo) => 
          <Todo todo={todo} handleOnClick={() => onTodoClick(todo.key)} completed={todo.completed} key={todo.key} />
        )}
      </ul>
    </div>
  )
}

ListTodos.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func.isRequired,
}

export default ListTodos;

// const mapStateToProps = state => {
//   console.log("ListTodos.js --------------- : ", state)
//   return {
//     todos: state.todos
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     toggleTodo: (e) => dispatch(Action_ToggleTodo(e))
//   }
// }

// export default connect(
//   mapStateToProps, 
// )(ListTodos);