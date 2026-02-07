import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cardapio from './pages/Cardapio'
import Linktree from './pages/Linktree'
import Qrcode from './pages/Qrcode'
import Reserva from './pages/Reserva'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cardapio" element={<Cardapio />} />
      <Route path="/linktree" element={<Linktree />} />
      <Route path="/qrcode" element={<Qrcode />} />
      <Route path="/reserva" element={<Reserva />} />
    </Routes>
  )
}

export default App


