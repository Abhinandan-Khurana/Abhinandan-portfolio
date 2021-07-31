import React from 'react'
import './Style.css'
const Footer = () => {
	return (
		<div>
			<footer className="footer">
    <span>
        <div className="social">
            <a href="https://twitter.com/Abhinandan_OO7" target="_blank" rel="noreferrer"><i className="fab fa-twitter"
                    aria-hidden="true"></i></a>
            <a href="https://instagram.com/abhinandan_khurana_007" target="_blank" rel="noreferrer"><i className="fab fa-instagram"
                    aria-hidden="true"></i></a>
            <a href="https://linkedin.com/in/abhinandan-khurana" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"
                    aria-hidden="true"></i></a>
            <a href="https://github.com/abhinandan-khurana" target="_blank" rel="noreferrer"><i className="fab fa-github"
                    aria-hidden="true"></i></a>
        </div>
    </span>
    <span className="crtby">Created By <a className="last" >Abhinandan Khurana</a></span>
</footer>
		</div>
	)
}

export default Footer
