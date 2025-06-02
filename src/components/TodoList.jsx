import {useState} from "react";

const TodoList = () => {
    const [todo, setTodo] = useState([])
    const [inputValue, setInputValue] = useState('')
    const addTodo = (e) => {
        e.preventDefault()
        if(inputValue.trim()) {
            setTodo([...todo, inputValue])
            setInputValue('')
        }
    }
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }
    return <div>
        {todo}
        <form onSubmit={addTodo}>
            <input type='text' value={inputValue} onChange={handleChange}  />
            <input type='submit' value={'add todo'}  />
        </form>
    </div>
}
export default TodoList