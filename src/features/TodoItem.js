export default function TodoItem ({ todo, onTodoRemove, onTodoEdit }) {
    function onDeleteBtnClick () {
        onTodoRemove(todo.id)
    }

    function onEditBtnClick () {
        onTodoEdit(todo)
    }

    return (
        <li style={{ color: todo.done ? 'green' : '' }}>
            <span>{todo.title}</span>
            <button onClick={onEditBtnClick}>[Edit]</button>
            <button onClick={onDeleteBtnClick}>[Delete]</button>
        </li>
    )
}