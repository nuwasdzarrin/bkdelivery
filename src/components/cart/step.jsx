import "./step.scss"
const Step = () => {
    return (
        <div className="step-wrapper">
            <a className="item active">
                <span>1</span>
                <strong className="text">Cart</strong>
            </a>
            <a className="item">
                <span>2</span>
                <strong className="text">Delivery Info</strong>
            </a>
            <a className="item">
                <span>3</span>
                <strong className="text">Payment</strong>
            </a>
        </div>
    )
}

export default Step