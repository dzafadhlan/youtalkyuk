import axios from "axios"
import NavigationBar from "./NavigationBar"
import { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

const Artikel = () =>{
    const[dataArticle,setDataArticle] = useState([])
    useEffect(()=>{
        axios.get("https://health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=540"
    ).then((ress)=>{
        console.log(ress.data.Result.Resources.Resource[0].RelatedItems.RelatedItem)
        setDataArticle(ress.data.Result.Resources.Resource[0].RelatedItems.RelatedItem)
    }).catch((err)=>{
        console.log(err)
    },[])
    })
    return(
        <>
            <NavigationBar/>
            <div>
            <Row style={{width:'95vw'}}>
                    <Col md={6} className="ms-5 mt-3 d-flex flex-column">
                        <div>
                            <h2>Menemukan Keseimbangan: Seni Mengelola Stres Sehari-hari</h2>
                            <p>Jelajahi teknik dan strategi sederhana untuk mengatasi stres dalam kehidupan sehari-hari dan membangun kesehatan mental yang tahan banting.</p>
                        </div>
                    </Col>
                </Row>
                <Row xl={4} lg={2}  style={{width:'95vw'}}>
                    {dataArticle.map((article)=>{
                        return(
                            <Col>
                                <Card className="box-shadow ms-5 mt-4" style={{height:'100px', width:'290px'}}>
                                <Card.Body>
                                    <Card.Title style={{lineHeight:'1'}}>{article.Title}</Card.Title>
                                    <Card.Link href={article.Url}>Learn More</Card.Link>
                                </Card.Body>
                                </Card>
                            </Col> 
                        )
                    })}
                </Row>
            </div>
        </>
    )
}
export default Artikel;