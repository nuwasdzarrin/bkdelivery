import "./PreviewPage.scss";
import Step from "../../components/cart/step/Step";
import icTrash from "../../assets/icons/ic_trash.png";
import menu1 from "../../assets/images/menus/menu-1.jpg";
import FormQuantity from "../../components/cart/form_quantity/FormQuantity";
import {Link} from "react-router-dom";
import {useState} from "react";
const CartPreview = () => {
    const maxNote = 15
    let [note, setNote] = useState('')
    const onNoteTyping = (value) => {
        if (value.length <= maxNote) setNote(value)
    }
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
                                        <thead>
                                        <tr>
                                            <th colSpan={2}>Menu Item</th>
                                            <th>Quantity</th>
                                            <th className="text-right">Subtotal</th>
                                            <th></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <img src={menu1} className="image" />
                                            </td>
                                            <td>
                                                <div className="title-product">Paket 1 Pcs Ayam Madura Medium</div>
                                                <div className="subtitle">Drink: Coke</div>
                                            </td>
                                            <td>
                                                <FormQuantity />
                                            </td>
                                            <td className="text-right">
                                                <div className="price">Rp. 50,000</div>
                                            </td>
                                            <td>
                                                <img src={icTrash} alt="trash" className="icon-trash" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={menu1} className="image" />
                                            </td>
                                            <td>
                                                <div className="title-product">Paket 1 Pcs Ayam Madura Medium</div>
                                                <div className="subtitle">Drink: Coke</div>
                                            </td>
                                            <td>
                                                <FormQuantity />
                                            </td>
                                            <td className="text-right">
                                                <div className="price">Rp. 50,000</div>
                                            </td>
                                            <td>
                                                <img src={icTrash} alt="trash" className="icon-trash" />
                                            </td>
                                        </tr>

                                        </tbody>
                                    </table>
                                    <div className="my-4">
                                        <Link to="/" className="decoration-none">
                                            <div className="font-weight-600 text-gold">Continue Shopping</div>
                                        </Link>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label">Add Notes</label>
                                        <input className="form-control" maxLength={maxNote}
                                               onChange={e => onNoteTyping(e.target.value)} />
                                        <div className="max-content">{note.length}/{maxNote}</div>
                                    </div>
                                </div>
                                <div className="col-lg-3 d-none d-lg-block right-product">
                                    <div className="py-3">
                                        <div className="title-subtotal mb-1">Order Subtotal*</div>
                                        <div className="cart-price mb-2">Rp. 25,000</div>
                                        <div className="note-cart mb-4">*Price might change due to your delivery location.</div>
                                        <button className="btn btn-link btn-order-outline">Continue as Guest</button>
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