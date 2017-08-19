const Action_AddTodo = (props) => {
  return {
    type: 'ADD_TODO', 
    desc: props.value, 
    name: props.name
  }
}

export default Action_AddTodo;