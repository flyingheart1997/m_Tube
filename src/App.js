import { Container } from 'react-bootstrap';
import './_app.scss';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import HomeScreen from './screens/homeScreen/HomeScreen';
import Login from './screens/signin/Signin'

import { Navigate, Route, Routes } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { useEffect } from 'react';
import WatchScreen from './screens/watchScreen/WatchScreen';
import SearchScreen from './screens/searchScreen/SearchScreen';
import SubsCriptionScreen from './screens/subscriptionScreen/SubsCriptionScreen';
import ChannelScreen from './screens/channelScreen/ChannelScreen';

const Layout = ({ children }) => {

  return (
    <>
      <Header />
      <Sidebar />
      <div className="app__container ">
        <Container fluid className="app__main ">
          {children}
        </Container>
      </div>
    </>
  )
}


const App = () =>{

  // const {accessToken, loading , user} = useSelector(state=>state.auth)
  // const navigate = useNavigate();
  // useEffect(()=>{
  //   if(!loading && !accessToken && !user){
  //     navigate('/auth')
  //   }
  // },[accessToken, loading,navigate,user])

  
  return (
      <Routes>
        <Route path="/auth" element={<Login />}exact/>
        <Route path="/" element={<Layout><HomeScreen /></Layout>} />
        <Route path="/search/:query" element={<Layout><SearchScreen/></Layout>} />
        <Route path="/feed/subscription" element={<Layout><SubsCriptionScreen/></Layout>} />
        <Route path="/channel/:channelId" element={<Layout><ChannelScreen/></Layout>} />
        <Route path="/watch/:id" element={<Layout><WatchScreen/></Layout>} />
        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
  )
}

export default App;
