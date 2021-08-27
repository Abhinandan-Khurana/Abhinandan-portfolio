import React from 'react'
import './Style.css'

const Skills = () => {
	return (
		<div>
			<section className="skills" id="Skills">
    <div>

        <div className="hdd">
            <div className="skl"><b>My Skills</b></div>
            <div className="Myler"><b>—</b><span className="intrLov"><b>My Learnings</b></span><b>—</b></div>
        </div>

        <div className="hdd2">

            <div className="c1">
                <div className="ara1">
                    <b>My Skills and Self Learnings</b>
                </div>

                <div className="ara2">
                    <p>I have knowledge of Kali Linux and using various hacking tools like Burp-Suite, Wireshark, Nmap/Rustscan, JohnTheRipper, Hashcat, etc. I participate in CTFs and practice labs on a variety of sites, including TryHackMe.com.
On TryHackMe.com, I've been solving problems for over 240 days(daily).
Level on TryHackMe right now: 13 [0xD][GOD] / in TOP 1 % ranking Leaderboard [ 1290* / 616978 ]. 
</p>
                    <p>I have acquired knowledge of Web Development through constantly updating myself with new and improved ways of doing things.</p>
                </div>
            

                <div className="ara3">
                    <a href="https://linkedin.com/in/abhinandan-khurana" target="_blank" rel="noreferrer"><button className="btn2">Go to My
                            LinkedIn</button></a>
                </div>
            </div>

            <div className="c2">
                <label for="1">Kali Linux</label>
                <progress id="1" value="92" max="100"></progress><br />

                <label for="2">Video Editing</label>
                <progress id="2" value="90" max="100"></progress><br />

                <label for="3">Graphic Design</label>
                <progress id="3" value="80" max="100"></progress><br />

                <label for="4">Web Development</label>
                <progress id="4" value="75" max="100"></progress><br />

                <label for="5">Python / C / JAVA</label>
                <progress id="5" value="70" max="100"></progress><br />
                
                <label for="5">Leadership</label>
                <progress id="5" value="90" max="100"></progress><br />
            </div>
        </div>

    </div>
</section>

		</div>
	)
}

export default Skills
