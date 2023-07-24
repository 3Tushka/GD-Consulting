import './footer.scss';
import footerLogo from '../../assets/Logo-hor.png';

import { Link } from "react-router-dom";
import { Divider } from 'antd';

const FooterMenu = () => (
    <>
        <li><Link to="/Account-Serv">Accounting Services</Link></li>
        <li><Link to="/Tax-Consulting">Tax Consulting</Link></li>
        <li><Link to="/Financial-Consulting">Financial Consulting</Link></li>
        <li><Link to="/About-Us">About Us</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
    </>
)

export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer__upper">
                    <div className="footer__logo">
                        <Link to="/"><img src={footerLogo} alt="footer-logo" className="image-wrapp" /></Link>
                    </div>
                    <div className="footer__links">
                        <FooterMenu />
                    </div>
                </div>
                <div className="footer__divider">
                    <Divider />
                </div>
                <div className="footer__lower">
                    <div className="footer__rights">
                        © 2023 G&D Consulting
                    </div>
                    <div className="footer__policy">
                        <a href="">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </>
    )
}
