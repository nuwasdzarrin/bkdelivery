import "./FromQuantity.scss"
import {useState} from "react";

const FormQuantity = (props) => {
    let [quantity, setQuantity] = useState(0)
    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
            props.onQuantityChange(quantity)
        }
    }
    return (
        <div className="form-input-qty">
            <div className="control" onClick={decrement}>-</div>
            <div className="qty">{quantity}</div>
            <div className="control" onClick={() => setQuantity(quantity+1)}>+</div>
        </div>
    )
}

export default FormQuantity