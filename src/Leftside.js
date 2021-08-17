import React from 'react'
import "./Leftside.css"
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';
import { Avatar } from '@material-ui/core';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';


function Leftside() {
    const user = useSelector(selectUser)
    return (
        <div>
            <div className="leftside">
                <div className="leftside__img">
                    <img className="avatar" src={user.photo} alt="" />
                </div>
                <div className="leftside__content">
                    <div className="leftside__basicInfo">
                        <div className="mail">
                        <MailIcon/>
                            <p>{ user.email }</p>
                        </div>
                        <div className="mail">
                            <GitHubIcon />
                            <textarea rows="2" cols="30" className="BasicInfo__link" name="text" placeholder="github link....."/>
                        </div>
                        <div className="mail">
                        <PhoneIcon/>
                        <input className="BasicInfo__link" type="number" placeholder="Number.." />
                        </div>
                         
                    </div>
                    <div className="leftside__skills">
                        <h4>Skills</h4>
                        <div className="skill__language">
                            <h5>Programming language</h5>
                            <textarea rows="3" cols="25" className="skill" name="text" placeholder="Programming languages"/>

                            <h5>Softwares</h5>
                            <textarea rows="3" cols="25" className="skill" name="text" placeholder="Softwares.."/>

                            <h5>Designs</h5>
                            <textarea rows="3" cols="25" className="skill" name="text" placeholder="design.."/>
                        </div>
                    </div>
                    <div className="leftside__language">
                        <h4>Language</h4>
                        <div className="language">
                            <h5>Professional</h5>
                            <p>English</p>

                            <h5>Native</h5>
                            <input className="language__native" type="text" placeholder="native.." />

                           </div>
                    </div>

                </div>
               


            </div>
            
        </div>
    )
}

export default Leftside
