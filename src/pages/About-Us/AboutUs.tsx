import { Navbar } from '../../components/Navbar/Navbar';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle';
import { Services } from '../../components/Services/Services';
import './aboutUs.scss';

import laptopService from '../../assets/images/laptpop.png';
import aboutUs from '../../assets/images/aboutUs.png';
import { InlineCards } from '../../containers/InlineCards/InlineCards';
import { SocalMedia } from '../../containers/SocialMedia/SocalMedia';
import { Footer } from '../../containers/Footer/Footer';
import { Companies } from '../../containers/Companies/Companies';
import { MiddleContent } from '../../components/MiddleContent/MiddleContent';
export const AboutUs = () => {
    return (
        <div className='about'>
            <Navbar />
            <div className="about__title">
                <MiddleContent MiddleContentTitle='A team of experts in taxes, accounting and financial consulting' MiddleContentText='Growth and Development Consulting (G&D Consulting) is a goal-driven and innovative finance leader with a proven track record of performance improvement in highly competitive markets.' MiddleContentImage={null} />
            </div>
            <Services serviceDirection={'row-reverse'} serviceBoolean={false} servicesTitle='A reliable consulting company is the key to a successful business' servicesText='With over 10 years of experience in industries such as accounting, audit, IT, automotive, engineering and construction, our strong analytical and leadership skills make us the ideal partner for businesses seeking success in the UAE.' servicesImage={laptopService} />
            <Services serviceDirection={'row'} serviceBoolean={true} servicesTitle='We implement your business ideas and plans with the help of G&D Consulting' servicesText='We offer a full range of professional services, including accounting, consulting, tax and audit support, as well as legal advice.We specialize in advising on business creation and corporate tax regulations, drawing on a deep understanding of the local market and industry insights.' servicesImage={aboutUs} />

            <InlineCards InlineCardsTitleFirst='Business support in the UAE' InlineCardsTextFirst='Our team specializes in providing accounting and tax services in the UAE, providing financial advice tailored to your needs.' InlineCardsTitleSecond='Combination of global and local experience' InlineCardsTextSecond='Combining international experience with deep knowledge of the local market, we provide our customers with exceptional service. We pride ourselves on being available, quickly and efficiently resolving customer issues and concerns.' />
            <SectionTitle text='We are trusted' />

            <InlineCards InlineCardsColor={"#EBF3FF"} InlineCardsTextFirst='We are committed to providing high quality consistent services with integrity and reliability, helping clients seize opportunities and minimize risks.' InlineCardsTextSecond='We believe that effective communication and proactive, results-driven approaches are integral to success for entrepreneurial leaders.' InlineCardsTitleFirst={null} InlineCardsTitleSecond={null} />
            <Companies />
            <SocalMedia />
            <Footer />
        </div>
    )
}
