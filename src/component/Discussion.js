import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {FiArrowRight} from 'react-icons/fi'

function Discussion() {
  return (
    <div className='container discussion'>
        <div className='row row-cols-1 row-cols-md-2 justify-content-between container py-3'>
        <Button variant="primary" className='w-25'>More Questions <FiArrowRight style={{color:'white', stroke:'white', fill:'white'}}/></Button>{' '}
        <Button variant="success" className='w-25'>Explore Other Citix Exams</Button>{' '}
        </div>
        <div className='container' style={{paddingBottom:'150px'}}>
            <p> <b>Disscuss Citrix 1Y0-440 Topics, Questions or Ask Anything Related</b></p>
            <Form.Control as="textarea" placeholder="Type your comment here" className='w-50'/>
            <Button variant="primary" className='my-5'>Submit</Button>{' '}
        </div>
    </div>
  )
}

export default Discussion