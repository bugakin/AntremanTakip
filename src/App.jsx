
import Navi from './Components/Navi'

import CardList from './Components/CardList'
import Form from './Components/Form'

import './assets/Styles/app.css'

import SearchBar from './Components/SearchBar'

import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer } from 'react-toastify'
import { BrowserRouter, Routes } from 'react-router-dom'

const App = () => {


  return (
    <BrowserRouter>
    <Routes>
      
    </Routes>
     <ToastContainer/>
     <Navi/> 
     <SearchBar/>
     <CardList/>
     <Form />
     </BrowserRouter>
  )
}

export default App