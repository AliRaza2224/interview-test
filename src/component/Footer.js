import React from 'react'
import Logo from '../images/pass4success.webp'
import { GrFormNext } from 'react-icons/gr'

function Footer() {
    return (
        <div className='text-light position-relative' style={{background:'black', paddingTop:"160px"}} >
            <div className='container'>
                <div className='row row-cols-md-3 row-cols-1'>
                    <div className='col'>
                        <img src={Logo} />
                        <p className='py-4'>
                            We provide realistic exam questions for certification exams by renowned vendors.
                        </p>
                        <p>You can also discuss exam related questions on our discussion portal, for free.</p>
                    </div>
                    <div className='col'>
                        <h5>RECENT DISCUSSIONS</h5>
                        <hr />
                        <div className='row row-cols-2 ms-0'>
                            <div className='col-2 text-center footer-date'>
                                <p>26<br></br> April</p>
                            </div>
                            <div className='col-9'>
                                <p className='m-0'>Exam 700-755 Topic 6 Question 27 Discussion</p>
                                <p>Cisco Discussions</p>
                            </div>
                        </div>
                        <hr />
                        <div className='row row-cols-2 ms-0'>
                            <div className='col-2 text-center footer-date'>
                                <p>26<br></br> April</p>
                            </div>
                            <div className='col-9'>
                                <p className='m-0'>Exam 2V0-33.22 Topic 11 Question 11 Discussion</p>
                                <p>VMware Discussions</p>
                            </div>
                        </div>
                        <hr />
                        <div className='row row-cols-2 ms-0'>
                            <div className='col-2 text-center footer-date'>
                                <p>26<br></br> April</p>
                            </div>
                            <div className='col-9'>
                                <p className='m-0'>Exam HPE3-U01 Topic 4 Question 19 Discussion</p>
                                <p>HP Discussions</p>
                            </div>
                        </div>
                    </div>
                    <div className='col footer-list'>
                        <h5>SITEMAP</h5>
                        <hr />
                        <div className='row row-cols-2'>
                            <div className='col'>
                                <ul>
                                    <li> <a href='#'> Home</a></li>
                                    <li> <a href='#'> About</a></li>
                                    <li> <a href='#'> Guarantee</a></li>
                                    <li> <a href='#'> Login</a></li>
                                    <li> <a href='#'> Privacy Policy</a></li>
                                    <li> <a href='#'> Courses</a></li>
                                </ul>
                            </div>
                            <div className='col'>
                                <ul>
                                    <li> <a href='#'> All Exams</a></li>
                                    <li> <a href='#'> Contact</a></li>
                                    <li> <a href='#'> Terms and Conditions</a></li>
                                    <li> <a href='#'> Sign Up</a></li>
                                    <li> <a href='#'> Teach with us</a></li>
                                    <li> <a href='#'> FAQs</a></li>
                                </ul>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
            <hr/>
            <p className='text-center pb-3 m-0'>© 2023 Pass4Success</p>
        </div>
    )
}

export default Footer