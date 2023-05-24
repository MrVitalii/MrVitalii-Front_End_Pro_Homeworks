import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { create, edit } from '../store/actions/todo'

export default function Header () {
    const dispatch = useDispatch();
    const todoEdit = useSelector((state) => state.todo.todoEdit);

    const [title, setTitle] = useState('');

    useEffect(() => {
        if (todoEdit.title) {
            setTitle(todoEdit.title);
        }
    }, [todoEdit])

    function onTitleChange (e) {
        setTitle(e.target.value);
    }

    function onSubmit (e) {
        e.preventDefault();

        const todo = {
            ...todoEdit,
            title,
        };

        if (todo.id) {
            dispatch(edit(todo))
        } else {
            dispatch(create(todo))
        }

        setTitle('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor='title'>Title:</label>
                <input
                    type='text'
                    id='title'
                    value={title}
                    onChange={onTitleChange}
                />
                <button type="submit">{todoEdit.id ? 'Edit' : 'Create'}</button>
            </form>
        </div>
    )
}