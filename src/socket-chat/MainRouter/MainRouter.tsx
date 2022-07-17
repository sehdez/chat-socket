import React from 'react'
import { useState } from 'react';
import GuestRouter from '../Guest/GuestRouter/GuestRouter';
import AuthRouter  from '../Auth/AuthRouter/AuthRouter'
const MainRouter = () => {
  const [ auth, setAuth ] = useState(1)
  return (
    <>
      {
        (auth === 0)
          ? <AuthRouter />
          : <GuestRouter />
      }
    </>
  )
}

export default MainRouter