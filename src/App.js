import Header from './features/Header'
import TodoList from './features/TodoList'
import Footer from './features/Footer'
import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import {edit, remove} from './store/actions/todo'

function App() {
    const list = useSelector(state => state.todo.list)
    const dispatch = useDispatch()

    function onTodoRemove(id) {
        dispatch(remove(id))
    }

    function onTodoEdit(todo) {
        dispatch(edit(todo))
    }

    return (
        <div className="App">
            <Header/>
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