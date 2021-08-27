import React from 'react'
import './Style.css'
import pic from './image/7.webp'
import pdf from "./CV/Abhinandan's Resume (3).pdf"
const About = () => {
	return (
		<div>
			<section className="about" id="About">
    <div className="a">
        <div className="b">
            <div className="c">
                <h1>About Me</h1>
            </div>
            <div className="d">
                <p><b>–</b><span className="e"><b>Know me better</b></span><b>–</b></p>
            </div>
        </div>

        <div className="f">
            <div className="g"><img className="img" src={pic} /></div>
            <div className="h">
                <div className="i"><b>I am Abhinandan and I am a <span className="lernr">Learner</span></b></div>
                <div className="j"> I am Cyber Security Analyst Intern @IndianCyberSecuritySolutions || Cyber Security Researcher @GDSC - LPU || Full Stack Web Development Intern @TwoWaits || Coordinator @BLAZE-LPU || Community Lead, Anchor, CTF Player @N00B_4rMY || B. Tech CSE 24' at @Lovely Professional University || Cyber Security Enthusiast</div>
                <div className="k"><a href={pdf} target="_blank"><button className="btn">Open CV</button></a></div>
            </div>
        </div>
    </div>
</section>
		</div>
	)
}

export default About
