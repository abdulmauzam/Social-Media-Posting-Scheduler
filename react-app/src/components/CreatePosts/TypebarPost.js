import React from "react";
import { Container, Button } from "react-bootstrap";
export default function TypebarPost({ activeNote, onUpdateNote }) {
  if (!activeNote) return <div className="no-active-note">No Active Note</div>;

   const sent =()=>{
     console.log(activeNote.image)
   }
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
    });
  };
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          value={activeNote.image}
          onChange={(e) => onEditField("image", e.target.value)}
        ></input>
        <textarea
          id="body"
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
          placeholder="write Your description here"
        ></textarea>
        <div className="d-flex flex-row">
          <div className="d-flex flex-column">
            <input
              type="date"
              onChange={(e) => onEditField("date", e.target.value)}
            />
            <input
              type="time"
              onChange={(e) => onEditField("time", e.target.value)}
            />
          </div>
          <Button style={{height:"50px",marginLeft:"30px", marginTop:"15px"}} onClick={sent}>Send for Approval</Button>
        </div>
      </div>
      <div className="app-main-note-preview">
        <Container style={{ paddingLeft: "25px" }}>
          {" "}
          <img
            id="image"
            className="rounded-circle  "
            alt="10x10"
            style={{ height: "3rem", width: "3rem" }}
            src={activeNote.image}
          ></img>
        </Container>
        <div className="markdown-preview">{activeNote.body}</div>
        <div>{activeNote.date}</div>
        <div>{activeNote.time}</div>
      </div>
    </div>
  );
}
