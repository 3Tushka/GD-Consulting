import './socialMedia.scss';

import whatsUp from '../../assets/icons/whats-up.svg';
import telegram from '../../assets/icons/free-icon-telegram-1946547.svg';
import { MailOutlined } from '@ant-design/icons';

export const SocalMedia = () => {
    return (
        <>
            <div className="social">
                <div className="social__title">
                    <h2 className="social__title__h2">
                        Or you can contact with us
                    </h2>
                </div>

                <div className="social__media">
                    <div className="social__media__item">
                        <button className='whatsUp media-button'>
                            <img src={whatsUp} alt="whatsUp" />
                            <span>Whatsapp</span>
                        </button>
                    </div>

                    <div className="social__media__item">
                        <button className='telegram media-button'>
                            <img src={telegram} alt="telegram" />
                            <span>Telegram</span>
                        </button>
                    </div>

                    <div className="social__media__item">
                        <button className='mail media-button'>
                            <MailOutlined />
                            <span>E-mail</span>
                        </button>
                    </div>
                </div>

                <div className="social__text">
                    <span>Click for a free consultation and confidently achieve financial goals. Empower your business with our expert services. Act now! </span>
                </div>
            </div>
        </>
    )
}