import './footer.scss';
import footerLogo from '../../assets/Logo-hor.png';

import { Link } from "react-router-dom";
import { Divider } from 'antd';

const FooterMenu = () => (
    <>
        <li><Link to="/src/pages/Account-Serv">Accounting Services</Link></li>
        <li><Link to="/src/pages/About">Tax Consulting</Link></li>
        <li><Link to="/src/pages/Team">Financial Consulting</Link></li>
        <li><Link to="/src/pages/FAQ">About Us</Link></li>
        <li><Link to="/src/pages/Contact">Contact</Link></li>
    </>
)

export const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer__upper">
                    <div className="footer__logo">
                        <img src={footerLogo} alt="footerLogo" />
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
