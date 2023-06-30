const Todo1List = ({todos,requestView}) => {
    return ( 
        <div className="w-full  bg-red-400">
            <div>Todo1 List</div>

            <ul>
                {todos.map(t =>
                    <li 
                    key={t.tno}
                    onClick={() => requestView(t.tno)}
                    >
                     {t.tno} - {t.title} 
                     </li>)}
            </ul>

            
        </div>
     );
}
 
export default Todo1List;