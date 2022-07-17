import React, { lazy } from 'react'
const HomePage = lazy(() => import('../Pages/Home/Home'));
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import SideBar from '../../Components/SideBar/SideBar';


const Router = () => {

  return (

    <div >
        <BrowserRouter>
            <SideBar />
            <Routes>
                <Route
                path="/home"
                element={
                <React.Suspense fallback={<>...</>}>
                    <HomePage />
                </React.Suspense>
                }
                />
                <Route path="*" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router