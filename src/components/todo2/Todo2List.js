const Todo2List = ({todos, todoDel, modifyTodo}) => {

    console.log(todos, "dfdsf")

    return ( 
        <>Todo2 List
         <div>
            <ul>
                {todos.map(todo => <li key={todo.sno}>{todo.tno}/{todo.title} /
                <button onClick={() => modifyTodo(todo)}>MOD</button>/
                <button onClick={() => todoDel(todo.sno)}>DEL</button>
                </li>)}
            </ul>
         </div>
        </>
     );
}
 
export default Todo2List;