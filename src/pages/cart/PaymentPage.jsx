import Step from "../../components/cart/step/Step";

const PaymentPage = () => {
    return (
        <div className="container section">
            <div className="row my-4">
                <div className="col-lg-10 mx-auto">
                    <Step />
                    <div className="mt-4">
                        <div className="wrapper-menu">
                            <div className="row">
                                <div className="col-lg-6">
                                </div>
                                <div className="col-lg-6 d-none d-lg-block right-product">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage
