import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from "./components/Header";
import Home from './components/Home.js'
import Videos from './components/Videos.js'
import Footer from './components/Footer.jsx'
import Upload from './components/Upload'
import Login from './components/Login'
import Signup from './components/Signup'
const App = () => {
  return (
  
    <Router>
        
        <Header/>
      <Routes>
       
        <Route path='/' element={<Home/>}/>
        <Route path='/videos' element={<Videos/>}/>
        <Route path='/upload' element={<Upload/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer/>
    </Router>

    
  )
}

export default App










// import React from 'react'

// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import Header from './components/Header.js'

// const App = () => {
//   return (
//     <Router>
//       <Header/>
//       <Routes>
//         <Route/>
//       </Routes>
//     </Router>
//   )
// }

// export default App
