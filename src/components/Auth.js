import React from 'react'
import { AuthContext } from './App'
import { useContext } from 'react'
const Auth = () => {
    const var1=useContext(AuthContext);
    console.log(var1);
  return (
    <div>
        {!var1 && <p className='authText'>you are not authenticated</p>}
        {var1 && <p className='authText'>You are now authenticated, you can proceed</p>}
    </div>
  )
}

export default Auth