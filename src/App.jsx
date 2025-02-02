import './App.css'
import Home from './Pages/Home'
import Shopping from './Pages/Shopping';
import Cart from './Pages/Cart';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shopping" element={<Shopping/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
  </Router>
  )
}

export default App
