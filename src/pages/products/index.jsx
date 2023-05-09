import './ProductPage.scss'
import {useParams} from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addProduct, removeProduct, updateQuantity } from "../../store/reducers/cart";
import {menuMasterData} from "../../data";
import {convertStringToSlug} from "../../helpers";
import MenuLeftSidebar from "../../components/menus/MenuLeftSidebar";
import FormQuantity from "../../components/cart/form_quantity/FormQuantity";
import {incrementByAmount} from "../../store/reducers/counter";

const Product = () => {
    const dispatch = useDispatch();
    let {menu, product} = useParams()
    let menuSelected = menuMasterData.find(mn => convertStringToSlug(mn.title) === menu)
    let productSelected = menuSelected.product.find(mn => convertStringToSlug(mn.title) === product)
    return (
        <div className="container section">
            <div className="row my-4">
                <div className="col-lg-9 mx-auto">
                    <div className="row">
                        <div className="col-lg-3">
                            <MenuLeftSidebar menus={menuMasterData} menuSlug={menu} />
                        </div>
                        <div className="col-lg-9">
                            <div className="wrapper-menu">
                                <div className="row h-100">
                                    <div className="col-lg-8">
                                        <div className="py-3">
                                            <div className="text-center">
                                                <div className="product-title mb-3">{productSelected.title}</div>
                                                <p className="product-note mb-4">{productSelected.note}</p>
                                            </div>
                                            <img src={productSelected.image} style={{maxWidth: '290px'}} alt="product-img" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 d-none d-lg-block right-product">
                                        <div className="py-3">
                                            <div className="price mb-2">Rp. 25,000</div>
                                            <div className="add-on mb-2">ADD ON -</div>
                                            <div className="mb-3">
                                                <FormQuantity />
                                            </div>
                                            <button
                                                className="btn btn-warning btn-order"
                                                onClick={() => dispatch(addProduct())}
                                            >Add To Cart</button>
                                        </div>
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

export default Product