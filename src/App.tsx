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
        <Route path='/Account-Serv' element={<AccountServ />} />
        <Route path='/Tax-Consulting' element={<TaxConsulting />} />
        <Route path='/Financial-Consulting' element={<FinConsulting />} />
        <Route path='/About-Us' element={<AboutUs />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
