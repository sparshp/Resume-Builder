import React from 'react'

function Experience2() {
    return (
        <div className="rightside__experience">
        <div className="experience__item2">
            <div className="experience__itemBox">
                <div className="itemBox__year">
                    <input className="experience__date" type="month"/>
                    <input className="experience__date" type="month"/>
                    <p>year</p>
                </div>
                <div className="experience__content">
                <input className="experience__possition" type="text" placeholder="Possition" />
                <input className="experience__company" type="text" placeholder="Conpany Name" />
                 <textarea rows="3" cols="50" className="experience__details" name="text" placeholder="details"/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Experience2
