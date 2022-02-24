import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Container, Button } from "react-bootstrap";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import interactionPlugin from "@fullcalendar/interaction";
import Event from "./EventPopup";
import "./App.css";
import { EventSeat, SettingsInputAntenna } from "@material-ui/icons";
import axios from "axios";

export default function Calendar() {
  
  let [events, setEvents] = useState([
    {
      date: "2021-06-16",
      url: "adsfasdfa",
      title: "dsfadsfads",
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:3001/api/get").then((response) => {
      
     
      let temp=response.data;
      for (var i = 0; i < temp.length; i++) {
        temp[i].title = temp[i].text;
        temp[i].url=temp[i].imageUrl;
        delete temp[i].text;
        delete temp[i].imageUrl;
      }
      setEvents(temp);
    });
  }, []);
  const [input,setInp]=useState("");
  const [pop,setPop]=useState(false);
  const [infor,setinfor]=useState({
    title:"",
    start:"",
    url:"",
  });

   useEffect(()=>{
   
    if(infor.title!==""){
      setPop(true);
    }
  },[infor])
  const logdata = () => {
    console.log(events);
  };
  const closePop = ()=>{
    console.log("closed")
    setPop(false);
  }

  function eventClick (info) {
    info.jsEvent.preventDefault(); 
    const { title, start, url} = info.event;
    setinfor((prevState)=> ({
      ...prevState,
      title :title,
      start:start,
      url:url,
      
    }));
    console.log(url)
  }
  console.log(events);
  return (
    <>
    {pop ? <Event infor={infor} closePop={closePop}></Event> : null}
      <Container style={{ maxWidth: "790px" }}>
       
        <FullCalendar
          events={events}
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"

          eventClick={eventClick}
        />
      </Container>
    </>
  );
}
