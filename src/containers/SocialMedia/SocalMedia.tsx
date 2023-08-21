import './socialMedia.scss';

import whatsUp from '../../assets/icons/whats-up.svg';
import telegram from '../../assets/icons/free-icon-telegram-1946547.svg';
import { MailOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion'

export const SocalMedia = () => {

    const container = {
        hidden: { opacity: 0, scale: 1 },
        show: {
            opacity: 1, scale: 1,
            transition: {
                duration: 0.5,
                delay: 0.25,
                staggerChildren: 0.5,
            }
        },
    }

    const item = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
            }
        }
    }

    return (
        <>
            <div className="social">
                <div className="social__title">
                    <h2 className="social__title__h2">
                        Or you can contact with us
                    </h2>
                </div>

                <motion.div className="social__media"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={container}>

                    <motion.div className="social__media__item"
                        variants={item}
                    >
                        <button className='whatsUp media-button'>
                            <img src={whatsUp} alt="social WhatsUp" />
                            <span>Whatsapp</span>
                        </button>
                    </motion.div>

                    <motion.div className="social__media__item"
                        variants={item}
                    >
                        <button className='telegram media-button'>
                            <img src={telegram} alt="social Telegram" />
                            <span>Telegram</span>
                        </button>
                    </motion.div>

                    <motion.div className="social__media__item"
                        variants={item}
                    >
                        <button className='mail media-button'>
                            <MailOutlined />
                            <span>E-mail</span>
                        </button>
                    </motion.div>
                </motion.div>

                <div className="social__text">
                    <span>Click for a free consultation and confidently achieve financial goals. Empower your business with our expert services. Act now! </span>
                </div>
            </div>
        </>
    )
}