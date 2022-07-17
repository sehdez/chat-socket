import { lazy, Suspense } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Login    = lazy( () => import('../Pages/Login/Login'));
const Forgot   = lazy( () => import('../Pages/Forgot/Forgot'))
const Recovery = lazy( () => import('../Pages/Recovery/Recovery'))

const GuestRouter = () => {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/recovery" element = { <Suspense fallback = { <>...</> } ><Recovery /></Suspense>}/>
            <Route path="/forgot"   element = { <Suspense fallback = { <>...</> } ><Forgot   /></Suspense>}/>
            <Route path="/register" element = { <Suspense fallback = { <>...</> } ><Login    /></Suspense>}/>
            <Route path="/"         element = { <Suspense fallback = { <>...</> } ><Login    /></Suspense>}/>
            {/* Mostrar 404 */}
            <Route path="*" element={<Suspense fallback={<>...</>}> <Login /></Suspense> }/>
        </Routes>
    </BrowserRouter>
  )
}

export default GuestRouter