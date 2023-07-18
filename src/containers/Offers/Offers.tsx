import { SectionTitle } from '../../components/SectionTitle/SectionTitle';

import peopleImg from '../../assets/images/Frame 512620.svg';
import umbrellaImg from '../../assets/images/Frame 512621.svg';
import womanImg from '../../assets/images/Frame 512598.svg';

import './offers.scss';
import { ButtonLarge } from '../../components/Buttons/ButtonLarge/ButtonLarge';
import { SectionCards } from '../../components/SectionCards/SectionCards';

export const Offers = () => {
    return (
        <>
            <SectionTitle text='What sets us apart' />

            <div className="sectionWrapper">
                <div className="sectionWrapper__container">
                    <SectionCards sectionCardImage={peopleImg} sectionCardTitle='Reliable Connections' sectionCardText='We prioritize understanding client needs, supporting them beyond advice, anticipating business issues, emphasizing clear communication, and hands-on management.' />
                    <SectionCards sectionCardImage={umbrellaImg} sectionCardTitle='Professional Responsibility' sectionCardText="We foster honest relationships with clients and colleagues, nurturing mutual understanding, support, and comprehending individual needs." />
                    <SectionCards sectionCardImage={womanImg} sectionCardTitle='Close Client Rapport' sectionCardText='We practice responsibility and professionalism, adhering to high standards, providing comprehensive advice, engaging skilled specialists, and valuing confidentiality and ethics.' />
                </div>

                <div className="sectionWrapper__button">
                    <ButtonLarge text='Get more consultation' />
                </div>
            </div>
        </>
    )
}
