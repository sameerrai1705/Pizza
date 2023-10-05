import Register from './components/Register'
import Login from './components/Login'
import Policy from './components/Policy'
import Contact from './components/Contact'
import HomeScreen from './components/Homescreen'
import About from './components/About'
// import NavBar from './components/Navbar'
import TopBar from './components/Topbar'
import {BrowserRouter , Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <TopBar />
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' Component={HomeScreen} />
        <Route path='/login' Component={Login} exact/>
        <Route path='/register' Component={Register} exact/>
        <Route path='/policy' Component={Policy} exact />
        <Route path='contact' Component={Contact} exact />
        <Route path='about' Component={About} exact />
      </Routes>
    </BrowserRouter>
  )
}

export default App