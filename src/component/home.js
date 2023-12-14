import { Container, Row, Col, Card,Carousel } from "react-bootstrap";
import NavigationBar from "./NavigationBar"
import "../style/landingPage.css"
import icon from "../assets/iconLandingPage.png"
import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Home =()=>{
    const[dataArticle,setDataArticle] = useState([])
    useEffect(()=>{
        
        axios.get("https://health.gov/myhealthfinder/api/v3/topicsearch.json?TopicId=30539"
    ).then((ress)=>{
        // console.log(ress.data.Result.Resources.Resource[0].RelatedItems.RelatedItem)
        setDataArticle(ress.data.Result.Resources.Resource[0].RelatedItems.RelatedItem)
    }).catch((err)=>{
        console.log(err)
    },[])
    })
    return(
        <>
        <NavigationBar />
            <div className="myBG">
                    <div className="text-black align-item-left">
                        <Row className="justify-content-center m-0">
                            <Col md={6} className="tumbnail ms-5">
                                <div className="text-align d-flex flex-column gap-0">
                                    <span style={{fontSize:'48px'}}>Selamat Datang di</span>
                                    <span style={{fontSize:'64px'}}>YouTalkYuk</span>
                                    <span style={{fontSize:'36px'}}>Temukan kesehatan mental yang lebih baik<br/> untuk hidup yang lebih bahagia</span>
                                </div>
                            </Col>
                            <Col>
                            <img src={icon} alt="icon landing page" style={{width:'400px', height:'400px', marginLeft:'100px'}}></img>
                            </Col>
                        </Row>
                        <Row className="bgbot mt-0" >
                            {console.log(dataArticle)}
                            <Col className="m-4">
                                <span style={{fontSize:'36px' }} >Jelajahi Topik Konseling Umum</span>
                                <p style={{fontSize:'20px', lineHeight:'20px', marginBottom:'50px'}}>pelajari lebih lanjut masalah yang sering dihadapi</p>
                                <Carousel data-bs-theme="dark" controls={false} interval={2500} className="m-4">
                                    
                                    {dataArticle.map((article,index)=>{
                                        if (index === 0) {
                                            return (
                                                <Carousel.Item style={{marginLeft:'100px'}}>
                                                    {dataArticle.map((caro1, ind) => {
                                                        if (ind <=3) {        
                                                        return (
                                                            <Card className="box-shadow m-4">
                                                            <Card.Body style={{height:'185px', width:'250px'}}>
                                                                <Card.Title>{caro1.Title}</Card.Title>
                                                                <Card.Link href={article.Url}>Learn More</Card.Link>
                                                            </Card.Body>
                                                            </Card>
                                                        )
                                                    }
                                                    })}
                                                </Carousel.Item>
                                            )    
                                        } else if (index === 4) {
                                            return (
                                                <Carousel.Item >
                                                    {dataArticle.map((caro1, ind) => {
                                                        if (ind > 3 && ind <=7) {        
                                                        return (
                                                            <Card className="box-shadow m-4" >
                                                                 <a href={caro1.Url}/>
                                                            <Card.Body style={{height:'185px', width:'250px'}}>
                                                                <Card.Title>{caro1.Title}</Card.Title>
                                                                <Card.Link href={article.Url}>Learn More</Card.Link>
                                                            </Card.Body>
                                                            </Card>
                                                        )
                                                    }
                                                    })}
                                                    
                                                
                                                </Carousel.Item>
                                            )    
                                        }  else if (index === 8) {
                                            return (
                                                <Carousel.Item>
                                                    {dataArticle.map((caro1, ind) => {
                                                        if (ind > 8) {return (
                                                            <Card className="box-shadow m-4" style={{alignItems:'center'}}>
                                                                <a href={caro1.Url}/>
                                                            <Card.Body style={{height:'185px', width:'250px'}}>
                                                                <Card.Title>{caro1.Title}</Card.Title>
                                                                <Card.Link href={article.Url}>Learn More</Card.Link>
                                                            </Card.Body>
                                                            </Card>
                                                        )
                                                    }
                                                    })}
                                                </Carousel.Item>
                                            )    
                                        }
                                       })}
                                    </Carousel>
                                <span style={{fontSize:'20px', textAlign:'justify'}}>Stres tidak selalu buruk, namun stres jangka panjang bisa ganggu kesehatanmu.
                                    Berbagai situasi atau peristiwa kehidupan dapat menimbulkan stres. Ketika kita mendapati pengalaman baru, 
                                    atau ketika suatu keadaan berada di luar kendali kita, kita dapat merasa lebih stres daripada biasanya.
                                    Stres tidak dapat dihilangkan, tapi kita mengatasi stres dengan cara yang berbeda-beda. 
                                    Jika kamu kesulitan mengatasi stres, dapatkan bantuan profesional untuk mencari cara mengelola stres dengan lebih baik.
                                </span>
                            </Col>
                        </Row>
                    </div>
            </div>
            </>

    )
}
export default Home;