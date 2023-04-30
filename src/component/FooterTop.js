import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { FiUsers } from "react-icons/fi"

function FooterTop() {
    return (
        <div>
            <div className='container position-absolute footer-top'>
                <div className='bg-dark text-light p-5'>
                    <div className='d-flex text-center justify-content-around'>
                        <div className='border-end pe-5'>
                            <FiUsers style={{fontSize:"50px", color:'#0095EB'}}/>
                            <h4>Social Media</h4>
                            <a href='#'>Facebook </a>,
                            <a href='#'> Twitter </a>,
                            <a href='#'> Instagram </a>,
                            <a href='#'> Linkedin </a>,
                            <a href='#'> Reddit </a>,
                            <a href='#'> Pinterest </a>
                        </div>
                        <div>
                            <AiOutlineMail style={{fontSize:"50px", color:'#0095EB'}}/>
                            <h4>
                            Email Address
                            </h4>
                            <a href='#'>support@pass4success.com</a>
                            <p>www.Pass4Success.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterTop