import { ButtonLarge } from '../../components/Buttons/ButtonLarge/ButtonLarge';
import { SectionCards } from '../../components/SectionCards/SectionCards';
import './experience.scss';

import dubaiCard from '../../assets/images/Frame 512602.svg';
import lolipopCard from '../../assets/images/Frame 512603.svg';
import globeCard from '../../assets/images/Frame 512604.svg';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';

export const Experience = () => {
    return (
        <>
            <SectionTitle text='Experience' />

            <div className="experience sectionWrapper">
                <div className="experience__container sectionWrapper__container">
                    <SectionCards sectionCardImage={dubaiCard} sectionCardTitle='Experience in the UAE' sectionCardText='Our team specializes in accounting, bookkeeping, and tax services in the UAE, providing consultations tailored to your needs. We have vast experience advising top UAE companies, private investment firms, and startups. Our priorities include a cohesive team, result-oriented focus, and a deep understanding of the local Emirati market and its financial regulations.' />
                    <SectionCards sectionCardImage={lolipopCard} sectionCardTitle='Adapting to Market Changes' sectionCardText=' We consider the specifics of UAE legislation and our clients industry characteristics. Our team keeps an eye on technological solutions and quickly adapts to market changes. This approach helps improve business processes and maintain stability in a dynamic environment.' />
                    <SectionCards sectionCardImage={globeCard} sectionCardTitle='Global and Local Expertise Combined' sectionCardText='By merging international experience with a profound knowledge of the local market, we provide an exceptional service to our clients. We pride ourselves on being accessible, promptly and efficiently addressing any client concerns that may arise.' />
                </div>

                <div className="experience__button sectionWrapper__button">
                    <ButtonLarge text='Get more consultation' />
                </div>
            </div>
        </>
    )
}
