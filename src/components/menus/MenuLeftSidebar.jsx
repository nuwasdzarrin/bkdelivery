import "./MenuLeftSidebar.scss"
import {convertStringToSlug} from "../../helpers";
import {Link} from "react-router-dom";

const MenuLeftSidebar = (props) => {
    return (
        <>
            {
                props.menus.map((mn, index) => {
                    return (
                        <Link
                            to={`/menus/${convertStringToSlug(mn.title)}`} className="text-decoration-none"
                            key={index}>
                            <div
                                className={`my-2 item-sidebar ${props.menuSlug===convertStringToSlug(mn.title) ? 'active':''}`}
                                key={index}>
                                {mn.title}
                            </div>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default MenuLeftSidebar