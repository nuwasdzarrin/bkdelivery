import "./DeliveryPage.scss";
import Step from "../../components/cart/step/Step";
import {Link} from "react-router-dom";

const DeliveryPage = () => {
    return (
        <div className="container section">
            <div className="row my-4">
                <div className="col-lg-10 mx-auto">
                    <Step />
                    <div className="mt-4">
                        <div className="wrapper-menu">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="font-weight-600">GUEST DETAIL</div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Full Name" />
                                    </div>
                                    <div className="form-group form-phone">
                                        <div className="country-code">+62</div>
                                        <input className="form-control input-phone" placeholder="Mobile Number"
                                               type="number" />
                                    </div>
                                </div>
                                <div className="col-lg-7 right-product address">
                                    <h5 className="text-old-gold font-weight-600">Lokasi Pengantaran</h5>
                                    <div className="my-3">
                                        <h6 className="mb-1">1. Set Lokasi Pengantaran di Peta</h6>
                                        <p className="note">Pastikan pin lokasi sudah sesuai dengan lokasi pengantaran</p>
                                    </div>
                                    <div className="my-3">
                                        <h6 className="mb-1">2. Berikan Alamat Lengkap</h6>
                                        <p className="note">Tambahkan catatan atau acuan jika perlu (contoh: "di sebelah salon")</p>
                                        <textarea
                                            className="form-control"
                                            placeholder="Mohon set lokasi pengantaran di peta sebelum mengisi alamat pengantaran">
                                        </textarea>
                                    </div>
                                    <Link to="/cart/payment" className="btn btn-warning btn-order">Continue</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryPage
