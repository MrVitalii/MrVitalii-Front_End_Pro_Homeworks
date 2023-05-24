import { useState } from 'react';
import Header from './features/Header';
import TodoList from './features/TodoList';
import Footer from './features/Footer';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { create, remove, edit } from './store/actions/todo';

function App() {
    const list = useSelector(state => state.todo.list);
    const dispatch = useDispatch();
    const [todoEdit, setTodoEdit] = useState({});

    function onTodoSubmit(todo) {
        if (todo.id) { // update
            // TodoApi.update(todo)
            dispatch(edit(todo));
        } else { // create
            // TodoApi.create(todo)
            // Add todo with id from server
            dispatch(create(todo));
        }
        setTodoEdit({});
    }

    function onTodoRemove(id) {
        dispatch(remove(id));
    }

    function onTodoEdit(todo) {
        setTodoEdit(todo);
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
            <Footer />
        </div>
    );
}

export default App