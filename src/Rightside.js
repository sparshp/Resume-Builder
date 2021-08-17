import React from 'react'
import { useSelector } from 'react-redux';
import Education from './Education';
import Education2 from './Education2';
import Experience from './Experience';
import Experience2 from './Experience2';
import { selectUser } from './features/userSlice';
import Projects from './Projects';
import Projects2 from './Projects2';
import "./Rightside.css";

function Rightside() {
    const user = useSelector(selectUser)

    const [showResults, setShowResults] = React.useState(false)

  const onClick = () => setShowResults(!showResults)


    return (
        <div>
            <div className="rightside">
                <div className="rightside__content">
                    {/* Header*/}
                    <div className="rightside__header">
                        <h2>{ user.displayName }</h2>
                        <input className="header__sub" type="text" placeholder="Web developer.." />
                    </div>
                    <input className="exp__btn" type="submit" value="Add" onClick={onClick} />
                   
                    
                    {/* Experience*/}
                    <Experience />
                    {/* Projects*/}

                    {/* Education*/}
                </div>
                { showResults ? 
    
                    <div id="results" className="search-results">
            
                    <Experience2 />
            
                    </div>
            
                    : null}
                <Education />
                <Education2/>
                <Projects />
                <Projects2 />
            </div>
            
        </div>
    )
}

export default Rightside
