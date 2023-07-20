import { Navbar } from '../../components/Navbar/Navbar';
import { HeaderPages } from '../../containers/HeaderPages/HeaderPages';
import './taxConsulting.scss';

import TaxPageHeader from '../../assets/images/Tax-consulting-header.png';

export const TaxConsulting = () => {
    return (
        <>
            <Navbar />
            <HeaderPages HeaderPagesPropsTitle='Tax Consulting' HeaderPagesPropsTextFirst='Many companies in the UAE face difficulties and misunderstandings of local tax laws, which lead to fines and more serious consequences. Knowing all the features of the UAE market is the key to your success.' HeaderPagesPropsTextSecond='The experience and knowledge of G&D Consulting experts will ensure high-quality accounting and tax accounting.' HeaderPagesPropsImage={TaxPageHeader} />
        </>
    )
}
