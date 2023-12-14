import axios from "axios"
import React, { useState } from "react"
import NavigationBar from "./NavigationBar"
import { Button,Alert } from "react-bootstrap"
import { Link, useNavigate} from "react-router-dom"
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase"

const BASE_URL = "https://jazzy-dango-17b14f.netlify.app/.netlify/functions/api/user/register"

const Register = ()=> {
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUsername] = useState('')
    const [message, setMessage] = useState('')
    const [show, setShow] = useState(true);
    const navigate = useNavigate()
    const handleRegister =() =>{

        // const auth = getAuth()
        // createUserWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {
        //     // Signed up 
        //     const user = userCredential.user;
        //     // ...
        // })
        // .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     // ..
        // });
        axios({
            method : 'POST',
            url : BASE_URL,
            data:{
                email:email,
                username:userName,
                password:password
            },
            // withCredentials: true
        }).then(res =>{
            if (res.status == 200) {
                console.log(res)
                setMessage(res.data.message)
                navigate("/")
            } else {
                setMessage(res.data.message);
            }
        }).catch(err => console.log(err))
    }
    return(
        <>
        <NavigationBar />
        <section style={{height:"100vh"}}>
            <div>
                <div className="d-flex justify-content-center align-items-center h-100 mt-5">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"  className="img-fluid" alt="gambar-login"/>
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <div className="form-outline mb-4">
                            <label>
                                Email
                                <input type="email"className="form-control form-control-lg" placeholder="Enter Email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                            </label>
                        </div>
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
                            <Button variant="success" size="lg" onClick={handleRegister}>Sign up</Button>
                        </div>
                        <div className="mt-3">
                            {message && <Alert variant="success">
                            <Alert.Heading>{message}</Alert.Heading>
                            <div className="d-flex justify-content-end">
                            <Button onClick={() => setShow(false)} variant="outline-success">
                                Close me
                            </Button>
                            </div>                               
                                </Alert>}
                        </div>
                        <div className="mt-3">
                            <span>Have an account ?<Link to="/login"> Login</Link></span>
                        </div>
                    </div>
                </div>                
            </div>
        </section>
        </>
    );
}
export default Register;