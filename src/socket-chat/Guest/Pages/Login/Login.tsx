import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import validator from 'validator';

import { AuthProps } from '../../../interfaces/interfaces';

import Input from "../../../Components/Input/Input"



const Login = ({setAuth}: AuthProps  ) => {
    const icon = 'https://cdn-icons-png.flaticon.com/512/4804/4804075.png'
    const security = 'https://cdn-icons-png.flaticon.com/512/747/747305.png'
    
    const navigate = useNavigate()

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
   
    const [errorMail, setErrorMail] = useState({
      isError: false,
      msgError: ''
    })
    
    const [errorPass, setErrorPass] = useState({
      isError: false,
      msgError: ''
    })

    const validate = () => {
    }

    const onSubmit = ( e:any ) => {
      e.preventDefault();
      validate();
      setAuth('1')
      navigate('/home')
    }

    return (
      <div className="auth__container">
        <div className='auth__box'>
          <h2>Iniciar Sesión</h2>
          <form onSubmit={onSubmit} autoComplete="off">
            <Input
              label='Correo electrónico'
              type = 'text'
              placeholder= "Ingresa tu correo electrónico"
              icon = { icon }
              value = {email}
              setValue={ setEmail }
              error={ errorMail } />
            <Input 
                label='Contraseña'
                type = 'password'
                placeholder= "Ingresa tu contraseña"
                icon = { security }
                value = {password}
                setValue={ setPassword } 
                viewPassword={ true }
                error={ errorPass }/>
            <div className="btn-container">
              <button type='submit' className="login">Iniciar Sesión</button>
              <button type='button' className="register">Registrarse</button>
            </div>
          </form>
        </div>
      </div>
    )
}

export default Login