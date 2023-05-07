import "./menu.scss"
import {useParams, Link} from "react-router-dom";
import {convertStringToSlug} from "../../helpers";
import {menuMasterData} from "../../data";

const Menu = () => {
    let {menu} = useParams()
    let menus = menuMasterData
    return (
        <div className="container">
            <div className="row my-4">
                <div className="col-lg-3">
                    {
                        menus.map((mn, index) => {
                            return (
                                <Link to={`/menus/${convertStringToSlug(mn.title)}`} className="text-decoration-none">
                                    <div
                                        className={`my-2 item-sidebar ${menu===convertStringToSlug(mn.title) ? 'active':''}`}
                                        key={index}>
                                        {mn.title}
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className="col-lg-9">{menu}</div>
            </div>
        </div>
    )
}
export default Menu