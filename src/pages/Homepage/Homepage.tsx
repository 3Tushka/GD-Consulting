import { CoolLine } from "../../components/CoolLine/CoolLine"
import { Navbar } from "../../components/Navbar/Navbar"
import { MiddleContent } from "../../containers/MiddleContent/MiddleContent"
import { ContactForm } from "../../containers/ContactForm/ContactForm"
import { Experience } from "../../containers/Experience/Experience"
import { Footer } from "../../containers/Footer/Footer"
import { Header } from "../../containers/Header/Header"
import { Offers } from "../../containers/Offers/Offers"
import { Principles } from "../../containers/Principles/Principles"
import { Purpouse } from "../../containers/Purpouse/Purpouse"
import { ServicesHomepage } from "../../containers/ServicesHomepage/ServicesHomepage"
import { SocalMedia } from "../../containers/SocialMedia/SocalMedia"

export const Homepage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Purpouse />
      <Offers />
      <ServicesHomepage />
      <Experience />
      <Principles />
      <CoolLine />
      <MiddleContent />
      <ContactForm />
      <CoolLine />
      <SocalMedia />
      <Footer />
    </>
  )
}
