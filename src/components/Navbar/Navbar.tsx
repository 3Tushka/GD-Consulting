import { Link } from "react-router-dom";
import { useState } from 'react'
import { MenuOutlined, CloseOutlined, PhoneFilled, BookFilled } from "@ant-design/icons";
import { Divider } from "antd";
import './navbar.scss'

import Logo from "../../assets/Logo-hor.svg";

const Menu = () => (
    <>
        <li><Link to="/src/pages/Account-Serv">Accounting Services</Link></li>
        <li><Link to="/src/pages/About">Tax Consulting</Link></li>
        <li><Link to="/src/pages/Team">Financial Consulting</Link></li>
        <li><Link to="/src/pages/FAQ">About Us</Link></li>
        <li><Link to="/src/pages/Contact">Contact</Link></li>
    </>
)

export const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>
            <div className="navbar">
                <div className="navbar-logo">
                    <img src={Logo} alt="navbar-logo" className="image-wrapp" />
                </div>
                <div className="navbar-links">
                    <Menu />
                </div>

                <div className="navbar__smallscreen">
                    <MenuOutlined color="#000" onClick={() => setToggleMenu(true)} className="burger-icon" />

                    {toggleMenu && (
                        <div className="navbar__smallscreen_overlay">
                            <div className="smallscreen-box">
                                <div className="navbar-logo">
                                    <img src={Logo} alt="navbar-logo" className="image-wrapp" />
                                </div>
                                <div className="navbar-close">
                                    <CloseOutlined color="#000" onClick={() => setToggleMenu(false)} className="close-icon" />
                                </div>
                            </div>
                            <div className="smallscreen-content">
                                <div className="smallscreen-content__item">
                                    <Menu />
                                </div>
                                <Divider type="vertical" style={{ height: "100%" }} className="smallscreen-divider" />
                                <div className="smallscreen-content__item">
                                    <div className="smallscreen-content__item__content">
                                        <PhoneFilled /> <span>+971 56 840 0795</span>
                                    </div>
                                    <div className="smallscreen-content__item__content">
                                        <BookFilled /> <a href="">hello@gdconsulting.ae</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
