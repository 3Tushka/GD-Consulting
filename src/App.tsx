import './App.scss'
import { AccountServ } from './pages/Account-Serv/AccountServ'
import { Homepage } from './pages/Homepage/Homepage'
import { Route, Routes } from 'react-router'

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='/src/pages/Account-Serv' element={<AccountServ />} />
      </Routes>
    </>
  )
}

export default App
