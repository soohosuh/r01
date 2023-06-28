import { useState } from "react";

const Counter2 = () => {
    
    const [obj, setObj] = useState({num:10})
    
    return ( 
        <div>
            {obj.num}
            <button onClick={() => {
                obj.num += 1
                console.log(obj.num)

                setObj({...obj})
                //setObj({num:obj.num})
            }}>INC</button>
        </div>
     );
}
 
export default Counter2;