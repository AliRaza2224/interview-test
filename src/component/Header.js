import React from 'react';
import {AiFillBank} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import {AiFillRedditCircle} from "react-icons/ai"
import {BsPinterest} from "react-icons/bs"

function Header() {
  return (
    <div className='desktop'>
        <div className='bg-dark text-light py-2'>
            <div className='d-flex justify-content-between container ' variant="dark">
                <div className='d-flex justify-content-between align-items-center'>
                    <AiFillBank/>
                    Welcome to Pass4Success
                </div>
                <div className='d-flex justify-content-between header'>
                    <a href='#' className='mx-2'> Login</a>
                    <a href='#' className='mx-2'> SignUp</a>
                    <a href='#' className='mx-1'><AiFillFacebook/></a>
                    <a href='#' className='mx-1'><AiFillTwitterCircle/></a>
                    <a href='#' className='mx-1'><AiFillLinkedin/></a>
                    <a href='#' className='mx-1'><BsPinterest/></a>
                    <a href='#' className='mx-1'><AiOutlineInstagram/></a>
                    <a href='#' className='mx-1'><AiFillRedditCircle/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header