
import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }


    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const handleLowClick = () => {
        let lowText = text.toLowerCase();
        setText(lowText)
        props.showAlert("Converted to LowerCase", "success");
    }


    const [text, setText] = useState("");

    const countWords = (str) => {
        if(str === ""){
            return 0;
        }
        const words = str.trim().split(/\s+/);
        return words.length;
    }

    const clearValue = () => {
        setText('');
        props.showAlert("Field Cleared", "success");
    }
    

    return (
        <>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#03012b' }}>
                <h1>{props.heading}</h1>
                <div className="mb-1">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{ backgroundColor: props.mode === 'light' ? 'dark' : 'light', color: props.mode === 'light' ? 'dark' : 'light' }}></textarea>
                </div>
                <button disabled ={text.length===0} className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={handleUpClick} >Convert to Uppercase</button>
                <button disabled ={text.length===0} className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2`} onClick={handleLowClick} >Convert to Lowercase</button>
                <button disabled ={text.length===0} className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={clearValue} >Clear Field</button>
            </div>
            <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : '#03012b' }}>
                <h2>Your Text Summary</h2>
                <p>Your text contains {countWords(text)} words and {text.length} characters. </p>
                <p>Your text contains </p>
                <p>{0.008 * text.split(" ").length} minutes to read this text</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
