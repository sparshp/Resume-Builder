import React from 'react'
import "./Experience.css"

function Experience() {
    return (
        <div className="rightside__experience">
                        <h4>Experience</h4>
                        <div className="experience__item">
                            <div className="experience__itemBox">
                                <div className="itemBox__year">
                                    <input className="experience__date" type="month"/>
                                    <input className="experience__date" type="month"/>
                                    <p>year</p>
                                </div>
                                <div className="experience__content">
                                <input className="experience__possition" type="text" placeholder="Possition.." />
                                <input className="experience__company" type="text" placeholder="Conpany Name.." />
                                 <textarea rows="3" cols="50" className="experience__details" name="text" placeholder="detail.."/>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default Experience
