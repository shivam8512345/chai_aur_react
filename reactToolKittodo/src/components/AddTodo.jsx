import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../features/todoSlice'

export default function AddTodo() {
    const [Input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault();
        // now call the reducer and now we do not have to right all of this manually.
        // now we do not have to right all of this.

        if (Input.length > 0 && Input !== " ") {
            dispatch(addTodo(Input))
        }

        //now we do not make this setInput field is empty, so we have to make it empty. to do is created or addded then we also have to clear the state of that variable.
        setInput('')
    }
    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline=none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo...."
                value={Input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded  text-lg">
                Add Todo
            </button>
        </form>
    )
}