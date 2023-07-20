import { Navbar } from "../../components/Navbar/Navbar"
import { HeaderPages } from "../../containers/HeaderPages/HeaderPages"

import AccountingPageHeader from '../../assets/images/Accounting-services-header.png';
import { InlineCards } from "../../containers/InlineCards/InlineCards";
import { ServicesHomepage } from "../../containers/ServicesHomepage/ServicesHomepage";
import { Footer } from "../../containers/Footer/Footer";
import { SocalMedia } from "../../containers/SocialMedia/SocalMedia";
import { Advantages } from "../../containers/Advantages/Advantages";

export const AccountServ = () => {
  return (
    <>
      <Navbar />
      <HeaderPages HeaderPagesPropsTitle="Accounting services" HeaderPagesPropsTextFirst="We will provide your business with full support in accordance with the requirements of the UAE legislation." HeaderPagesPropsTextSecond="Our experts will provide tax registration, high-quality accounting, preparation and submission of tax returns, help in passing an audit and analyze taxes according to settlement schemes and commercial transactions." HeaderPagesPropsImage={AccountingPageHeader} />
      <InlineCards InlineCardsTitleFirst="Business support in the UAE" InlineCardsTextFirst="Our team specializes in providing accounting and tax services in the UAE, providing financial advice tailored to your needs." InlineCardsTitleSecond="Combination of global and local experience" InlineCardsTextSecond="Combining international experience with deep knowledge of the local market, we provide our customers with exceptional service. We pride ourselves on being available, quickly and efficiently resolving customer issues and concerns." />
      <ServicesHomepage />
      <Advantages AdvantagesTitle="Advantages" AdvantagesText="Conducting accounting services in our company has a number of significant advantages, especially if your business does not belong to the large category. " />
      <SocalMedia />
      <Footer />
    </>
  )
}
