import { Navbar } from "../../components/Navbar/Navbar"
import { Header } from "../../containers/Header/Header"
import { Offers } from "../../containers/Offers/Offers"
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
    </>
  )
}
