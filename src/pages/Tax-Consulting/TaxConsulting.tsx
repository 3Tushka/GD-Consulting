import { Navbar } from '../../components/Navbar/Navbar';
import { HeaderPages } from '../../containers/HeaderPages/HeaderPages';

import TaxPageHeader from '../../assets/images/Tax-consulting-header.png';
import TaxServicesAdd from '../../assets/images/TaxServicesAdd.png';
import { Footer } from '../../containers/Footer/Footer';
import { SocalMedia } from '../../containers/SocialMedia/SocalMedia';
import { Advantages } from '../../containers/Advantages/Advantages';
import { InlineCards } from '../../containers/InlineCards/InlineCards';
import { Services } from '../../components/Services/Services';
import { CompanyConsulting } from '../../containers/Addvertise/CompanyConsulting';

export const TaxConsulting = () => {
    return (
        <>
            <Navbar />
            <HeaderPages HeaderPagesPropsTitle='Tax Consulting' HeaderPagesPropsTextFirst='Many companies in the UAE face difficulties and misunderstandings of local tax laws, which lead to fines and more serious consequences. Knowing all the features of the UAE market is the key to your success.' HeaderPagesPropsTextSecond='The experience and knowledge of G&D Consulting experts will ensure high-quality accounting and tax accounting.' HeaderPagesPropsImage={TaxPageHeader} />
            <InlineCards InlineCardsTextFirst='Tax consulting is a professional service offered by consultants in the field of taxation to optimize tax payments and minimize tax risks. Our tax consultants help clients in the following ways:' InlineCardsTitleFirst=' ' InlineCardsTitleSecond=' ' InlineCardsTextSecond='We offer a wide range of consulting services in the field of taxation. Our experts will help with tax registration, high-quality bookkeeping, preparation and submission of tax returns, as well as in auditing and tax monitoring.' />
            <Services servicesTitle='We offer solutions for your business' servicesText='VAT Registration, Filing, Amendment, Audit. VAT Accounting & Consultancy. Filing reconsideration form for VAT penalties. Guidance with Tax Invoice.  Excise Tax Registration & Services. Corporate tax consultancy. ' servicesImage={TaxServicesAdd} />
            <CompanyConsulting />
            <Advantages AdvantagesTitle='Advantages' AdvantagesText='Tax consulting is a professional service offered by consultants in the field of taxation to optimize tax payments and minimize tax risks. Our tax consultants help clients in the following ways:' />
            <SocalMedia />
            <Footer />
        </>
    )
}
