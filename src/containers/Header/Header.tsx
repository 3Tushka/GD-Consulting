import { Row, Col } from "antd"
import { WhatsAppOutlined } from '@ant-design/icons'
import './header.scss'
import Trust from '../../assets/icons/Trust.svg';
import VectorArrow from '../../assets/icons/Vector9.svg';

export const Header = () => {
    return (
        <header className="header">
            <Row justify={"space-evenly"}>
                <Col span={4 / 5}>
                    <div className="header-container">
                        <div className="box">
                            <div className="box__title">
                                <span>Take control of your finances with our reliable servicess</span>
                            </div>
                            <div className="box__subtitle">
                                <span>Financial planning, tax consultancy and accounting solutions</span>
                            </div>
                        </div>
                        <div className="header-button">
                            <button className="buttonLarge">
                                Learn More
                            </button>
                        </div>
                    </div>
                </Col>
                <Col span={1 / 5} className="right">
                    <div className="right-box">
                        <div className="right-container first">
                            <div className="right-container__image">
                                <img src={Trust} alt="trust" className="image-wrapp" />
                            </div>
                            <div className="right-container__text">
                                Trusted by Companies
                            </div>
                            <div className="vector-arrow">
                                <img src={VectorArrow} alt="vectorArrow" className="image-wrapp" />
                            </div>
                        </div>
                        <div className="right-container second">
                            <div className="right-container__number">
                                100+
                            </div>
                            <div className="right-container__text">
                                Satisfied Clients
                            </div>
                            <div className="vector-arrow">
                                <img src={VectorArrow} alt="vectorArrow" className="image-wrapp" />
                            </div>
                        </div>
                    </div>
                    <div className="right-container third">
                        <div className="right-container__text third__text">
                            Get quick free
                            сonsultations
                        </div>
                        <div className="right-container__button">
                            <button className="right-header-button">
                                <WhatsAppOutlined />
                                Contact Us
                            </button>
                        </div>
                    </div>
                </Col>
            </Row>
        </header >
    )
}
