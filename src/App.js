import {Routes, Route} from 'react-router-dom'
import { Home } from './components/Home'
import { Login } from './components/Login'

function App() {
  return (
    <div className="bg-slate-300 h-screen flex">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App