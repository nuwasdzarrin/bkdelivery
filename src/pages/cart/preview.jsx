import {menuMasterData} from "../../data";
import Step from "../../components/cart/step";

const CartPreview = () => {
    return (
        <div className="container section">
            <div className="row my-4">
                <div className="col-lg-9 mx-auto">
                    <Step />
                    <div className="my-4"></div>
                    <div className="row">
                        <div className="col-lg-3">
                        </div>
                        <div className="col-lg-9">
                            <div className="wrapper-menu">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPreview