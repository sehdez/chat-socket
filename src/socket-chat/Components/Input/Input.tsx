import { useEffect, useState } from 'react';
interface InputProps {
  label        : string;
  type         : string;
  placeholder  : string;
  icon         : string;
  value        : string;
  setValue     : Function;
  viewPassword?: boolean;
  error?       :{ isError:boolean; msgError: string };
}

const Input = ({ label, type, placeholder, icon, value, setValue, viewPassword, error } : InputProps) => {
    const view = 'https://cdn-icons-png.flaticon.com/512/709/709612.png'
    const hidden = 'https://static.thenounproject.com/png/1446378-200.png'
    const [show, setShow]= useState(false)
    const [ removeError, setRemoveError ] = useState(true)
    useEffect(() => {
      setRemoveError(true)
    }, [])
    
    
    const onChange = (e:any) => {
      setValue(e.target.value) 
      setRemoveError(false)
    }
    
  return (
    <>
      <h5 className='aut__title'>{ label }</h5>
      <div className='input__container'>
          <img className="icono" src={ icon } />
          <input 
              autoComplete='off'
              type={ show ? 'text' : type } 
              placeholder={placeholder} 
              value ={ value } 
              onChange={ onChange } 
          />
          { viewPassword &&
              ( <img className="view" src={show ? hidden : view} onClick={ () => setShow(!show) }/> )
          }        
      </div>
      { (error?.isError && removeError )
          && (<p className='msg-error'>{error.msgError}</p>)
          }
    </>

  )
}

export default Input