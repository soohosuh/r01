import { useState } from "react";

const Todo2Read = () => {

    const [todo, setTodo] = useState(null)

    return ( 
        <div>
         <input 
          className="bg-green-400"
          type="text"
          value={todo.title}
          name="title"
          onChange={(e) => {
            todo.title = e.target.value
            setTodo({...todo})
          }}
         />
        </div>
     );
}
 
export default Todo2Read;