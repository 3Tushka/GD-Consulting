import { HeaderPages } from '../../containers/HeaderPages/HeaderPages';
import { Navbar } from '../../components/Navbar/Navbar';

import FinancialServicesAdd from '../../assets/images/FinancialServicesAdd.png';
import FinPageHeader from '../../assets/images/Financial-consulting-header.png';
import { InlineCards } from '../../containers/InlineCards/InlineCards';
import { SocalMedia } from '../../containers/SocialMedia/SocalMedia';
import { Advantages } from '../../containers/Advantages/Advantages';
import { Reputation } from '../../containers/Addvertise/Reputation';
import { Services } from '../../components/Services/Services';
import { Footer } from '../../containers/Footer/Footer';

export const FinConsulting = () => {
    return (
        <>
            <Navbar />
            <HeaderPages HeaderPagesPropsTitle='Financial Consulting' HeaderPagesPropsTextFirst='We know how to succeed together with clients, no matter how difficult the situation may be. Our experts are happy to help entrepreneurs in all industries, from large corporations to small businesses, private investors and startups.' HeaderPagesPropsTextSecond='We also provide services in opening and supporting a business in the UAE.' HeaderPagesPropsImage={FinPageHeader} />
            <InlineCards InlineCardsTextFirst='Creating financial plans and budgets for managing a company’s finances. Analyzing financial statements, identifying problem areas, and developing recommendations to improve financial performance' InlineCardsTitleFirst='Financial Planning and Analysis' InlineCardsTextSecond='Managing a companys cash flows and investment portfolios. Assisting in the selection and evaluation of investment projects and financial instruments to achieve a company`s financial goals.' InlineCardsTitleSecond='Financial Management and Investment' />
            <Reputation />
            <Services servicesTitle='We offer solutions for your business' servicesText='Financial Modelling and Business Planning. Business and Asset Valuation. Mergers and Acquisitions (M&A). Due Diligence. Risk management and internal control. Internal and Financial audit. ' servicesImage={FinancialServicesAdd} />
            <Advantages AdvantagesTitle='Advantages' AdvantagesText='Financial consulting is a professional service offered by consultants in the field of finance and business management that has many advantages.' />
            <SocalMedia />
            <Footer />
        </>
    )
}
