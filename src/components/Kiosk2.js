import { useState } from "react"

const products = [
    {pno:1, pname:'Americano', price: 7000},
    {pno:2, pname:'Latte', price: 8000},
    {pno:3, pname:'Milk Tea', price: 9000},
    {pno:4, pname:'Green Tea', price: 6000},

]

const Kiosk = () => {

    const [items, setItems] = useState([])

    const handleClickBuy = (product) => {
        console.log({...product, qty:1})

        const result = items.filter( ele => ele.pno === product.pno )

        console.log("result", result)

        if(result.length === 0) {
            setItems([...items, {...product, qty:1}])
            return
        }

        const cartItem = result[0]
        cartItem.qty += 1
        setItems([...items])

        
    }
    
    
    
    return ( 

        <div className="w-full h-[100vh] bg-green-300 flex"> 
            <div className="w-2/3 bg-white ">
                <div className="text-4xl font-extrabold">Products</div>
                
                <ul>
                    {products.map( p => 
                    <li
                    key={p.pno} 
                    className="text-2xl underline m-3 p-3 bg-orange-300"
                    onClick={() => {handleClickBuy(p)}}
                    >
                        {p.pno} - {p.pname} - {p.price}
                    <button className="border-2 m-2 p-2 rounded-lg border-y-pink-400">BUY</button>
                    </li>)}
                </ul>
    
            </div>
            <div className="w-1/3">
                
            <div className="text-4xl font-extrabold">Cart</div>

            <ul>
                {items.map( (item, idx) => 
                <li key={idx} className="border-2">
                    <div className="flex text-3xl text-white m-4 p-4">
                        <div>{item.pno}</div>
                        <div>{item.pname}</div>
                        <div>{item.price}</div>
                    </div>
                    <div className="flex justify-center text-2xl">
                        <button className="rounded-lg bg-orange-300 p-4 m-1">+</button>
                        <p className="m-2 text-red-700 p-2">{item.qty}</p>
                        <button className="rounded-lg bg-orange-300 p-4 m-1">-</button>
                    </div>
                </li> )}
            </ul>

            </div>
        </div>
       

     );
}
 
export default Kiosk;