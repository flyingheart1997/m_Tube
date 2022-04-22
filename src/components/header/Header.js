import React, { useState } from 'react'
import './_header.scss'
import { AiOutlineSearch } from "react-icons/ai";
import {  log_out } from '../../redux/actions/auth.action';

import { useDispatch, useSelector } from 'react-redux';
import { Badge, Button, Popover,  } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

// const useStyles = makeStyles((theme)=> ({
//   large:{
//     width: theme.spacing(7),
//     height: theme.spacing(7),
    
//   },
// }));


const Header = () => {

  const dispatch = useDispatch()
  const {user,accessToken} = useSelector(state=>state.auth)
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = ()=>{
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  const [loading,setLoading]= useState(false)
  const handleLogOut = () => {
    setLoading(true)
    setTimeout(()=>{
      dispatch(log_out())
      setLoading(false)
    },2000) 
  }

  const [input,setInput] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${input}`)
    setInput('')
  }

  return (
    <div className='header'>
      <h1 className='header_logo'><span>m</span>Tube</h1>
      <form onSubmit={handleSubmit}><input type="text" placeholder="Search..." value={input} onChange={e=>setInput(e.target.value)}/>
        <button type="submit">
          <AiOutlineSearch size={22}/>
        </button>
      </form>
      {/* <MdNotifications size={28}/> */}
      <div className="header_icons" >
      { accessToken ? <img onClick={handleClick} src={user?.photoURL} alt='avatar' /> : <img src='https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg' alt='avatar' />}
        <Popover
          className='header__popover'
          open={open}
          id={id}
          onClose={handleClose}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}>
          <div className='header__popoverContainer'>
            <div className={`header__wrapper ${loading && "header__fade"}`}>
              <div className='header__popover__top'>
                <Badge
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                  }}>
                  { accessToken ? <img src={user?.photoURL} alt='avatar' /> : <img src='https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg' alt='avatar' />}
                </Badge>
              </div>
              { accessToken ? <div className='header__detail' >
                <h4 className='header__name'>{user?.name}</h4>
                <h6 className='login__email'>{user?.email}</h6>
                <hr/> 
              </div> : <div className='header__detail' ></div>}
              <div className="header__button">
                {accessToken ? <Button onClick={handleLogOut} variant='contained' >Log Out</Button>:<Button onClick={navigate('/auth')} variant='contained' >Log In</Button>}
              </div>
            </div>
          </div>
          </Popover>
      </div>
    </div>
  )
}

export default Header


// https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg