import TodoItem from './TodoItem'
import {useDispatch, useSelector} from "react-redux"
import {useEffect} from "react";
import {fetchTodos} from "../store/actions/todo";

export default function TodoList() {
    const list = useSelector(state => state.todo.list)
    const dispatch = useDispatch ()

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    return (
        <div>
            <ul>
                {list.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                    />
                ))}
            </ul>
        </div>
    )
}