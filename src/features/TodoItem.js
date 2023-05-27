import {useDispatch} from 'react-redux'
import {edit, deleteTodo, updateTodoStatus} from '../store/actions/todo'

export default function TodoItem({todo}) {
    const dispatch = useDispatch()

    function onDeleteBtnClick(e) {
        e.stopPropagation()
        dispatch(deleteTodo(todo.id))
    }

    function onEditBtnClick(e) {
        e.stopPropagation()
        dispatch(edit(todo))
    }

    function onLiClick (e) {
        e.stopPropagation()
        dispatch(updateTodoStatus(todo))
    }

    return (
        <li style={{color: todo.done ? 'green' : ''}} onClick={onLiClick}>
            <span>{todo.title} </span>
            <button onClick={onEditBtnClick}>Edit</button>
            <button onClick={onDeleteBtnClick}>Delete</button>
        </li>
    )
}