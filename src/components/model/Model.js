import React, { useState } from 'react';
import {useSpring,animated} from 'react-spring'
import {MdOutlineContentCopy} from 'react-icons/md'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './model.scss'
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
  } from "react-share";

  import {
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
  } from "react-share";
import { Container} from '@material-ui/core';
import { useParams } from 'react-router-dom';


const Model = ({showModel,setShowModel}) => {
    const {id} = useParams()
    const animation = useSpring({
        config:{
            duration:250
        },
        opacity: showModel ? 1 : 0,
        transform: showModel ? `translateY(0%)` : `translateY(-100%)`
    })

    const [copySuccess, setCopySuccess] = useState('');


  return (
      <div>
          {showModel ? (
            <div className='overlay' style={{height:'100%',width:'100%',padding:'0 20px',background:'rgba(0,0,0,0.8)',position:'fixed',top:'0',left:'0',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <animated.div style={animation}>
                      <div className='model' style={{ height: 'auto', width: 'auto',padding:'50px 0px', background: '#191a1b', borderRadius: '10px', boxShadow: '0 0 5px crimson',justifyContent: 'center', alignItems: 'center'  }}>
                          <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                              <div style={{justifyItems:'center',justifyContent:'space-around',}}>
                                  <EmailShareButton url={`https://www.youtube.com/watch?v=${id}`} style={{paddingRight:'10px'}}>
                                      <EmailIcon round={true} size={52}/>
                                  </EmailShareButton>
                                  <FacebookShareButton url={`https://www.youtube.com/embed/${id}`} style={{paddingRight:'10px'}}>
                                      <FacebookIcon round={true} size={52}/>
                                  </FacebookShareButton>
                                  <TwitterShareButton url={`https://www.youtube.com/embed/${id}`} style={{paddingRight:'10px'}}>
                                      <TwitterIcon round={true} size={52}/>
                                  </TwitterShareButton>
                                  <WhatsappShareButton url={`https://www.youtube.com/embed/${id}`} style={{paddingRight:'10px'}}>
                                      <WhatsappIcon round={true} size={52}/>
                                  </WhatsappShareButton>
                                  <LinkedinShareButton url={`https://www.youtube.com/embed/${id}`} style={{paddingRight:'10px'}}>
                                      <LinkedinIcon round={true} size={52}/>
                                  </LinkedinShareButton>
                                  <TelegramShareButton url={`https://www.youtube.com/embed/${id}`}>
                                      <TelegramIcon round={true} size={52}/>
                                  </TelegramShareButton>
                              </div><br /><br />
                                <form className='input' style={{ height: '35px',flexDirection:'row',paddingLeft:'5px', alignItems: 'center',border:'1px solid #4c4c4c',  backgroundColor: 'rgba(0,0,0,0.5)', color: 'white', justifyContent:"center"}}>
                                    <input value={`https://www.youtube.com/embed/${id}`} onChange={({target: {value}}) => setCopySuccess({value, copied: false})}  style={{color:'white',backgroundColor: 'rgba(0,0,0,0.5)',fontSize:'12px',justifyContent:"center",alignItems:'center',border:'none',width:'90%'}} />
                                    
                                        <CopyToClipboard text={`https://www.youtube.com/embed/${id}`}onCopy={() => setCopySuccess({copied: true})}>
                                         <button onClick={()=>setCopySuccess(copySuccess)} style={{outline:'none',background:'transparent',border:'none',marginLeft:'8px',marginTop:'5px'}}><MdOutlineContentCopy style={{color:'white'}}/></button>
                                        </CopyToClipboard>
                                        
                                </form>
                          </Container>
                      </div>
                  </animated.div>
               </div> 
          ):null}
      </div>
  );
}

export default Model;
