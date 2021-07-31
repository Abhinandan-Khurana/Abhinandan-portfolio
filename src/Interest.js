import React from 'react'
import './Style.css'

const Interest = () => {
	return (
		<div>
			<section className="intrests" id="Interests">
    <div className="box">

        <div className="box-a">
            <div className="a1"><b>My Interests</b></div>
            <div className="a2"><b>—</b><span className="intrLov"><b>Things I Love</b></span><b>—</b></div>
        </div>

        <div className="box-b">

            <div className="b1">
                <div className="i1"><i className="fas fa-globe"></i></div>
                <div className="text">Web Designing</div>
                <div className="lorm">I love designing websites and
upgrading myself by learning new
skills and implementing them.</div>
            </div>

            <div className="b2">
                <div className="i2"><i className="fas fa-hat-wizard"></i></div>
                <div className="text">Hacking</div>
                <div className="lorm">I have a hunch for Problem Solving
and hence, in my free time I prefer
solving questions on various
Cyber Security (hacking) platforms.</div>
            </div>

            <div className="b3">
                <div className="i3"><i className="fas fa-futbol"></i></div>
                <div className="text">Sports</div>
                <div className="lorm">Sports are an eternal part of my
life and they keep my mind active
and my body physically fit.</div>
            </div>

        </div>

    </div>
</section>
		</div>
	)
}

export default Interest
