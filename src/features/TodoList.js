import TodoItem from './TodoItem'

export default function TodoList ({ list, onTodoRemove, onTodoEdit }) {
    return (
        <div>
            <ul>
                {list.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onTodoRemove={onTodoRemove}
                        onTodoEdit={onTodoEdit}
                    />
                ))}
            </ul>
        </div>
    )
}