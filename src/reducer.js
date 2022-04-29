export default function(state, action) {
  switch (action.type) {
    case "addPost":
    return[ ...state,
    {
      id:Date.now(),
        title: action.payload,
      completed: false
    }]
    case "deletePost":
      return state.filter((item)=> item.id !== action.payload)
    case  "removeCheckbox":
      return state.map(todo => {
        if (todo.id === action.payload){
        todo.completed = !todo.completed
        }
        return todo
      })
    default:
      return state
  }
}
