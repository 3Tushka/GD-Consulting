import './App.scss'
import { AccountServ } from './pages/Account-Serv/AccountServ'
import { Homepage } from './pages/Homepage/Homepage'
import { Route, Routes } from 'react-router'
import { TaxConsulting } from './pages/Tax-Consulting/TaxConsulting'
import { AboutUs } from './pages/About-Us/AboutUs'
import { FinConsulting } from './pages/Financial-Consulting/FinConsulting'
import { Contact } from './pages/Contact/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/src/pages/Account-Serv' element={<AccountServ />} />
        <Route path='/src/pages/Tax-Consulting' element={<TaxConsulting />} />
        <Route path='/src/pages/Financial-Consulting' element={<FinConsulting />} />
        <Route path='/src/pages/About-Us' element={<AboutUs />} />
        <Route path='/src/pages/Contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
