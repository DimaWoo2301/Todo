import React, {useEffect, useState, useReducer} from 'react'
import TodoList from './TodoList'
import Context from "./context";
import reducer from "./reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem('todos')))
  const [todoTitle, setTodoTitle] = useState('')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])

  const onPressEnter = (e) => {
    if (e.key === 'Enter') {
      dispatch({
        type: 'addPost',
        payload: todoTitle
      })
      setTodoTitle('')
    }
  }


  return (
    <Context.Provider value={{
      dispatch
    }}>
      <div className="container">
        <h1>Todo app</h1>
        <div className="input-field">
          <input type="text"
                 onChange={event => setTodoTitle(event.target.value)}
                 value={todoTitle}
                 onKeyPress={onPressEnter}
          />
          <label>You text...</label>
        </div>
        <TodoList todos={state}/>
      </div>
    </Context.Provider>
  );
}

export default App