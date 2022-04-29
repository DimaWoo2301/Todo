import React, {useContext} from 'react'
import Context from "./context";

export default function TodoItem({title, id, completed}) {
  const {dispatch} = useContext(Context)

  return (
    <li className="todo">
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => dispatch({
            type: "removeCheckbox",
            payload: id
          })}
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
          onClick={() => dispatch({
            type: "deletePost",
            payload: id
          })}
        >
          delete
        </i>
      </label>
    </li>
  )
}
