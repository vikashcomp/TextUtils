import React,{useState} from 'react'


export default function TextForm(props) {

    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to upperCase","success")
    }
    const handleLoClick=()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowerCase","success")
    }
    const handleClClick=()=>{
       let newText=""
       setText(newText)
      props.showAlert("cleared text","success")
    }
    const handleCopy=()=>{
      let text=document.getElementById("myBox")
      text.select()
      navigator.clicpboard.writeText(text.value)
      props.showAlert("coped text","success")
    }
    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(""))
      props.showAlert("Extra spaces removed","success")
    }

    // const handleonChange=(e)=>{
    // setText(e.target.value)
    // }
    const[text,setText]=useState("");

  return (
   <> 
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1>

<div className="mb-3">
  
  <textarea className="form-control" value={text} onChange={(e)=>{setText(e.target.value)}} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:'white'}}id="myBox" rows="8"></textarea>

<button type="button" className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>convert to uppercase</button>
<button type="button" className="btn btn-primary mx-2"  onClick={handleLoClick}>convert to lowercase</button>
<button type="button" className="btn btn-primary mx-2" onClick={handleClClick}>Clear text</button>
<button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>copy text</button>
<button type="button" className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>
</div>
</div>
<div className='container my-2'style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary </h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} minutes to read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something to preview here"}</p>
    
</div>
</>
   
  )
}
