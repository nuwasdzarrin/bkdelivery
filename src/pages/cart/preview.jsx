import "./preview.scss";
import {menuMasterData} from "../../data";
import Step from "../../components/cart/step";
import icTrash from "../../assets/icons/ic_trash.png";

const CartPreview = () => {
    return (
        <div className="container section">
            <div className="row my-4">
                <div className="col-lg-10 mx-auto">
                    <Step />
                    <div className="mt-4">
                        <div className="wrapper-menu">
                            <div className="row">
                                <div className="col-lg-9">
                                    <table className="table-cart">
                                        <tr>
                                            <th>Menu Item</th>
                                            <th>Quantity</th>
                                            <th className="text-right">Subtotal</th>
                                            <th></th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="description">Paket 1 Pcs Ayam Madura Medium</div>
                                            </td>
                                            <td>
                                                <div className="form-input-qty">
                                                    <div className="control">-</div>
                                                    <div className="qty">0</div>
                                                    <div className="control">+</div>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <div className="price">Rp. 50,000</div>
                                            </td>
                                            <td style={{maxWidth: "10px"}}>
                                                <img src={icTrash} alt="trash" />
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <div className="col-lg-3 d-none d-lg-block right-product">
                                    <div className="py-3">
                                        <div className="price mb-2">Rp. 25,000</div>
                                        <div className="add-on mb-2">ADD ON -</div>
                                        <div className="form-input-qty mb-3">
                                            <div className="control">-</div>
                                            <div className="qty">0</div>
                                            <div className="control">+</div>
                                        </div>
                                        <button className="btn btn-warning btn-order">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPreview