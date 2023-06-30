import { useEffect, useState } from "react";

const Todo1Read = ({current, remove, modify}) => {

    const [todo, setTodo] = useState(current)

    console.log(todo)
    console.log("===================================")

    useEffect(() => {
        setTodo(current)
    },[current])

    if(!todo){
        return<></>
    }

    return ( 
        <div className="w-full bg-grey-300">
            
            <div>Todo1 Read</div>
            <div>
                {todo.tno}
            </div>
            <div>
               <input 
               type="text" 
               name="title" 
               value={todo.title} 
               onChange={(e) => {
                todo.title = e.target.value
                setTodo({...todo})
               }}/>
            </div>
            <div>
                <button className="m-2 p-2 bg-green-300"
                 onClick={() => modify(todo)}
                >MOD</button>
                <button className="m-2 p-2 bg-red-300"
                 onClick={() => remove(todo.tno)}
                >DEL</button>
            </div>
            
        </div>
     );
}
 
export default Todo1Read;
