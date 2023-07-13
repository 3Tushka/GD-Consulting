import { SectionTitle } from '../../components/SectionTitle/SectionTitle';

import peopleImg from '../../assets/images/Frame 512620.svg';
import umbrellaImg from '../../assets/images/Frame 512621.svg';
import womanImg from '../../assets/images/Frame 512598.svg';


import './offers.scss';
import { ButtonLarge } from '../../components/Buttons/ButtonLarge/ButtonLarge';

export const Offers = () => {
    return (
        <>
            <SectionTitle text='What sets us apart' />

            <div className="offers">
                <div className="offers__container">
                    <div className="offers__item">
                        <div className="offers__image image-wrapp">
                            <img src={peopleImg} alt="imgItem" />
                        </div>
                        <div className="offers__title">
                            <span>Reliable Connections</span>
                        </div>
                        <div className="offers__text">
                            <span>We prioritize understanding client needs, supporting them beyond advice, anticipating business issues, emphasizing clear communication, and hands-on management.</span>
                        </div>
                    </div>

                    <div className="offers__item">
                        <div className="offers__image image-wrapp">
                            <img src={umbrellaImg} alt="imgItem" />
                        </div>
                        <div className="offers__title">
                            <span>Professional Responsibility</span>
                        </div>
                        <div className="offers__text">
                            <span>We foster honest relationships with clients and colleagues, nurturing mutual understanding, support, and comprehending individual needs.</span>
                        </div>
                    </div>

                    <div className="offers__item">
                        <div className="offers__image image-wrapp">
                            <img src={womanImg} alt="imgItem" />
                        </div>
                        <div className="offers__title">
                            <span>Close Client Rapport</span>
                        </div>
                        <div className="offers__text">
                            <span>We practice responsibility and professionalism, adhering to high standards, providing comprehensive advice, engaging skilled specialists, and valuing confidentiality and ethics.</span>
                        </div>
                    </div>
                </div>

                <div className="offers__button">
                    <ButtonLarge text='Get more consultation' />
                </div>
            </div>
        </>
    )
}
