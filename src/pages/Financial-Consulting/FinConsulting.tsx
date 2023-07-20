import { HeaderPages } from '../../containers/HeaderPages/HeaderPages';
import { Navbar } from '../../components/Navbar/Navbar';
import './finConsulting.scss';

import FinPageHeader from '../../assets/images/Financial-consulting-header.png';
export const FinConsulting = () => {
    return (
        <>
            <Navbar />
            <HeaderPages HeaderPagesPropsTitle='Financial Consulting' HeaderPagesPropsTextFirst='We know how to succeed together with clients, no matter how difficult the situation may be. Our experts are happy to help entrepreneurs in all industries, from large corporations to small businesses, private investors and startups.' HeaderPagesPropsTextSecond='We also provide services in opening and supporting a business in the UAE.' HeaderPagesPropsImage={FinPageHeader} />
        </>
    )
}
