import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Controlled from './Component/Controlled'
import './App.css'
import UnControlledForm from './Component/UncontrolledForm'
import ReactHookForm from './Component/ReactHookForm'
import { useForm } from 'react-hook-form'
import Booking from './Component/Booking'
import RecipetBook from './Component/RecipetBook'
import Movies from './Component/Movies'
import './assets/movies.css'


function App() {
  

  return (
    <>
      <h1>React Form</h1>
      <Movies/>
      {/* <RecipetBook/> */}
      {/* <Booking/> */}
      {/* <Controlled/> */}
      {/* <UnControlledForm/> */}
      {/* <ReactHookForm/> */}
      
    </>
  )
}

export default App
