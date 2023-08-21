import { SectionTitle } from "../../components/SectionTitle/SectionTitle";

import greenImage from '../../assets/images/Frame 512536.png';
import redImage from '../../assets/images/Frame 512537.png'
import yellowImage from '../../assets/images/Frame 512538.png';

import "./servicesHomepage.scss";
import { motion } from 'framer-motion';

export const ServicesHomepage = () => {
    return (
        <>
            <SectionTitle text="Services we provide" />

            <div className="serviceHome">
                <div className="serviceHome__item">
                    <motion.div className="serviceHome__image"
                        transition={{ ease: "easeIn", duration: 0.5, delay: 0.3 }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0.8 }
                        }}>
                        <img src={yellowImage} alt="yellowService" />
                    </motion.div>
                    <div className="serviceHome__content">
                        <div className="serviceHome__content-title">
                            <motion.h3 className="serviceHome__content-title-h3"
                                transition={{ ease: "easeIn", duration: 0.3, delay: 0.5 }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    visible: { opacity: 1, scale: 1 },
                                    hidden: { opacity: 0, scale: 1 }
                                }}>
                                Financial Consulting
                            </motion.h3>
                        </div>
                        <motion.ul className="serviceHome__list"
                            transition={{ ease: "easeIn", duration: 0.3, delay: 0.6 }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: { opacity: 1, scale: 1 },
                                hidden: { opacity: 0, scale: 1 }
                            }}>
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
                        </motion.ul>
                    </div>
                </div>

                <div className="serviceHome__item">
                    <motion.div className="serviceHome__image"
                        transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0.8 }
                        }}>
                        <img src={redImage} alt="redService" />
                    </motion.div>
                    <div className="serviceHome__content">
                        <div className="serviceHome__content-title">
                            <motion.h3 className="serviceHome__content-title-h3"
                                transition={{ ease: "easeIn", duration: 0.5, delay: 1 }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    visible: { opacity: 1, scale: 1 },
                                    hidden: { opacity: 0, scale: 1 }
                                }}>
                                Tax Consulting
                            </motion.h3>
                        </div>
                        <motion.ul className="serviceHome__list"
                            transition={{ ease: "easeIn", duration: 0.2, delay: 1.5 }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: { opacity: 1, scale: 1 },
                                hidden: { opacity: 0, scale: 1 }
                            }}>
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
                        </motion.ul>
                    </div>
                </div>

                <div className="serviceHome__item">
                    <motion.div className="serviceHome__image"
                        transition={{ ease: "easeIn", duration: 0.5, delay: 0.5 }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: { opacity: 1, scale: 1 },
                            hidden: { opacity: 0, scale: 0.8 }
                        }}>
                        <img src={greenImage} alt="greenService" />
                    </motion.div>
                    <div className="serviceHome__content">
                        <div className="serviceHome__content-title">
                            <motion.h3 className="serviceHome__content-title-h3"
                                transition={{ ease: "easeIn", duration: 0.5, delay: 1 }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    visible: { opacity: 1, scale: 1 },
                                    hidden: { opacity: 0, scale: 1 }
                                }}>
                                Financial Consulting
                            </motion.h3>
                        </div>
                        <motion.ul className="serviceHome__list"
                            transition={{ ease: "easeIn", duration: 0.2, delay: 1.5 }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: { opacity: 1, scale: 1 },
                                hidden: { opacity: 0, scale: 1 }
                            }}>
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
                        </motion.ul>
                    </div>
                </div>
            </div >
        </>
    )
}
