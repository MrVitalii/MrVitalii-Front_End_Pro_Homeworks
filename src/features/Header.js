import {useState, useEffect} from 'react'

export default function Header({todoEdit, onTodoSubmit}) {
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (todoEdit.title) {
            setTitle(todoEdit.title)
        }
    }, [todoEdit.title])

    function onTitleChange(e) {
        setTitle(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault();

        const todo = {
            ...todoEdit,
            title,
        }
        onTodoSubmit(todo);
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor='title'>Title: </label>
                <input
                    type='text'
                    id='title'
                    value={title}
                    onChange={onTitleChange}
                />
            </form>
        </div>
    )
}