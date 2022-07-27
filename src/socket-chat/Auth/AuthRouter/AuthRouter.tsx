import React, { lazy, Suspense } from 'react'
const HomePage = lazy(() => import('../Pages/Home/Home'));
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import SideBar from '../../Components/SideBar/SideBar';
interface LoginProps{
  setAuth: Function;
}

const Router = ({setAuth}: LoginProps) => {

  return (
    <BrowserRouter>
        <SideBar />
        <Routes>
            <Route
            path="/home"
            element={
            <Suspense fallback={<>...</>}>
                <HomePage />
            </Suspense>
            }
            />
            <Route path="*" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router