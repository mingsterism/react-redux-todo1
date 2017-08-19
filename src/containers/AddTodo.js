import React from 'react';
import { connect } from 'react-redux';
import Action_AddTodo from '../actions/Action_AddTodo';
import { withState, withHandlers, compose } from 'recompose';

const localDescription = withState( 'desc', 'addDescription', '')
const localName = withState('n', 'addName', '')

const localHandlers = withHandlers({
  onChange: props => e => { props[e.target.name](e.target.value) },  // how does this work? Where is e.target.value getting its value? 
  onSubmit: (props) => e => {
    e.preventDefault()
    const payload = {value: props.desc, name: props.n}
    props.addTodo(payload)
    props['addDescription']('')
    props['addName']('')
  }
})

const enchance = compose(localDescription, localName, localHandlers)

const AddTodo = enchance ( ({onChange, onSubmit, desc, n}) => {
  return (
    <div>
      <form onSubmit={onSubmit} >
        <p>Submit a Todo</p>
        <input 
          value={desc}   // value is getting its value from desc. However, desc is only updated when onChange is called. and onChange gets its value from desc. Some circular logic here? 
          type="text"  
          name="addDescription" 
          onChange={onChange} // when onChange is called, its getting its value from e.target.value. However, value is currently ''. 
        /> 
        <br />
        <input 
          value={n}
          type="text"
          name="addName"
          onChange={onChange}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
})

const mapStateToProps = state => {
  return {
    ...state, 
    state1: '', 
    state2: '', 
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (e) => dispatch(Action_AddTodo(e))
  }
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps,
)(AddTodo);