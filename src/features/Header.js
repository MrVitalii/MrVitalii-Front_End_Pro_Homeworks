import {useState, useEffect} from "react";

export default function Header({todoEdit, onTodoSubmit}) {
    const [title, setTittle] = useState('')


    useEffect(() => {
        if (todoEdit.title) {
            setTittle(todoEdit.title)
        }
    }, [todoEdit.title])

    function onTittleChange(e) {
        setTittle(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault()

        const todo = {
            ...todoEdit,
            title,
            id: Math.random(),
        }
        onTodoSubmit(todo)
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor='title'>Title: </label>
                <input
                    type='text'
                    id='title'
                    value={title}
                    onChange={onTittleChange}
                />
            </form>
        </div>
    )
}