import React from 'react'
import './Style.css'
import pic1 from "./image/bkg bad.png"
import pic2 from "./image/instagramclone.png"
import pic3 from "./image/internNOW.jpg"

const Projects = () => {
	return (
		<div>
			<section className="projects" id="Projects">
    <div className="boxi">

        <div className="box-a">
            <div className="a1"><b>My Projects</b></div>
            <div className="a2"><b>—</b><span className="intrLov"><b>My Work</b></span><b>—</b></div>
        </div>

        <div className="box-b">

            <div className="b1">
                <div className="img"><img className="ig" src={pic1} alt="Project1"></img></div>
                <div className="text">Breaking Bad Wiki</div>
                <div className="lorm">
                This minor project is a Wikipedia of
Breaking Bad, one of the most popular
TV Series. It has been prepared using
HTML, CSS, JavaScript and React JS
under Corporate Experience Program
of TwoWaits.
                    <p>Click on the Image to visit</p>
                </div>
            </div>

            <div className="b2b">
                <div className="img"><img className="ig" src={pic2} alt="Project2"></img></div>
                <div className="text">Instagram Clone</div>
                <div className="lorm">
                This semi-major project is a clone web
app of social media application
lnstagram. It has been prepared using
HTML, CSS, JavaScript, React JS,
Mongo DB and APIs under Corporate
Experience Program of TwoWaits.
                    <p>Click on the Image to visit</p>
                </div>
            </div>

            <div className="b3">
                <div className="img"><img className="ig" src={pic3} alt="Project3"></img></div>
                <div className="text">Internship NOW</div>
                <div className="lorm">
                This major project is a professional
platform For connecting recruiters
with potential candidates. It has been
prepared using HTML, CSS, MERN
Stack and APIs under Corporate
Experience Program of TwoWaits.
                    <p>Click on the Image to visit</p>
                </div>
            </div>

        </div>

    </div>
</section>
		</div>
	)
}

export default Projects
