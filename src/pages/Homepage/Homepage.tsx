import { CoolLine } from "../../components/CoolLine/CoolLine"
import { Navbar } from "../../components/Navbar/Navbar"
import { Clients } from "../../containers/Clients/Clients"
import { ContactForm } from "../../containers/ContactForm/ContactForm"
import { Experience } from "../../containers/Experience/Experience"
import { Header } from "../../containers/Header/Header"
import { Offers } from "../../containers/Offers/Offers"
import { Principles } from "../../containers/Principles/Principles"
import { Purpouse } from "../../containers/Purpouse/Purpouse"
import { ServicesHomepage } from "../../containers/ServicesHomepage/ServicesHomepage"

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
      <Clients />
      <ContactForm />
      <CoolLine />
    </>
  )
}
