import React, { useState } from 'react'

export default function Textform(props) {
    const [text, settext] = useState(" ");
    const [textcolor, setcolor] = useState("black");
    // const [mode, setmode] = useState("Enable Dark Mode");
    // const [theme, settheme] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });

    const handleonchange = (event) => {
        console.log("on change")
        settext(event.target.value);
    }

    const handleupclick = () => {
        console.log("uppercase was clicked");
        let uppertext = text.toUpperCase();
        settext(uppertext);
    }

    const handlelowerclick = () => {
        let lowertext = text.toLowerCase();
        settext(lowertext);
    }

    const removespaces = () => {
        settext(text.trim().split(/[\s,\t,\n]+/).join(' ')); // split converts into array and the join 
    }

    const colortoggle = () => {
        let userInput = prompt("Enter the color do u want");
        let changecolor = textcolor === 'black' ? userInput : "black";
        setcolor(changecolor);

    }

    const cleartext = () => {
        settext(text.replace(text, ""));
    }

    const copytoclip = () => {
        debugger;
        let text = document.getElementById('exampleFormControlTextarea1');
        text.select(); // this is for giving the outline to the textbox
        navigator.clipboard.writeText(text.value);
    }

    // const toggletheme = () => {
    //     if (theme.color === 'black') {
    //         settheme({
    //             color: 'white',
    //             backgroundColor: '#05122D'
    //         })
    //         setmode("Enable Light Mode");
    //     }
    //     else {
    //         settheme({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setmode("Enable Dark Mode");
    //     }
    // }
    return (
        <>
            <div className='container'>
                <h3 className='my-3'>{props.headingtext}</h3>
                <div className="mb-3">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleonchange} style={{ color: textcolor }}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleupclick}>Convert to Uppercase</button>
                <button className="btn btn-secondary mx-2 my-2" onClick={handlelowerclick}>Convert to Lowercase</button>
                <button className="btn btn-success my-2" onClick={removespaces}>Remove all white spaces</button>
                {/* <button className="btn btn-danger mx-2" onClick={charactercounter}>Count the string characters</button> */}
                <button className="btn btn-dark mx-2 my-2" onClick={colortoggle}>Change the color theme</button>
                <button className="btn btn-danger my-2" onClick={cleartext}>Clear the text</button>
                <button className="btn btn-info mx-2 my-2" onClick={copytoclip}>Copy to clipboard</button>
                {/* <button className="btn btn-dark my-2" onClick={toggletheme}>{mode}</button> */}
            </div>

            <div className="container">
                <h2>Your words counter</h2>
                <p><b>{text.trim() === '' ? 0 : text.match(/\S+/g).length}</b> words  <b>{text.replace(/\s+/g, '').length}</b> characters
                </p>
                <p><b>{0.008 * text.split(" ").length}</b> time to read</p>
            </div>
        </>
    )
}
