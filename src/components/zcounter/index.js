import { useState } from "react";
import ZCountDisplay from "./ZCountDisplay";
import ZCountPanel from "./ZCountPanel";

const ZCounter = () => {

    const target = {
        p1: 'A',
        p2: 'B',
        p3: 'C',
        p4: 'D',
    }
    
    const [obj, setObj] = useState({num:10})

    const changeObj = (amount) => {
        obj.num += amount
        setObj({...obj})
    }

    
    
    return ( 
        <div>
            <ZCountDisplay value={obj.num}/>
            <ZCountPanel fn={changeObj}/>
        </div>
     );
}
 
export default ZCounter;