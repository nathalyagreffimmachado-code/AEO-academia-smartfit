import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import Users from './pages/Users'
import PrivateRouter from './routes/PrivateRoute'


function App() {
return(
  <>
  <Header />
  <Routes>
    <Route path='/' element={<Login/>} />
    <Route element= {<PrivateRouter />}>
    <Route path='/usersS' element={<Users/>} />
    </Route>
  </Routes>
  <Footer />
  </>
)
}

export default App
