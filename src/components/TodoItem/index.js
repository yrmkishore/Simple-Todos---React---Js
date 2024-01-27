import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onTodoDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="list-container">
      <p className="descritpion">{title}</p>
      <div>
        <button className="btn" type="button" onClick={onTodoDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
