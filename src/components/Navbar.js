import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <Link className="navbar-brand mx-2" to="/">{props.title}</Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link acive" aria-current="page" to="/">Home</Link>
                    </li>
                </ul>
                <div className={`form-check form-check-inline text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
                    <input className="form-check-input" onClick={props.toggleModeBlue} type="radio" id="DarkMode1" name="DarkMode" value="option1"/>
                    <label className="form-check-label" htmlFor="DarkMode1">Blue Dark Mode</label>
                </div>
                <div className={`form-check form-check-inline text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
                    <input className="form-check-input " onClick={props.toggleModeGreen} type="radio" id="DarkMode2" name="DarkMode" value="option2"/>
                    <label className="form-check-label" htmlFor="DarkMode2">Green Dark Mode</label>
                </div>
                <div className={`form-check form-check-inline text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
                    <input className="form-check-input" onClick={props.toggleModeRed} type="radio" id="DarkMode3" name="DarkMode" value="option3"/>
                    <label className="form-check-label" htmlFor="DarkMode3">Red Dark Mode</label>
                </div>
                <div className={`form-check form-check-inline text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
                    <input className="form-check-input" onClick={props.toggleModeLight} type="radio" id="DarkMode4" name="DarkMode" value="option4" defaultChecked/>
                    <label className="form-check-label" htmlFor="DarkMode4">Light Mode</label>
                </div>
            </div>
        </nav>
    )
}