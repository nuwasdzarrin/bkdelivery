import {Link} from "react-router-dom";
import CarouselSection from "../components/home/CarouselSection";
import {carouselMasterData, menuMasterData} from "../data";
import {convertStringToSlug} from "../helpers";
import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";

const Home = () => {
    let carouselData = carouselMasterData
    let menus = menuMasterData
    return (
        <>
            <div className="mb-4">
                <CarouselSection data={carouselData} />
            </div>
            <div className="container section">
                <div className="title my-2">Our Menus</div>
                <div className="row">
                    {
                        menus.map((mn, index) => {
                            return (
                                <div className="col-6 col-lg-4 my-3" key={index}>
                                    <Link to={`/menus/${convertStringToSlug(mn.title)}`} className="text-decoration-none">
                                        <div className="wrapper-menu">
                                            <img src={mn.image} className="image-menu" />
                                            <div className="row mt-3">
                                                <div className="col-lg-6">
                                                    <div className="menu-title">{mn.title}</div>
                                                </div>
                                                <div className="d-none d-lg-block col-lg-6 right">
                                                    <button className="btn btn-warning btn-block btn-order">Order</button>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Home;