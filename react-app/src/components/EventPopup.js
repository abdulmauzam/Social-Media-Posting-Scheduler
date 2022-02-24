import React from "react";
import "./App.css";
import { Card ,Button} from "react-bootstrap";

import { Link } from "react-router-dom";
export default function EventPopup({ infor,closePop }) {
  console.log(infor);
  return (
    
  
    <div id="myModal" className="custommodal">
    
      <Card
      className="d-flex flex-column"
        style={{
          height: "80vh",
          width: "25vw",
          marginTop: "60px",
          marginLeft: "33vw",
        }}
      >
      
        <img style={{ height: "50vh", width: "25vw" }} src={infor.url}></img>
        <textarea style={{ height: "50vh", width: "25vw" }}>{infor.title}</textarea>
       <Button className="button" onClick={closePop}> Close</Button>
        
      </Card>
    </div>
  );
}
