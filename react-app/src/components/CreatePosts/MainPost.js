import React, { useState,useRef,useEffect } from "react";
import axios from "axios";
import wisdom from "./../images/wisdom.JPG";
import placeholder from "./../images/placeholder.jpg";
import "./../App.css";
import "./apps.css";
import { Col ,Card, Button, Container , Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

import TextField from '@material-ui/core/TextField';
import Select from 'react-select';

const options = [
  { value: '1', label: 'WisTech Work Culture' },
  { value: '2', label: 'WisTech Logo Design and Branding	' },
  { value: '3', label: 'WisTech Marketing Solutions	' },
];


const useStyles_date = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function MainPost() {
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
  const [commentText,setCommentText] = useState('');
  const [status, setStatus] = useState(1); // 0: no show, 1: show yes, 2: show no.
  const [facebookchecked, setfacebookChecked] = useState(false);
  const [instagramchecked, setinstagramChecked] = useState(false);
  const [linkedinchecked, setlinkedinChecked] = useState(false);
  const [dbPosts,setDbPosts]=useState([])
  const textinput=useRef();
  const imageinput=useRef();
  const dateinput=useRef();
  const [name,setName]=useState("")
    const [image,setImageUrl]=useState("")
    const [date,setDate]=useState("")
    useEffect(()=>{
      axios.get("http://localhost:3001/api/get").then((response)=>{
        
        setDbPosts(response.data)
        
      })
    },[])
  const radioHandler = (status) => {
    setStatus(status);
  };
  const checkboxfacebookHandler = (status) => {
    setfacebookChecked(status);
  };
  const checkboxinstagramHandler = (status) => {
    setinstagramChecked(status);
  };
  const checkboxlinkedinHandler = (status) => {
    setlinkedinChecked(status);
  };
  const onIconClickImage = () => {
    const input = document.getElementById('file-input-image');

    if (input) {
       input.click();
    }
  };
  const onIconClickVideo = () => {
    const input = document.getElementById('file-input-video');

    if (input) {
       input.click();
    }
  };
  const classes = useStyles();
  const classes_date = useStyles_date();
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [input_datetime, setDateTime] = useState({
    input_date:[],
    input_time:[]
  });
  const [inputs_date,setInputDate] = useState({});
  const [inputs_time,setInputTime] = useState({});
  const [file, setFile] = React.useState(null);
  const [file_type, setFileType] = React.useState(null);
    
  const fileHandler = (e) => {
    setFileType(e.target.files[0].type)
    setFile(e.target.files[0])
    console.log(e.target.files)
    let localimage=URL.createObjectURL(e.target.files[0])
    setImageUrl(localimage)
  }
  let source_file;
  if (file_type == "image/jpg"|| file_type == "image/jpeg" || file_type == "image/png" || file_type == "image/gif") {
    source_file = <img 
                    src={image} 
                   
                    
                    ref={imageinput}
                  />;
                  
  } else if (file_type == "video/m4v"|| file_type == "video/avi" || file_type == "video/wmv" || file_type == "video/ts" || file_type == "video/mp4"){
    source_file = <video style={{width: "235px",height: "180px"}} controls>
                    <source src={file? URL.createObjectURL(file) : null} />
                  </video>;
  }
  
  async function handleSubmit(e) {
    e.preventDefault();
  }
  const importData=(post)=>{
      setImageUrl(post.imageUrl);
      setName(post.text)
      console.log(post.text)
      console.log(post.imageUrl)
  }

  const imagePreview=()=>
  {
    setFile(imageinput.current.value)
  }
  const sent = async() => {
    
    
   axios.post("http://localhost:3001/api/insert",{
      text:name,
      imageUrl:image,
      date:date,
    }).then("inserted in db successfully")
    console.log(image)
   
  };
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
    
          <Container className="d-flex flex-column " >
            <Card style={{ height: "100%", width: "53rem" ,padding: "10px"}}>
              <div className="d-flex flex-row " style={{marginTop: "10px"}}>
                   <Col xs={8}>
                    <Form onSubmit={handleSubmit}>
                      <div className="d-flex flex-row " style={{marginTop: "10px" , padding:" 10px",border: "1px solid #000"}}>
                          <Col xs={7}>
                              <h5 className="text-left">Todays Publishing</h5>
                          </Col>
                          <Col xs={5}>
                              <div className="float-right">
                                <div className="form-check form-check-inline">
                                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="facebook" onChange={(e) => checkboxfacebookHandler(!facebookchecked)}/>
                                  <label className="form-check-label" for="inlineCheckbox1"><FaFacebookSquare size={28} color="black"/></label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="instagram" onChange={(e) => checkboxinstagramHandler(!instagramchecked)}/>
                                  <label className="form-check-label" for="inlineCheckbox2"><FaInstagram size={28} color="black"/></label>
                                </div>
                                <div className="form-check form-check-inline">
                                  <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="linkedin" onChange={(e) => checkboxlinkedinHandler(!linkedinchecked)}/>
                                  <label className="form-check-label" for="inlineCheckbox3"><FaLinkedin size={28} color="black"/></label>
                                </div>
                              </div>
                          </Col>
                          
                      </div>
                      <div className="d-flex flex-column " style={{marginTop: "10px",padding:" 10px",border: "1px solid #000"}}>
                          <Col xs={12}>                          
                              <div className="d-flex flex-row " style={{marginTop: "10px"}}>
                                <Col xs={6}>
                                <div style={{border:"1px solid #000",height: "200px",width: "260px"}}>
                                   
                                {file ? (
                                    <>
                                    
                                    {source_file}
                                    </>
                                    ) : <img src={image? image:placeholder} width="235px" height="180px" className="imageContainer" />
                                    }
                                </div>
                                <input type="file"  id="file-input-image" onChange={fileHandler}  style={{display:"none"}} accept="image/*"/>
                                <input type="file"  id="file-input-video" onChange={fileHandler}  style={{display:"none"}} accept="video/*"/>
                                </Col>
                                <Col xs={6}>
                                <textarea
                                  style={{ height: "200px"}}
                                    id="body"
                                    className="form-control"
                                    col="6"
                                    row="6"
                                    value={name}
                                    onChange={(e) => {setName(e.target.value)}}
                                    placeholder="write Your description here..."
                                    
                                  />
                                </Col>
                              </div>
                          </Col>
                          <Col xs={12}>
                            <div className="form-check form-check-inline float-right">
                              <div className="switch">
                                <input id="switch-1" type="checkbox" className="switch-input" />
                                <label for="switch-1" className="switch-label">This is a Draft</label>
                              </div>
                              <label className="form-check-label" for="inlineCheckbox3">This is a Draft </label>
                              </div>
                          </Col>
                          <Col xs={12}>
                              <div className="d-flex flex-row " style={{marginTop: "10px",padding:" 10px",border: "1px solid #000"}}>
                                <Col xs={4}>
                                <Button style={{marginRight:"10px",padding:"0px",backgroundColor: "transparent",border: "unset", width: "34px",boxShadow: "unset"}}  onClick={onIconClickImage}><FaCamera size={28} color="black"/></Button>
                                <Button style={{backgroundColor: "transparent",padding:"0px",border: "unset", width: "34px",boxShadow: "unset"}} onClick={onIconClickVideo}><FaPhotoVideo size={28} color="black"/></Button>
                                </Col>
                                <Col xs={8}>
                                  <div className="float-right">
                                      <Button style={{backgroundColor: "transparent",padding:"0px",border: "unset",marginRight:"5px", width: "34px",boxShadow: "unset"}}><FaPlusCircle size={28} color="black"/></Button>
                                      <div style={{width:"290px",display:"inline-block"}}>
                                      <Select
                                            placeholder="Import Post from Bucket"
                                            defaultValue={selectedOption}
                                            onChange={setSelectedOption}
                                            options={options}
                                          />
                                        </div>
                                    </div>
                                </Col>
                              </div>
                          </Col>
                          <Col xs={12}>
                            <div style={{marginBottom:"10px"}}>
                              <Col>
                              <div className="wrapper">
                                <input type="radio" name="date" id="specific_date" checked={status === 1}  onClick={(e) => radioHandler(1)} />
                                <input type="radio" name="date" id="multiple_date" checked={status === 2} onClick={(e) => radioHandler(2)} />
                                  <label for="specific_date" className="option specific_date">
                                      <span>Specific Date</span>
                                      </label>
                                  <label for="multiple_date" className="option multiple_date">
                                      <span>Select Multiple Dates</span>
                                  </label>
                                </div>
                              </Col>
                                {status == 1 ? (
                                  <>
                                    <TextField
                                      key="field1"
                                      id="date"
                                      label="Schedule Date"
                                      type="date"
                                      onChange={(e)=>{setDate(e.target.value)}}
                                      value={inputs_date.field1}
                                      name="field1"
                                      defaultValue="2021-05-24"
                                      className={classes_date.textField}
                                      InputLabelProps={{
                                        shrink: true,
                                      }}
                                      ref={dateinput}
                                      
                                    />
                                    <TextField
                                      id="time"
                                      label="Schedule Time"
                                      type="time"
                                      onChange={({target}) => setInputTime(state => ({...state,field1:target.value}))}
                                      value={inputs_time.field1}
                                      name="field1"
                                      defaultValue="07:30"
                                      className={classes_date.textField}
                                      InputLabelProps={{
                                        shrink: true,
                                      }}
                                      inputProps={{
                                        step: 300, // 5 min
                                      }}
                                    />
                                  </>
                                ) : null}
                                                            
                                {status == 2 ? (
                                    <>
                                          <div style={{marginTop:"10px"}}>
                                            <TextField
                                              id="date"
                                              label="Schedule Date"
                                              type="date"
                                              onChange={({target}) => setInputDate(state => ({...state,field1:target.value}))}
                                              value={inputs_date.field1}
                                              name="field1"
                                              defaultValue="2021-05-24"
                                              className={classes_date.textField}
                                              InputLabelProps={{
                                                shrink: true,
                                              }}
                                            />
                                            <TextField
                                              id="time"
                                              label="Schedule Time"
                                              type="time"
                                              onChange={({target}) => setInputTime(state => ({...state,field1:target.value}))}
                                              value={inputs_time.field1}
                                              name="field1"
                                              defaultValue="07:30"
                                              className={classes_date.textField}
                                              InputLabelProps={{
                                                shrink: true,
                                              }}
                                              inputProps={{
                                                step: 300, // 5 min
                                              }}
                                            />
                                            </div>
                                            <div style={{marginTop:"10px"}}>
                                            <TextField
                                              id="date"
                                              label="Schedule Date"
                                              type="date"
                                              onChange={({target}) => setInputDate(state => ({...state,field2:target.value}))}
                                              value={inputs_date.field2}
                                              name="field2"
                                              defaultValue="2021-05-24"
                                              className={classes_date.textField}
                                              InputLabelProps={{
                                                shrink: true,
                                              }}
                                            />
                                            <TextField
                                              id="time"
                                              label="Schedule Time"
                                              type="time"
                                              onChange={({target}) => setInputTime(state => ({...state,field2:target.value}))}
                                              value={inputs_time.field2}
                                              name="field2"
                                              defaultValue="07:30"
                                              className={classes_date.textField}
                                              InputLabelProps={{
                                                shrink: true,
                                              }}
                                              inputProps={{
                                                step: 300, // 5 min
                                              }}
                                            />
                                            </div>
                                            <div style={{marginTop:"10px"}}>
                                            <TextField
                                              id="date"
                                              label="Schedule Date"
                                              type="date"
                                              onChange={({target}) => setInputDate(state => ({...state,field3:target.value}))}
                                              value={inputs_date.field3}
                                              name="field3"
                                              defaultValue="2021-05-24"
                                              className={classes_date.textField}
                                              InputLabelProps={{
                                                shrink: true,
                                              }}
                                            />
                                            <TextField
                                              id="time"
                                              label="Schedule Time"
                                              type="time"
                                              onChange={({target}) => setInputTime(state => ({...state,field3:target.value}))}
                                              value={inputs_time.field3}
                                              name="field3"
                                              defaultValue="07:30"
                                              className={classes_date.textField}
                                              InputLabelProps={{
                                                shrink: true,
                                              }}
                                              inputProps={{
                                                step: 300, // 5 min
                                              }}
                                            />
                                            </div>
                                        </>                

                                ) : null}
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                  <Button
                                    disabled={loading}
                                    className="w-25 "
                                    type="submit"
                                    onClick={sent}
                                  >
                                    {" "}
                                    Schedule
                                  </Button>
                                </div>
                            </Col>
                     </div>
                   </Form>
                   </Col>
                   <Col xs={4}>
                      <div className="d-flex flex-column " style={{marginTop: "10px",marginLeft: "10px",border: "1px solid #000", padding: "10px"}}>
                          <Col xs={12}>
                              <h5 className="text-left">Network Preview</h5>
                          </Col>
                          <Col xs={12} >
                              <div className="title_div_social_media">
                                <p className="div_title">Facebook Preview</p>
                                  {facebookchecked ? (
                                    <div>
                                    <div style={{padding:"10px"}}>
                                      
                                        <>
                                        <img src={image} style={{width: "235px",height: "180px"}}></img>
                                        </>
                                     </div>
                                      
                                      <p>{commentText}</p>
                                    </div>
                                    ) : null }
                              </div>
                          </Col>
                          <Col xs={12}>
                              <div className="title_div_social_media">
                                <p className="div_title">Instagram Preview</p>
                                {instagramchecked ? (
                                    <div style={{padding:"10px"}}>
                                      
                                        <>
                                        <img src={image} style={{width: "235px",height: "180px"}}></img>
                                        </>
                                      
                                      <p>{commentText}</p>
                                    </div>
                                    ) : null }
                              </div>
                          </Col>
                          <Col xs={12}> 
                              <div className="title_div_social_media">
                                <p className="div_title">LinkedIn Preview</p>
                                {linkedinchecked ? (
                                    <div style={{padding:"10px"}}>
                                      
                                          <>
                                          <img src={image} style={{width: "235px",height: "180px"}}></img>
                                          </>
                                        
                                      <p>{commentText}</p>
                                    </div>
                                    ) : null }
                              </div>
                          </Col>
                      </div>
                   </Col>
                
              </div>
            </Card>
          </Container>
          <Container>
          <Card style={{ height: "35rem", width: "24rem" ,padding: "10px",overflow:"scroll"}}>
          
         
         {dbPosts.map((post)=>{
            return <ul> <Card style={{height:"400px",padding:"5px"}}>
         
            <div className="d-flex flex-column">
            <img style={{height:"150px",width:"23vw"}} src={post.imageUrl}></img>
            <p style={{height:"180px",overflow:"scroll"}}>{post.text}</p>
            <Button className="button" style={{alignSelf:"center"}} onClick={()=>importData(post)}> Import </Button>
            </div>
            </Card>
           </ul> 
             
             
         })}
         </Card>
          </Container>
          
        </div>
    </>
  </div>
  );
}
