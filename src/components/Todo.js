import React from 'react'
import PropTypes from 'prop-types';

const Todo = ({todo, handleOnClick, completed}) => {
  return (
      <li onClick={handleOnClick} style={{ textDecoration: completed ? 'line-through' : 'none' }} > 
        {todo.text} ----------- {todo.name} 
      </li>
  )
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired, 
  handleOnClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
}

export default Todo;