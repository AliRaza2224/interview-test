import React from 'react'
import Logo from "../images/pass4success.webp";
import {AiOutlineMail} from "react-icons/ai";
import {GoLocation} from "react-icons/go"

function TopBar() {
    return (
        <div className='container mobile'>
            <div className='row row-cols-1 row-cols-md-2 justify-content-between align-items-center'>
                <div className='row row-cols-1 g-0 row-cols-md-2 justify-content-start align-items-center logo'>
                    <img src={Logo} style={{ width: "190px", height: "20px" }} className='col'/>
                    <h5 className='col m-0'><b>-Free</b> Preparation Discussions</h5>
                </div>
                <div className='row row-cols-1 row-cols-md-2 justify-content-between align-items-center desktop'>
                    <div className='d-flex desktop'>
                        <div style={{fontSize:"30px", marginRight:"20px", color:"blue"}}><AiOutlineMail /></div>
                        <div className='lh-1'>
                            <h6>MAIL US</h6>
                            <p>support@pass4success.com
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div style={{fontSize:"30px", marginRight:"20px", color:"blue"}}><GoLocation style={{marginTop:"-25px"}} /></div>
                        <div className='lh-1'>
                            <h6>LOCATION</h6>
                            <p>PK</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar