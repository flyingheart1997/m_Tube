import React, { useEffect } from 'react';
import './signin.scss'
import {useNavigate} from 'react-router-dom'
import { styled } from "@material-ui/core/styles";
import { spacing } from "@material-ui/system";
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/auth.action';
import { useSelector } from 'react-redux';
import MuiButton from "@material-ui/core/Button";

export const Button = styled(MuiButton)(spacing);

const Signin = () => {

    const dispatch = useDispatch()
    const accessToken = useSelector(state=>state.auth.accessToken)
    
    const navigate = useNavigate();

    const handleLogin = () => {
        dispatch(login())
    }

   
    useEffect(()=>{
        if(accessToken){
            navigate('/')
        }
    },[accessToken,navigate])

    return (
        <div className='login'>
            <div className='login__content'>
                <div className='login__loading' >
                    <img className='login__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Google_logo_%282010-2013%29.svg/2560px-Google_logo_%282010-2013%29.svg.png' alt='Google' /><br />
                    
                    <div className='login__button' >
                        <h4 className='login__subtitle'>Continue With Google</h4>
                        <p>Now Log In</p>
                        <Button onClick={handleLogin} variant='contained'>Log In</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin