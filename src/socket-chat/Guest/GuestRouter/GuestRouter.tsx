import { lazy, Suspense } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

interface LoginProps{
  setAuth: Function;
}

const Login    = lazy( () => import('../Pages/Login/Login'));
const Forgot   = lazy( () => import('../Pages/Forgot/Forgot'))
const Recovery = lazy( () => import('../Pages/Recovery/Recovery'))

const GuestRouter = ({setAuth}: LoginProps) => {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/recovery" element = { <Suspense fallback = { <>...</> } ><Recovery /></Suspense>}/>
            <Route path="/forgot"   element = { <Suspense fallback = { <>...</> } ><Forgot   /></Suspense>}/>
            {/* <Route path="/register" element = { <Suspense fallback = { <>...</> } ><Login setAuth={ setAuth }   /></Suspense>}/> */}
            <Route path="/"         element = { <Suspense fallback = { <>...</> } ><Login setAuth={ setAuth }/></Suspense>}/>
            {/* Mostrar 404 */}
            {/* <Route path="*" element={<Suspense fallback={<>...</>}> <Login /></Suspense> }/> */}
        </Routes>
    </BrowserRouter>
  )
}

export default GuestRouter