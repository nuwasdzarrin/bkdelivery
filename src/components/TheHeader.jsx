import logoBK from '../assets/images/logo_bk.png'
import iconCart from '../assets/icons/ic_cart.png'
import {useSelector} from "react-redux";
import {cartList} from "../store/reducers/cart";

const TheHeader = () => {
    const cart_list = useSelector(cartList)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand d-none d-lg-block" href="/">
                    <img src={logoBK} className="navbar-logo" alt="logo"/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">
                                <div className="subtitle">Delivery</div>
                                <div className="title">Order</div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">
                                <div className="subtitle">Get Fresh</div>
                                <div className="title">Promotions</div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">
                                <div className="subtitle">Exclusive</div>
                                <div className="title">Large Order</div>
                            </a>
                        </li>
                    </ul>
                </div>
                <a className="d-lg-none" href="/">
                    <img src={logoBK} className="navbar-logo" alt="logo" />
                </a>
                <div className="d-flex nav-link">
                    <div className="title mr-15">LOGIN</div>
                    <div className="wrapper-ic-cart">
                        <img src={iconCart} alt="logo-cart" />
                        <div className="total-cart">{cart_list.length}</div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default TheHeader;