import {useDispatch} from 'react-redux'
import {remove, edit} from '../store/actions/todo'

export default function TodoItem({todo}) {
    const dispatch = useDispatch();

    function onDeleteBtnClick() {
        dispatch(remove(todo.id))
    }

    function onEditBtnClick() {
        dispatch(edit(todo))
    }

    return (
        <li style={{color: todo.done ? 'green' : ''}}>
            <span>{todo.title} </span>
            <button onClick={onEditBtnClick}>Edit</button>
            <button onClick={onDeleteBtnClick}>Delete</button>
        </li>
    )
}