import React from 'react';
import {useSpring,animated} from 'react-spring'
import './downloadModel.scss'
import {IoLogoYoutube,IoIosMusicalNotes} from 'react-icons/io'
import { useParams } from 'react-router-dom';

const DownloadModel = ({showDownloadModel, setShowDownloadModel}) => {
    const {id} = useParams()
    const animation = useSpring({
        config:{
            duration:250
        },
        opacity: showDownloadModel ? 1 : 0,
        transform: showDownloadModel ? `translateY(0%)` : `translateY(-100%)`
    })
    
    const Downloader = require("@ibaraki-douji/youtube").Downloader;
    const YouTube = require('@ibaraki-douji/youtube').YouTube
    
    
  return (
    <div>
        {showDownloadModel ? (
            <div className='overlayDownload' style={{height:'100%',width:'100%',padding:'0 20px',background:'rgba(0,0,0,0.8)',position:'fixed',top:'0',left:'0',display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <animated.div style={animation}></animated.div>
                    <div className='downloadModel' style={{ height: 'auto', width: 'auto',padding:'20px 50px', background: '#191a1b', borderRadius: '10px', boxShadow: '0 0 5px crimson', cursor:'default' }}>
                        <h4 style={{fontSize:'16px',color:'white'}}>Download video as</h4>
                        <div style={{ display: 'flex', flexDirection: 'column',justifyItems:'start',justifyContent:'start',alignItems:'start',marginTop:'20px',}}>
                            <h4 style={{fontSize:'13px',color:'wheat'}}><IoLogoYoutube color='red'/> Video</h4>
                            <div style={{justifyItems:'center',justifyContent:'space-around', flexDirection:'row', display:'flex',gap:'15px'}}>
                                <p onClick={()=>(async () => {
                                    const video = await YouTube.getVideoInformations({
                                        url: `https://www.youtube.com/watch?v=${id}`,
                                    });
                                    Downloader.downloadVideo(video,"144", "./my/path.mp4", (stdout) => {
                                        console.log(stdout)
                                    })
                                })(setShowDownloadModel(!showDownloadModel))} style={{ fontSize: '12px', padding: '2px 10px', borderRadius: '5px', cursor: 'pointer' }}>144p</p>
                                
                                <p onClick={()=>(async () => {
                                    const video = await YouTube.getVideoInformations({
                                        url: `https://www.youtube.com/watch?v=${id}`,
                                    });
                                    Downloader.downloadVideo(video,"240", "./my/path.mp4", (stdout) => {
                                        console.log(stdout)
                                    })
                                })(setShowDownloadModel(!showDownloadModel))} style={{fontSize:'12px', padding:'2px 10px',borderRadius:'5px', cursor:'pointer'}}>240p</p>
                                
                                <p onClick={()=>(async () => {
                                    const video = await YouTube.getVideoInformations({
                                        url: `https://www.youtube.com/watch?v=${id}`,
                                    });
                                    Downloader.downloadVideo(video,"360", "./my/path.mp4", (stdout) => {
                                        console.log(stdout)
                                    })
                                })(setShowDownloadModel(!showDownloadModel))} style={{fontSize:'12px', padding:'2px 10px',borderRadius:'5px', cursor:'pointer'}}>360p</p>
                                
                                <p onClick={()=>(async () => {
                                    const video = await YouTube.getVideoInformations({
                                        url: `https://www.youtube.com/watch?v=${id}`,
                                    });
                                    Downloader.downloadVideo(video,"480", "./my/path.mp4", (stdout) => {
                                        console.log(stdout)
                                    })
                                })(setShowDownloadModel(!showDownloadModel))} style={{fontSize:'12px', padding:'2px 10px',borderRadius:'5px', cursor:'pointer'}}>480p</p>
                                
                                <p onClick={()=>(async () => {
                                    const video = await YouTube.getVideoInformations({
                                        url: `https://www.youtube.com/watch?v=${id}`,
                                    });
                                    Downloader.downloadVideo(video,"720", "./my/path.mp4", (stdout) => {
                                        console.log(stdout)
                                    })
                                })(setShowDownloadModel(!showDownloadModel))} style={{fontSize:'12px', padding:'2px 10px',borderRadius:'5px', cursor:'pointer'}}>720p</p>
                            </div>
                            <div style={{justifyItems:'center',justifyContent:'space-around',marginTop:'-5px', flexDirection:'row', display:'flex',gap:'15px'}}>
                                <p onClick={()=>(async () => {
                                    const video = await YouTube.getVideoInformations({
                                        url: `https://www.youtube.com/watch?v=${id}`,
                                    });
                                    Downloader.downloadVideo(video,"1080", "./my/path.mp4", (stdout) => {
                                        console.log(stdout)
                                    })
                                })(setShowDownloadModel(!showDownloadModel))} style={{fontSize:'12px', padding:'2px 10px',borderRadius:'5px', cursor:'pointer'}}>1080p</p>
                                <p onClick={()=>(async () => {
                                    const video = await YouTube.getVideoInformations({
                                        url: `https://www.youtube.com/watch?v=${id}`,
                                    });
                                    Downloader.downloadVideo(video,"1440", "./my/path.mp4", (stdout) => {
                                        console.log(stdout)
                                    })
                                })(setShowDownloadModel(!showDownloadModel))} style={{fontSize:'12px',cursor:'pointer' , padding:'2px 10px',borderRadius:'5px'}}>1440P</p>
                                <p onClick={()=>(async () => {
                                    const video = await YouTube.getVideoInformations({
                                        url: `https://www.youtube.com/watch?v=${id}`,
                                    });
                                    Downloader.downloadVideo(video,"2160", "./my/path.mp4", (stdout) => {
                                        console.log(stdout)
                                    })
                                })(setShowDownloadModel(!showDownloadModel))} style={{fontSize:'12px',cursor:'pointer' , padding:'2px 10px',borderRadius:'5px'}}>2160P</p>
                            </div>
                            <h4 style={{fontSize:'13px',marginTop:'10px',color:'wheat'}}><IoIosMusicalNotes color='red'/> Music</h4>
                            <div style={{justifyItems:'center',justifyContent:'space-around', flexDirection:'row', display:'flex',gap:'15px'}}>
                                <p onClick={()=>(async () => {
                                    const video = await YouTube.getVideoInformations({
                                        url: `https://www.youtube.com/watch?v=${id}`,
                                    });
                                    Downloader.downloadAudio(video, "./my/path.mp4", (stdout) => {
                                        console.log(stdout)
                                    })
                                })(setShowDownloadModel(!showDownloadModel))} style={{fontSize:'12px', padding:'2px 10px',borderRadius:'5px', cursor:'pointer'}}>Mp3 70k</p>
                                <p onClick={()=>(async () => {
                                    const video = await YouTube.getVideoInformations({
                                        url: `https://www.youtube.com/watch?v=${id}`,
                                    });
                                    Downloader.downloadAudio(video, "./my/path.mp4", (stdout) => {
                                        console.log(stdout)
                                    })
                                })(setShowDownloadModel(!showDownloadModel))} style={{fontSize:'12px', padding:'2px 10px',borderRadius:'5px', cursor:'pointer'}}>Mp3 128k</p>
                                <p onClick={()=>(async () => {
                                    const video = await YouTube.getVideoInformations({
                                        url: `https://www.youtube.com/watch?v=${id}`,
                                    });
                                    Downloader.downloadAudio(video, "./my/path.mp4", (stdout) => {
                                        console.log(stdout)
                                    })
                                })(setShowDownloadModel(!showDownloadModel))} style={{fontSize:'12px', padding:'2px 10px',borderRadius:'5px', cursor:'pointer'}}>Mp3 160k</p>
                            </div>
                            {/* <div style={{justifyItems:'center',justifyContent:'space-around',marginTop:'-5px', flexDirection:'row', display:'flex',gap:'15px'}}>
                                <p style={{fontSize:'12px', border:'1px solid gray', padding:'2px 10px',borderRadius:'5px'}}>M4A 128k</p>
                            </div> */}
                        </div>
                    </div>     
            </div>
        ) : null}
    </div>
  )
}

export default DownloadModel
