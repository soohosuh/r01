import axios from "axios";
import { useEffect, useState } from "react";

const initState = {
    id:0,
    pname:'',
    price:0
}

const ProductDetail = ({target, requestBuy}) => {

    const [product, setProduct] = useState(initState)

    useEffect(() => {

        console.log("useEffect....", target)

        const id = target.pno

        if(id !== 0){
            axios.get(`http://localhost:80/products/${id}`).then(res => {
                setProduct(res.data)
            })
        }

    }, [target])

    return ( 
        <div>
            <div>ProductDetail</div>
            <div>
                <div>ID {product.id}</div>
                <div>NAME {product.pname}</div>
                <div>PRICE {product.price}</div>
            </div>
            <div>
                <button 
                className="bg-red-500 text-white"
                onClick={() => requestBuy(product)}
                >
                    ADD CART
                </button>
            </div>
        </div>
     );
}
 
export default ProductDetail;