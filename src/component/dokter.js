import axios from "axios";
import React, { useEffect } from "react";
import NavigationBar from "./NavigationBar"
import { Card, Button, Col, Row } from "react-bootstrap";
import icon from "../assets/iconLandingPage.png"
import "../style/landingPage.css"

const BASE_URL = "https://jazzy-dango-17b14f.netlify.app/.netlify/functions/api/form"



const Dokter = () => {
    const [post, setpost] = React.useState([]);
    
    useEffect(()=>{
        axios.get(BASE_URL).then((ress)=>{
            setpost(ress.data)
            console.log(ress.data)
        });
    },[]);
    

    if (!post) return null
    return(
        <>
            <NavigationBar/>
            <div>
                <Row style={{width:'95vw'}}>
                    <Col md={6} className="ms-5 mt-3 d-flex flex-column">
                        <div>
                            <h2>Ambil test kesehatan mental</h2>
                            <p style={{fontStyle:'italic'}}>periksa instan, hasil kilat</p>
                        </div>
                    </Col>
                </Row>
                <Row xl={4} lg={2}  style={{width:'95vw'}}>
                    {post.map((form)=>{
                        {console.log(post)}
                        return(
                            <Col>
                                <Card className="box-shadow ms-5 mt-3">
                                <Card.Img src={form.photoForm} style={{height:'250px', width:'auto'}}/>
                                <Card.Body>
                                    <Card.Title>{form.judulForm}</Card.Title>
                                    {/* <Card.Subtitle>let you know if you had a trauma</Card.Subtitle> */}
                                    <Card.Text style={{lineHeight:'2'}}>{form.descForm}</Card.Text>
                                    <Button variant="success" href={form.linkForm}>klik untuk mengambil test</Button>
                                </Card.Body>
                                </Card>
                            </Col> 
                         )
                    })}
                </Row>
            </div>
            
        </>
        
    );
}
export default Dokter