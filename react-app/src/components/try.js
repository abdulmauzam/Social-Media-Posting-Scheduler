import React,{useRef, useState} from 'react'
import axios from "axios";
export default function Try() {

    const [name,setName]=useState("")
    const [image,setImageUrl]=useState("")
    const [date,setDate]=useState("")
  
  const sent = async() => {
    
    axios.post("http://localhost:3001/api/insert",{
      text:name,
      imageUrl:image,
      date:date,
    }).then("inserted in db successfully")
   
  };
    return (
        <div>
        <textarea
        id="body"
       
        placeholder="write Your description here"
       onChange={(e)=>setName(e.target.value)}
      ></textarea>
      <input
        type="text"
        placeholder="Enter Image Address or URL"
        onChange={(e)=>setImageUrl(e.target.value)}
      ></input>
      <input
      type="text"
      placeholder="Enter Image Address or URL"
      onChange={(e)=>setDate(e.target.value)}
     
    ></input>
      <button onClick={sent}>add to database </button>
        </div>
    )
}

