const initialState = {
  todos: [
    {
      text: "This is initial todo", 
      completed: true, 
      name: "Luke",
      key: 1, 
    }, 
    {
      text: "Create a todo app in react-redux from scratch", 
      completed: false,
      name: "John",
      key: 2,
    }
  ], 
  filter: 'SHOW_ALL',
}

const generateID = () => {
  return Math.floor(Date.now() + Math.random())
}


const todoReducers = (state=initialState, action) => {
  switch (action.type) {
    case 'TOGGLE': 
      return {
        ...state, 
        todos: state.todos.map( (todo) => 
          (todo.key  == action.key) 
            ? {...todo, completed: !todo.completed} 
            : todo,
        )
      }
    case 'ADD_TODO':
      return {
        ...state, 
        todos: [...state.todos, 
          {
            text: action.desc, 
            completed: false, 
            key: generateID(),
            name: action.name
          }
        ],
    }
    default:
      return state
  }
}

export default todoReducers;