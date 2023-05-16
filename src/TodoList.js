import TodoItem from './TodoItem'

export default function TodoList () {
    const todos = [
        { title: 'xxx ', },
        { title: 'yyy ', },
    ];

    return (
        <div>
            <ul>
                <TodoItem>{todos[0].title}</TodoItem>
                <TodoItem>{todos[1].title}</TodoItem>
            </ul>
        </div>
    )
}