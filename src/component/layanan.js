import axios from "axios";
import React, { useEffect, useState } from "react";
import NavigationBar from "./NavigationBar"
import { Card, Button,ButtonGroup, Col, Row, Dropdown } from "react-bootstrap";
import icon from "../assets/iconLandingPage.png"
import "../style/landingPage.css"
import { Link } from "react-router-dom";

const BASE_URL = "https://jazzy-dango-17b14f.netlify.app/.netlify/functions/api/dokter"


const Layanan = () => {
    const [post, setpost] = React.useState([]);
    const [selectedItem, setSelectedItem] = useState('Pilih Layanan')

    const handleLayanan = (selectedValue) =>{
        setSelectedItem(selectedValue);
    }

    
    useEffect(()=>{
        axios.get(BASE_URL).then((ress)=>{
            setpost(ress.data)
            console.log(ress.data)
        });
    },[]);

    if (!post) return null
    return(
        <div>
            <NavigationBar/>
            <div>
                <Row style={{width:'95vw'}}>
                    <Col md={6} className="ms-5 mt-3 d-flex flex-column">
                        <div>
                            <h2>Konsultasi dengan caramu sendiri</h2>
                            <p>Konseling yang efektif dimulai dengan rasa nyaman</p>
                        </div>
                    </Col>
                </Row>
                <Row xl={4} lg={2}  style={{width:'95vw'}}>
                    {post.map((dokter)=>{
                        return(
                            <Col>
                                <Card className="box-shadow ms-5 mt-3">
                                <Card.Img src={dokter.photoDK} style={{height:'auto', width:'auto'}}/>
                                <Card.Body>
                                    <Card.Title>{dokter.namaDk}</Card.Title>
                                    <Card.Subtitle>{"Rp."+ dokter.hargaDK + "/sesi"}</Card.Subtitle>
                                    <Card.Text>{dokter.pengalamanDK+" Tahun"}</Card.Text>
                                    <Dropdown as={ButtonGroup} onSelect={handleLayanan}>
                                    <Button variant="success">{selectedItem}</Button>

                                    <Dropdown.Toggle split variant="success" id="dropdown-split-basic"></Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="https://wa.me/message/HO2Q3XAZBEOPJ1" eventKey='konsultasi lewat Zoom'>konsultasi lewat Zoom</Dropdown.Item>
                                        <Dropdown.Item href="https://wa.me/message/HO2Q3XAZBEOPJ1" eventKey='Konsultasi Offline'>Konsultasi Offline</Dropdown.Item>
                                        <Dropdown.Item href="#https://wa.me/message/HO2Q3XAZBEOPJ1" eventKey='konsultasi lewat Chat'>konsultasi lewat Chat</Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Body>
                                </Card>
                            </Col> 
                        )
                    })}
                </Row>

            </div>
            
        </div>
        
    );
}

export default Layanan