import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import './App.css'
import Contact from './pages/Contact'
import TopMenu from './components/TopMenu/TopMenu'

function App() {

  return (
    <Router>
      <TopMenu />
      <Routes>
        <Route path="/" element={<h2>Home</h2>} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router >
  )
}

export default App
