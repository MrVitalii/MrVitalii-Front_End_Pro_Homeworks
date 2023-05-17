import {useState} from "react"
import Header from './features/Header'
import TodoList from './features/TodoList'
import Footer from './features/Footer'
import './App.css'

const initialList = [
    {
        "title": "facere blanditiis illumvddv ",
        "status": true,
        "done": false,
        "id": "96",
    },
    {
        "title": "itaque eveniet rationevdvdsvds ",
        "status": true,
        "done": true,
        "id": "98",
    },
    {
        "title": "molestiae nemo minus ",
        "status": true,
        "done": true,
        "id": "99",
    },
]

function App() {
    const [list, setList] = useState(initialList)
    const [todoEdit, setTodoEdit] = useState({})

    function onTodoSubmit(todo) {
        setList([...list, todo])
    }

    function onTodoRemove(id) {
        const newList = list.filter(todo => todo.id !== id)

        setList(newList)
    }

    function onTodoEdit(todo) {
        setTodoEdit(todo)
    }

    return (
        <div className="App">
            <Header
                todoEdit={todoEdit}
                onTodoSubmit={onTodoSubmit}
            />
            <TodoList
                list={list}
                onTodoRemove={onTodoRemove}
                onTodoEdit={onTodoEdit}
            />
            <Footer/>
        </div>
    );
}

export default App