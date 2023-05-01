import React, { useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import { TbMessageCircle2Filled } from 'react-icons/tb';

function QuestionMultiple() {
    const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

    function handleCheckboxChange(event) {
        const value = event.target.value;
        const isChecked = event.target.checked;
        if (isChecked) {
            setSelectedCheckboxes([...selectedCheckboxes, value]);
        } else {
            setSelectedCheckboxes(selectedCheckboxes.filter(item => item !== value));
        }
    }
    return (
        <div className='my-3 container'>
            <div className='container p-0 border rounded questions-multiple-checkbox questions-radio'>

                <div className=' p-3 text-light' style={{ background: "#007BFF" }}>
                    Qustion # 1 with Multiple Options
                </div>
                <div className='p-3'>
                    <p>A Citrix Architect needs to define the architect and operational processes required to implement and maintain the production environment.</p>
                    <p>In which phase of the Citrix Methodology will the architect define this?</p>
                    <label className='checkbox-container'>
                        <input
                            type="checkbox"
                            name="fruit"
                            value="A"
                            checked={selectedCheckboxes.includes('A')}
                            onChange={handleCheckboxChange}
                        />
                        <span className="checkmark">A</span>
                        <span>Split Tunnel to OFF, Split DNS Both</span>

                    </label>
                    <br />
                    <label className='checkbox-container'>
                        <input
                            type="checkbox"
                            name="fruit"
                            value="B"
                            checked={selectedCheckboxes.includes('B')}
                            onChange={handleCheckboxChange}
                        />
                        <span className="checkmark">B</span>
                        <span>Split Tunnel to ON, Split DNS Local</span>

                    </label>
                    <br />
                    <label className='checkbox-container'>
                        <input
                            type="checkbox"
                            name="fruit"
                            value="C"
                            checked={selectedCheckboxes.includes('C')}
                            onChange={handleCheckboxChange}
                        />
                        <span className="checkmark">C</span>
                        <span>Split Tunnel to OFF, Split DNS Remote</span>
                    </label>
                    <br />
                    <label className='checkbox-container'>
                        <input
                            type="checkbox"
                            name="fruit"
                            value="D"
                            checked={selectedCheckboxes.includes('D')}
                            onChange={handleCheckboxChange}
                        />
                        <span className="checkmark">D</span>
                        <span>Split Tunnel to ON, Split DNS Remote</span>
                    </label>

                    <p>You have selected: {selectedCheckboxes.join(', ')}</p>
                    <Button variant="primary" >Reveal Solution </Button>{' '}
                    <Button variant="secondary"> <TbMessageCircle2Filled /> Discuss</Button>{' '}
                </div>
            </div>
        </div>
    )
}

export default QuestionMultiple