import Header from './features/Header'
import TodoList from './features/TodoList'
import Footer from './features/Footer'
import useTodo from "./hooks/useTodo"
import './App.css'

function App() {
    const {
        list,
        todoEdit,
        onTodoSubmit,
        onTodoRemove,
        onTodoEdit,
    } = useTodo()

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