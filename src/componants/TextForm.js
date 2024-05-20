import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpChange=()=>{
        let newText=text.toUpperCase()
        settext(newText);
        props.showAlert("Converted to Uppercase","success")
        // alert("click upbtn")
    }
    const handleLoChange=()=>{
        let lowerText=text.toLowerCase()
        settext(lowerText);
        props.showAlert("Converted to Lowercase","success")

        // alert("click upbtn")
    }
    const handleOnChange=(event)=>{
        // alert("click onchange")
        settext(event.target.value);
    }
    const handleClearClick=()=>{
        let newText=" "
        settext(newText);
        props.showAlert("Clear all Text","success")

    }
    const handleCopyClick=()=>{
        var text=document.getElementById("my-box")
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success")

    }
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/);
        settext(newText.join(" "))
        props.showAlert("Clear all Extra Spaces","success")

    }
    // const handlePasteClick=()=>{
    //     let newText=text.split(/[ ]+/);
    //     settext(newText.join(" "))
    // }
    
    const [text,settext]=useState("")
    return (
        <>
        <div className='container' style={{color:props.mode===`light`?`black`:`white`}}>
            <h1>{props.heading}</h1>

            <div className="form-group">
                <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode===`light`?`white`:`#9b9999`,color:props.mode===`light`?`black`:`white`}} id="my-box" rows="10"></textarea>
            </div>

            <button type="submit" className="btn btn-primary mx-1" onClick={handleUpChange}>Convet to Uppercase</button>
            <button type="submit" className="btn btn-primary mx-1" onClick={handleLoChange}>Convet to Uppercase</button>
            <button type="submit" className="btn btn-primary mx-1" onClick={handleClearClick}>Clear all</button>
            <button type="submit" className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
            <button type="submit" className="btn btn-primary mx-1" onClick={handleExtraSpace}>Clear Extra Space</button>
            {/* <button type="submit" className="btn btn-primary mx-1" onClick={handlePasteClick}>paste</button> */}

        </div>
        <div className="container my-3"  style={{color:props.mode===`light`?`black`:`white`}}>
            <h2>Your Text Summery</h2>
            <p>{text.split(" ").length} words and {text.length}characters </p>
            <p>{0.008 * text.split(" ").length} minutes read </p>
            <h2>preview</h2>
            <p>{text}</p>

        </div>
        </>
    )
}
