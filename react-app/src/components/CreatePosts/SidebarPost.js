import { Button } from "bootstrap";
import React from "react";
import tanjiro from "../images/tanjiro.jpg";

export default function SidebarPost({
  notes,
  addNote,
  onDeleteDraft,
  activeNote,
  setActiveNote,
}) {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1> Drafts</h1>
        <button onClick={addNote}>Create Draft </button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <img
                className="rounded-circle"
                alt="10x10"
                style={{ height: "3rem", width: "3rem" }}
                src={note.image}
              ></img>
              <button onClick={() => onDeleteDraft(note.id)}>Delete</button>
            </div>
            <p>{note.body && note.body.substr(0, 10) + "..."} </p>
            <p>{note.date}</p>
            <p>{note.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
