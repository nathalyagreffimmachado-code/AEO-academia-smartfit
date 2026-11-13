import './App.css'
import Login from './pages/Login'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRouter from './routes/PrivateRoute'

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<PrivateRouter />}>
           
          </Route>
        </Routes>
      </main>

      <Footer />
    </>
  )
}

export default App