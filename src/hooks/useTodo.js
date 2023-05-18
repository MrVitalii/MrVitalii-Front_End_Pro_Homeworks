import {useEffect, useState} from "react"
import TodoApi from "../api/TodoApi"

export default function useTodo (){
    const [list, setList] = useState([])
    const [todoEdit, setTodoEdit] = useState({})

    useEffect(() => {
        TodoApi.getList().then((newList) => {
            setList(newList)
        })
    }, [])

    function onTodoSubmit(todo) {
        if (todo.id) {
            TodoApi.update(todo.id, todo).then(() => {
                const newList = list
                    .map(todoItem => todoItem.id === todo.id ? todo : todoItem)

                setList(newList)
                setTodoEdit({})
            })

        } else {
            TodoApi.create(todo).then((todoWithId) => {

                setList([...list, todoWithId])
            })

        }
    }

    function onTodoRemove(id) {
        TodoApi.delete(id).then(() => {

            const newList = list.filter(todo => todo.id !== id)

            setList(newList)
        })

    }

    function onTodoEdit(todo) {
        setTodoEdit(todo)
    }

    return {
        list,
        todoEdit,
        onTodoSubmit,
        onTodoRemove,
        onTodoEdit,
    }
}