
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Myworks from './pages/Myworks'
function App() {
  

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/about'} element={<About/>}/>
        <Route path={'/contact'} element={<Contact/>}/>
        <Route path={'/myworks'} element={<Myworks/>}/>
      </Routes>
    </>
  )
}

export default App
