import { WhatsAppOutlined } from '@ant-design/icons'
import { motion } from 'framer-motion';
import './header.scss'
import Trust from '../../assets/icons/Trust.svg';
import VectorArrow from '../../assets/icons/Vector9.svg';

export const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <motion.div className="box"
                    initial={{ opacity: 0, scale: 0.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
                    <div className="box__title">
                        <span>Take control of your finances with our reliable servicess</span>
                    </div>
                    <div className="box__subtitle">
                        <span>Financial planning, tax consultancy and accounting solutions</span>
                    </div>
                </motion.div>
                <div className="header-button">
                    <button className="buttonLarge">
                        Learn More
                    </button>
                </div>
            </div>
            <div className="right">
                <div className="right-box">
                    <motion.div className="right-container first"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.4,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                        <div className="right-container__image">
                            <img src={Trust} alt="trust" className="image-wrapp" />
                        </div>
                        <div className="right-container__text">
                            Trusted by Companies
                        </div>
                        <div className="vector-arrow">
                            <img src={VectorArrow} alt="vectorArrow" className="image-wrapp" />
                        </div>
                    </motion.div>
                    <motion.div className="right-container second"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.8,
                            ease: [0, 0.71, 0.2, 1.01]
                        }}>
                        <div className="right-container__number">
                            100+
                        </div>
                        <div className="right-container__text">
                            Satisfied Clients
                        </div>
                        <div className="vector-arrow">
                            <img src={VectorArrow} alt="vectorArrow" className="image-wrapp" />
                        </div>
                    </motion.div>
                </div>
                <motion.div className="right-container third"
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        delay: 1.2,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}>
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
                </motion.div>
            </div>
        </header >
    )
}
