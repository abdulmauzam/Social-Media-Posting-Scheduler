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
import { FaFilePdf } from "react-icons/fa";

export default function ContentLibrary() {
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
            <Link to="/dashboard">
              <Button className="buttonDash">Home Page</Button>
            </Link>
            <Button className="buttonDash">Publishing</Button>
            <Button className="buttonDash">Inbox</Button>
            <Link to="/notes/main">
              <Button className="buttonDash">Notes</Button>
            </Link>
            <Button className="buttonDash">Content Library</Button>
            <Button className="buttonDash"> Report & Dashboard</Button>
            <Link to="/">
              <Button className="buttonDash"> Log out</Button>
            </Link>
          </div>

          <Container className="d-flex flex-column ">
            <Card style={{ height: "100%", width: "50rem" }}>
              <h5 className="text-center">Content Library</h5>
              <div className="d-flex flex-row ">
                <Card
                  style={{ height: "9rem", width: "14rem", margin: "20px" }}
                >
                  <h4 style={{ textAlign: "center" }}>About Us</h4>
                  <FaFilePdf
                    style={{
                      height: "60px",
                      width: "50px",
                      marginLeft: "83px",
                    }}
                  />
                  <Link to="/about-us" target="_blank">
                    <Button className="cardButton">Preview</Button>
                  </Link>
                </Card>
                <Card
                  style={{ height: "9rem", width: "14rem", margin: "20px" }}
                >
                  <h4 style={{ textAlign: "center" }}>Achievements </h4>
                  <FaFilePdf
                    style={{
                      height: "60px",
                      width: "50px",
                      marginLeft: "83px",
                    }}
                  />
                  <Link to="/achievements" target="_blank">
                    <Button className="cardButton">
                    Preview
                    </Button>
                  </Link>
                </Card>
                <Card
                  style={{ height: "9rem", width: "14rem", margin: "20px" }}
                >
                  <h4 style={{ textAlign: "center" }}>Clientele</h4>
                  <FaFilePdf
                    style={{
                      height: "60px",
                      width: "50px",
                      marginLeft: "83px",
                    }}
                  />

                  <Link to="/clientele" target="_blank">
                    <Button className="cardButton">Preview</Button>
                  </Link>
                </Card>
              </div>
              <div className="d-flex flex-row ">
                <Card
                  style={{ height: "9rem", width: "14rem", margin: "20px" }}
                >
                  <h4 style={{ textAlign: "center" }}>ERP solutions</h4>
                  <FaFilePdf
                    style={{
                      height: "60px",
                      width: "50px",
                      marginLeft: "83px",
                    }}
                  />
                  <Link to="/erp" target="_blank">
                    <Button className="cardButton">Preview</Button>
                  </Link>
                </Card>
                <Card
                  style={{ height: "9rem", width: "14rem", margin: "20px" }}
                >
                  <h4 style={{ textAlign: "center" }}>Portfolio</h4>
                  <FaFilePdf
                    style={{
                      height: "60px",
                      width: "50px",
                      marginLeft: "83px",
                    }}
                  />
                  <Link to="/portfolio" target="_blank">
                    <Button className="cardButton">Preview</Button>
                  </Link>
                </Card>
                <Card
                  style={{ height: "9rem", width: "14rem", margin: "20px" }}
                >
                  <h4 style={{ textAlign: "center" }}>Service</h4>
                  <FaFilePdf
                    style={{
                      height: "60px",
                      width: "50px",
                      marginLeft: "83px",
                    }}
                  />
                  <Link to="/service" target="_blank">
                      <Button className="cardButton">Preview</Button>
                    </Link>
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

            <Button className="buttonDash">Help</Button>
          </div>
        </div>
      </>
    </div>
  );
}
