import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { auth, provider } from '../firebase';
import './Login.css'
import { login } from './userSlice';
function Login() {
    const dispatch=useDispatch();
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then(({user})=>{
            dispatch(login({
                 displayName: user.displayName,
                 email: user.email,
                 photoUrl:user.photoURL
            }))
        })
        .catch((error)=>alert(error.message));
    }
  return (
    <div className="login">
        <div className="login_container">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwa3pAYBRgkFe_dfHMaE4hPoJM7SZeVyH3cg&usqp=CAU" alt="logo"/>
            <Button onClick={signIn}>Login</Button>
        </div>
    </div>
  )
}

export default Login