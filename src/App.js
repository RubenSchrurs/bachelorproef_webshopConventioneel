import React from 'react'
import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import './css/App.scss'
import { ReleaseProvider } from './contexts/ReleaseProvider';


export default function App() {
  return (
    <>
      <ReleaseProvider>
        <Routes>
          <Route exact path='/' element={<HomePage/>}/>
          {/* <Route exact path='/details/:releaseID' element={<DetailPage/>}/> */}
        </Routes>
      </ReleaseProvider>
    </>
  );
}