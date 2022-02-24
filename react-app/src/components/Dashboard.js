import React from "react";
import wisdom from "./images/wisdom.JPG";
import "./App.css";
import { Card, Button, Container } from "react-bootstrap";
import { FaPaperPlane } from "@react-icons/all-files/fa/FaPaperPlane";
import { FaThumbtack } from "@react-icons/all-files/fa/FaThumbtack";
import { BiCalendar } from "@react-icons/all-files/bi/BiCalendar";
import { AiOutlineClockCircle } from "@react-icons/all-files/ai/AiOutlineClockCircle";
import { FaThumbsUp } from "@react-icons/all-files/fa/FaThumbsUp";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

export default function Dashboard() {
  const reports = () => {
    window.open("https://agency.octoboard.com/board/7RMJoSksHv8SJ3d8P");
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menubackgroud: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();
  return (
    <div style={{ backgroundColor: "white", height: "100vh" }}>
      <>
        <AppBar position="static" className={classes.menubackgroud}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Welcome to Social Media Handler
            </Typography>

            <div>
              <Link to="/">
                <Button> Logout</Button>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
        <div className="d-flex flex-row">
          {" "}
          <img src={wisdom} height="70px" className="imageContainer" />
          <h2 style={{ color: "black", marginTop: "20px" }}>
            {" "}
            Welcome to Wisdom Social Media Auto-Slate
          </h2>
        </div>
        <div className="d-flex flex-row title">
          <div className="d-flex flex-column " style={{ marginLeft: "10px" }}>
            <Button className="buttonDash">Home Page</Button>
            <Link to="/calendar">
            <Button className="buttonDash">Publishing</Button>
            </Link>
            
            
            <Link to="/notes/main">
              <Button className="buttonDash">Notes</Button>
            </Link>
            <Link to="/content-library">
              <Button className="buttonDash">Content Library</Button>
            </Link>
            <Button className="buttonDash" onClick={reports}>
              {" "}
              Report & Dashboard
            </Button>
            <Link to="/">
              <Button className="buttonDash"> Log out</Button>
            </Link>
          </div>

          <Container className="d-flex flex-column ">
            <Card style={{ height: "15rem", width: "50rem" }}>
              <h5 className="text-center">Todays Publishing</h5>
              <div className="d-flex flex-row ">
                <Card
                  style={{ height: "9rem", width: "14rem", margin: "20px" }}
                >
                  <h4 style={{ textAlign: "center" }}>Scheduled Post</h4>
                  <BiCalendar
                    style={{
                      height: "65px",
                      width: "50px",
                      marginLeft: "83px",
                    }}
                  />
                  <Link to="/calendar">
                    <Button className="cardButton">View Calender</Button>
                  </Link>
                </Card>
                <Card
                  style={{ height: "9rem", width: "14rem", margin: "20px" }}
                >
                  <h4 style={{ textAlign: "center" }}>Queued Post</h4>
                  <h1 style={{ textAlign: "center" }}>Q</h1>
                  <Button className="cardButton" style={{ marginTop: "12px" }}>
                    Queued Posts
                  </Button>
                </Card>
                <Card
                  style={{ height: "9rem", width: "14rem", margin: "20px" }}
                >
                  <h4 style={{ textAlign: "center" }}>Calender</h4>
                  <FaPaperPlane
                    style={{
                      height: "60px",
                      width: "50px",
                      marginLeft: "83px",
                    }}
                  />

                  <Link to="/calendar">
                    <Button className="cardButton">View Calender</Button>
                  </Link>
                </Card>
              </div>
            </Card>
            <Card style={{ height: "15rem", width: "50rem", marginTop: "5px" }}>
              <h5 className="text-center"> Task List</h5>
              <div className="d-flex flex-row ">
                <Card
                  style={{ height: "9rem", width: "14rem", margin: "20px" }}
                >
                  <h4 style={{ textAlign: "center" }}>Open Tasks</h4>
                  <FaThumbtack
                    style={{
                      height: "60px",
                      width: "50px",
                      marginLeft: "83px",
                    }}
                  />
                  <Link to="/notes/main">
                    <Button className="cardButton">Tasks</Button>
                  </Link>
                </Card>
                <Card
                  style={{ height: "9rem", width: "14rem", margin: "20px" }}
                >
                  <h4 style={{ textAlign: "center" }}>Pending Approvals</h4>
                  <AiOutlineClockCircle
                    style={{
                      height: "60px",
                      width: "50px",
                      marginLeft: "83px",
                    }}
                  />
                  <Button className="cardButton">Pending Approvals</Button>
                </Card>
                <Card
                  style={{ height: "9rem", width: "14rem", margin: "20px" }}
                >
                  <h4 style={{ textAlign: "center" }}>Approved Tasks</h4>
                  <FaThumbsUp
                    style={{
                      height: "60px",
                      width: "50px",
                      marginLeft: "83px",
                    }}
                  />
                  <Button className="cardButton">Approved Tasks</Button>
                </Card>
              </div>
            </Card>
          </Container>
          <div className="d-flex flex-column " style={{ marginRight: "10px" }}>
            <Link to="/CreatePosts/mainpost">
              {" "}
              <Button className="buttonDash">Compose</Button>
            </Link>
            <Button className="buttonDash">Notifications</Button>
            <Link to="/ConnectProfile">
              <Button className="buttonDash">Connect a Profile</Button>
            </Link>
            <Link to="/Userguide"><Button className="buttonDash">User guide</Button></Link>
            
            <Link to="/help">
              <Button className="buttonDash">Help</Button>
            </Link>
          </div>
        </div>
      </>
    </div>
  );
}
