import {
  Routes, Route
} from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'

function App() {
  return (

    <Routes>

       <Route path="/" element={< Login /> }/>
       <Route path ="/" element={ < Dashboard />}/>
       <Route path ="/" element={ <Register/>}/>

    </Routes>
  )
  }
  export default App;