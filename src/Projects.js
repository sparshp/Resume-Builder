import React from 'react'

function Projects() {
    return (
        <div>
        <div className="rightside__experience">
        <h4>Projects</h4>
        <div className="experience__item">
            <div className="experience__itemBox">
                <div className="experience__content2">
                            <h5>Group Projects</h5>
                            <div className="project__time">
                                <input className="experience__date" type="month" />to
                                <input className="experience__date" type="month" />
                            </div>
                 <textarea rows="4" cols="60" className="project__details" name="text" placeholder="Projects Name"/>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Projects
