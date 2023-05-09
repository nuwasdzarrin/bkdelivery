import "./FromQuantity.scss"
import {useState} from "react";

const FormQuantity = (props) => {
    let [quantity, setQuantity] = useState(0)
    const increment = () => {
        let res = quantity+1
        setQuantity(res)
        props.onQuantityChange(res)
    }
    const decrement = () => {
        if (quantity > 0) {
            let res = quantity+1
            setQuantity(res)
            props.onQuantityChange(res)
        }
    }
    return (
        <div className="form-input-qty">
            <div className="control" onClick={decrement}>-</div>
            <div className="qty">{quantity}</div>
            <div className="control" onClick={increment}>+</div>
        </div>
    )
}

export default FormQuantity