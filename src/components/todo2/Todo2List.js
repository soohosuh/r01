import { useEffect, useState } from "react";
import { getList } from "../../api/todoAPI";

const initState = {dtoList:[]}

const Todo2List = ({changeView}) => {

  const [data, setData] = useState(initState)

  useEffect(() => {

    getList().then(result => {
      console.log(result)
      setData(result)
    })

  },[])


  return ( 
    <div className="w-full h-[100vh] bg-sky-500">
      <div className="text-3xl">
        Todo2 List
        <button onClick={() => changeView('input') }>INPUT</button> 
      </div>

      <ul>
        {data.dtoList.map( todo => 
          <li 
          key={todo.tno}
          onClick={() => changeView('read', todo.tno)} 
          >{todo.tno} - {todo.title}</li>)
        }
      </ul>


    </div>
  );
}
 
export default Todo2List;