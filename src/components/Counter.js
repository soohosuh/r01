import { useState } from "react"

const Counter = () => {

    console.log("render...............")

    const [num, setNum] = useState(1)

    const handleClick = (amount) => {

        setNum(num + amount)
   
        //console.log("click", num)
    }

    return ( 
        <div className="w-full bg-blue-600 h-1/2">
            <div className="text-9xl text-white">
                {num}
            </div>
            <button 
            className=" bg-amber-200 text-white font-bold"
            onClick={() => { handleClick(1) }}
            >
                INC
            </button>
            <button 
            className=" bg-amber-200 text-white font-bold ml-10"
            onClick={() => { handleClick(-1) }}
            >
                DEC
            </button>

        </div>
     );
}
 
export default Counter;