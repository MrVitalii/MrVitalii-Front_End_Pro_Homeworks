export default function TodoItem ({ children }) {
    return (
        <li
            className="todoItem${done}"
            data-id="${todo.id}"
        >
            <span>{children}</span>
            <button className="editBtn">Edit</button>
            <button className="deleteBtn">Delete</button>
        </li>
    )
}