import { useState } from "react";
import Todo2Input from "./Todo2Input";
import Todo2List from "./Todo2List";
import uuid from 'react-uuid';

const Todo2 = () => {

    const [todos, setTodos] = useState([])

    const addTodo = (todoObj) => {
        console.log(todoObj)
        setTodos([...todos, {sno:uuid(), ...todoObj}])
    }

    const todoDel = (tno) => {
        setTodos(todos.filter(todo => todo.sno !== tno));
    }

    const modifyTodo = (todo) => {
        setTodos()
    }

    return ( 
        <>
         <Todo2Input addTodo={addTodo}></Todo2Input>
         <Todo2List todos={todos} todoDel={todoDel} modifyTodo={modifyTodo}></Todo2List>
         
        </>
     );
}
 
export default Todo2;