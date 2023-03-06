import React from 'react'
import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"

export default function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      {/* <Route exact path='/details/:releaseID' element={<DetailPage/>}/> */}
    </Routes>
    </>
  );
}