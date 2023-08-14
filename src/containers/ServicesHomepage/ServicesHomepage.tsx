import { SectionTitle } from "../../components/SectionTitle/SectionTitle";

import greenImage from '../../assets/images/Frame 512536.png';
import redImage from '../../assets/images/Frame 512537.png'
import yellowImage from '../../assets/images/Frame 512538.png';

import "./servicesHomepage.scss";
import { ButtonLarge } from "../../components/Buttons/ButtonLarge/ButtonLarge";

export const ServicesHomepage = () => {
    return (
        <>
            <SectionTitle text="Services we provide" />

            <div className="serviceHome">
                <div className="serviceHome__item">
                    <div className="serviceHome__image image-wrapp">
                        <img src={yellowImage} alt="yellowService" />
                    </div>
                    <div className="serviceHome__content">
                        <div className="serviceHome__content-title">
                            <h3 className="serviceHome__content-title-h3">
                                Financial Consulting
                            </h3>
                        </div>
                        <ul className="serviceHome__list">
                            <li className="serviceHome__list-item">
                                Financial Modelling and Business Planning
                            </li>
                            <li className="serviceHome__list-item">
                                Business and Asset Valuation
                            </li>
                            <li className="serviceHome__list-item">
                                Mergers and Acquisitions (M&A)
                            </li>
                            <li className="serviceHome__list-item">
                                Due Diligence
                            </li>
                            <li className="serviceHome__list-item">
                                Risk management and internal control
                            </li>
                            <li className="serviceHome__list-item">
                                Internal & External audit
                            </li>
                        </ul>
                        <div className="serviceHome__button">
                            <ButtonLarge text="More info" />
                        </div>
                    </div>
                </div>

                <div className="serviceHome__item">
                    <div className="serviceHome__image image-wrapp">
                        <img src={redImage} alt="redService" />
                    </div>
                    <div className="serviceHome__content">
                        <div className="serviceHome__content-title">
                            <h3 className="serviceHome__content-title-h3">
                                Tax Consulting
                            </h3>
                        </div>
                        <ul className="serviceHome__list">
                            <li className="serviceHome__list-item">
                                VAT Registration, Filing, Amendment, Audit
                            </li>
                            <li className="serviceHome__list-item">
                                VAT Accounting & Consultancy
                            </li>
                            <li className="serviceHome__list-item">
                                Filing reconsideration form for VAT penalties
                            </li>
                            <li className="serviceHome__list-item">
                                Guidance with Tax Invoice
                            </li>
                            <li className="serviceHome__list-item">
                                Excise Tax Registration & Services
                            </li>
                            <li className="serviceHome__list-item">
                                Corporate tax consultancy
                            </li>
                        </ul>
                        <div className="serviceHome__button">
                            <ButtonLarge text="More info" />
                        </div>
                    </div>
                </div>

                <div className="serviceHome__item">
                    <div className="serviceHome__image image-wrapp">
                        <img src={greenImage} alt="greenService" />
                    </div>
                    <div className="serviceHome__content">
                        <div className="serviceHome__content-title">
                            <h3 className="serviceHome__content-title-h3">
                                Accounting Services
                            </h3>
                        </div>
                        <ul className="serviceHome__list">
                            <li className="serviceHome__list-item">
                                Managing full company’s accounting
                            </li>
                            <li className="serviceHome__list-item">
                                Partial accounting with “VAT”, “wage expenses” etc.
                            </li>
                            <li className="serviceHome__list-item">
                                Accounting outsourcing
                            </li>
                            <li className="serviceHome__list-item">
                                Financial statement analysis, interpretation, and evaluation
                            </li>
                            <li className="serviceHome__list-item">
                                Advising on emerging tax issues
                            </li>
                            <li className="serviceHome__list-item">
                                Assistance in resolving business disputes
                            </li>
                        </ul>
                        <div className="serviceHome__button">
                            <ButtonLarge text="More info" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
