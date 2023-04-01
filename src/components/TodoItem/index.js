// Write your code here
import './index.css'

const TodoItem = props => {
  const {initialTodosList, Ondelete} = props
  const {title, id} = initialTodosList
  const delteList = () => {
    // console.log(id)
    Ondelete(id)
  }

  return (
    <li className="card">
      <p>{title}</p>
      <button className="btn" onClick={delteList}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
