import React from 'react'
import Logo from "../images/pass4success.webp";
import {AiOutlineMail} from "react-icons/ai";
import {GoLocation} from "react-icons/go"

function TopBar() {
    return (
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={Logo} style={{ width: "190px", height: "20px" }} />
                    <h4><b>-Free</b> Preparation Discussions</h4>
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className='d-flex '>
                        <div style={{fontSize:"30px", marginRight:"20px", color:"blue"}}><AiOutlineMail /></div>
                        <div>
                            <h5>MAIL US</h5>
                            <p>support@pass4success.com
                            </p>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div style={{fontSize:"30px", marginRight:"20px", color:"blue"}}><GoLocation style={{marginTop:"-25px"}} /></div>
                        <div>
                            <h5>LOCATION</h5>
                            <p>PK</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar