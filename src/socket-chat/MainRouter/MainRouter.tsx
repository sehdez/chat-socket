import React from 'react'
import { useState, useEffect } from 'react';
import GuestRouter from '../Guest/GuestRouter/GuestRouter';
import AuthRouter  from '../Auth/AuthRouter/AuthRouter'
const MainRouter = () => {
  const [ auth, setAuth ] = useState('')
  useEffect(() => {
    console.log('pasé ', auth)
    localStorage.setItem('auth', auth );
  }, [auth])
  useEffect (()=> {
    console.log('seteé', auth)
    const isAuth = localStorage.getItem('auth')
    isAuth && setAuth( isAuth )
  })
  
  return (
    <>
      {
        (auth === '1')
          ? <AuthRouter  setAuth={ setAuth } />
          : <GuestRouter setAuth={ setAuth }  />
      }
    </>
  )
}

export default MainRouter