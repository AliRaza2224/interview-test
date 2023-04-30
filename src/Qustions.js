import React from 'react'
import Button from 'react-bootstrap/Button';
import { TbMessageCircle2Filled } from 'react-icons/tb'
import Form from 'react-bootstrap/Form';

function Qustions() {
    return (
        <div className='my-3 container'>
            <div className='container p-0 border rounded'>
                <div className=' p-3 text-light' style={{ background: "#007BFF" }}>
                    Qustion # 1
                </div>
                <div className='p-3'>
                    <p>A Citrix Architect needs to define the architect and operational processes required to implement and maintain the production environment.</p>
                    <p>In which phase of the Citrix Methodology will the architect define this?</p>
                    <Form>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                    label="Define"
                                    name="group1"
                                    type={type}
                                    id={`default-${type}-2`}
                                />
                                <Form.Check
                                    label="Deploy"
                                    name="group1"
                                    type={type}
                                    id={`default-${type}-2`}
                                />
                                <Form.Check
                                    label="Assess"
                                    name="group1"
                                    type={type}
                                    id={`default-${type}-2`}
                                />
                                <Form.Check
                                    label="Review"
                                    name="group1"
                                    type={type}
                                    id={`default-${type}-2`}
                                />
                                <Form.Check
                                    label="Manage"
                                    name="group1"
                                    type={type}
                                    id={`default-${type}-2`}
                                />
                                <Form.Check
                                    label="Design"
                                    name="group1"
                                    type={type}
                                    id={`default-${type}-2`}
                                />

                            </div>
                        ))}
                    </Form>
                    <Button variant="primary" >Reveal Solution </Button>{' '}
                    <Button variant="secondary"> <TbMessageCircle2Filled /> Discuss</Button>{' '}
                </div>
            </div>
        </div>
    )
}

export default Qustions