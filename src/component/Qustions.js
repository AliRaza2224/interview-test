import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import { TbMessageCircle2Filled } from 'react-icons/tb'
import Form from 'react-bootstrap/Form';

function Qustions() {
    const [selectedAlphabet, setSelectedAlphabet] = useState('');
    console.log("selected alphabets", selectedAlphabet)

    function handleAlphabetChange(event) {
        setSelectedAlphabet(event.target.value);
    }
    return (
        <div className='my-3 container'>
            <div className='container p-0 border rounded'>
                <div className=' p-3 text-light' style={{ background: "#007BFF" }}>
                    Qustion # 1
                </div>
                <div className='p-3'>
                    <p>A Citrix Architect needs to define the architect and operational processes required to implement and maintain the production environment.</p>
                    <p>In which phase of the Citrix Methodology will the architect define this?</p>

                    <div className='questions-radio mb-3'>

                        <label className="radio-button">
                       
                            <input
                                type="radio"
                                name="alphabet"
                                value="A"
                                checked={selectedAlphabet === 'A'}
                                onChange={handleAlphabetChange}
                                label="Define"
                            />
                            <span>A</span>
                             Define
                        </label>
                        <label className="radio-button">
                            <input
                                type="radio"
                                name="alphabet"
                                value="B"
                                checked={selectedAlphabet === 'B'}
                                onChange={handleAlphabetChange}
                            />
                            <span>B</span>
                            Deploy
                        </label>
                        <label className="radio-button">
                            <input
                                type="radio"
                                name="alphabet"
                                value="C"
                                checked={selectedAlphabet === 'C'}
                                onChange={handleAlphabetChange}
                            />
                            <span>C</span>
                            Assess
                        </label>
                        <label className="radio-button">
                            <input
                                type="radio"
                                name="alphabet"
                                value="D"
                                checked={selectedAlphabet === 'D'}
                                onChange={handleAlphabetChange}
                            />
                            <span>D</span>
                            Review
                        </label>
                        <label className="radio-button">
                            <input
                                type="radio"
                                name="alphabet"
                                value="E"
                                checked={selectedAlphabet === 'E'}
                                onChange={handleAlphabetChange}
                            />
                            <span>E</span>
                            Manage
                        </label>
                        <label className="radio-button">
                            <input
                                type="radio"
                                name="alphabet"
                                value="F"
                                checked={selectedAlphabet === 'F'}
                                onChange={handleAlphabetChange}
                            />
                            <span>F</span>
                            Design
                        </label>
                    </div>
                    <p>You Selected {selectedAlphabet}</p>
                    <Button variant="primary" >Reveal Solution </Button>{' '}
                    <Button variant="secondary"> <TbMessageCircle2Filled /> Discuss</Button>{' '}
                </div>
            </div>
        </div>
    )
}

export default Qustions