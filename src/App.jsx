import React from 'react'
import Header from './Component/Header/Header'
import { Route, Routes } from 'react-router'
import ViewProduct from './Component/ViewProduct/ViewProduct'
import Viewalldata from './Component/Viewalldata/Viewallproduct'
import Phone from './Component/Phone/Phone'
import Glasses from './Component/Glasses/Glasses' 

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<ViewProduct />} />
        <Route path='/viewalldata' element={<Viewalldata/>}/>
        <Route path='/phone' element={<Phone/>}/>
        <Route path='/glasses' element={<Glasses/>}/>
      </Routes>
    </div>
  )
}

export default App
