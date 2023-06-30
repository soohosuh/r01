import { useState } from "react";

const Todo2Input = ({addTodo}) => {

    const [todo, setTodo] = useState({title:""})



    return ( 
        
        <div>
            <input 
            className="m-2 p-2  bg-violet-400" 
            type="text" 
            name="title" 
            value={todo.title} 
            onChange={(e) => {
                todo.title = e.target.value
                setTodo({...todo})
            }} 
            />
            <input 
            className="m-2 p-2 bg-gray-400"
            type="text"
            name="tno"
            value={todo.tno}
            onChange={(e) => {
                todo.tno = e.target.value
                setTodo({...todo})
            }}
            />
            <button onClick={() => {
                console.log({todo})
                addTodo({...todo})
            }}>
                골무
            </button>
            
        </div>
     );
}
 
export default Todo2Input;