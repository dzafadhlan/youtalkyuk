import axios from "axios"
import React, { useState } from "react"
import NavigationBar from "./NavigationBar"
import { Button,Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import Cookies from "js-cookie"

const BASE_URL = "https://jazzy-dango-17b14f.netlify.app/.netlify/functions/api/user/login"

const Login = ()=> {
    const [password, setPassword] = useState('')
    const [userName, setUsername] = useState('')
    const [message, setMessage] = useState('')
    
    const handleLogin = async () =>{
        await axios({
            method : 'POST',
            url : BASE_URL,
            data:{
                username:userName,
                password:password
            },
            // withCredentials: true,
        }).then(res =>{
            if (res.status == 200) {
                console.log(res.data.token)
                Cookies.set('accesToken', res.data.token )
                setMessage(res.data.message)
                setTimeout(() => {
                    setMessage("")
                    window.location.reload()
                }, 2000)
            } else {
                
                setMessage(res.data.message);
            }
        }).catch((err) => {
            console.log(err.response.data.message) 
            setMessage(err.response.data.message);
    })
        
    }
    return(
        <>
        <NavigationBar />
        <section style={{height:"100vh"}}>
            <div>
                <div className="d-flex justify-content-center align-items-center h-100 mt-5">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"  className="img-fluid" alt="gambar-login"/>
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <div className="form-outline mb-4">
                                <label className="form-label" >
                                    Username
                                    <input type="text" className="form-control form-control-lg" placeholder="Enter username" value={userName} onChange={(e) => setUsername(e.target.value)}/>
                                </label>
                        </div>
                        <div className="form-outline mb-4">
                                <label className="form-label">
                                    password
                                    <input type="password" className="form-control form-control-lg" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                </label>
                        </div>
                        <div>
                            <Button variant="success" size="lg" onClick={handleLogin} as={Link} to={'/'}>Sign in</Button>
                        </div>
                        <div className="mt-3">
                            {message && <Alert variant="success">
                            <Alert.Heading>{message}</Alert.Heading>
                            <div className="d-flex justify-content-end">
                            </div>                               
                                </Alert>}
                        </div>
                        <div className="mt-3">
                            <span>Not Register yet? <Link to="/register">Register</Link></span>
                        </div>
                    </div>
                </div>                
            </div>
        </section>
        </>
         
    );
}
export default Login;
