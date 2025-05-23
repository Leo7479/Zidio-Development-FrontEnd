import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MoveLeft } from "lucide-react";
import Logo from "../resources/zidioconnectlogo.png";
import GoogleLogo from "../resources/googlelogo.png";
import FacebookLogo from "../resources/facebooklogo.png";
import { Mail, LockKeyhole, EyeClosed, Eye } from "lucide-react";
import Input from "../components/Input";
import '../styles/Login.css';
import SocialLogin from "../components/SocialLogin";

const Login = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    function showPassword(){
        const showPasswordCheck = document.getElementById("showPassword");
        if(showPasswordCheck.checked){
            setPasswordVisible(true);
        }else{
            setPasswordVisible(false);
        }
    }


    return (
        <div className="loginBody">
            <div className="loginForm">
                <div className="leftSide">
                </div>

                <div className="rightSide">
                    <span className="back"><Link to="/"><MoveLeft />Back to Home</Link></span>
                    <div className="mainContent">
                        <img src={Logo} alt="logo" width="150" />
                        <span className="welcome">
                            <h1>Log in to your Account</h1>
                            <p>Welcome! Select method to log in:</p>
                        </span>
                        <div className="socialMediaLoginDetails">
                            <SocialLogin className="socialLogin">
                                <img src={GoogleLogo} alt="" />
                                Google
                            </SocialLogin>
                            <SocialLogin className="socialLogin">
                                <img src={FacebookLogo} alt="" />
                                Facebook
                            </SocialLogin>
                        </div>
                        <span className="horizontalSeperation">
                            <p>or login with</p>
                        </span>
                        <div className="directLoginDetails">
                            <span id="loginEmail">
                                <Mail className="loginIcon" />
                                <Input type="email" id="email" name="email" required className="loginInput" placeholder="Ex: john.doe@gmail.com"/>
                            </span>
                            <span id="loginPassword">
                                <LockKeyhole className="loginIcon" />
                                <Input type={passwordVisible?"text":"password"} id="password" name="password" required className="loginInput" placeholder="Your Password"/>
                                <input type="checkbox" id="showPassword" onChange={showPassword} hidden/>
                                <label id="eyeButton" htmlFor="showPassword">
                                    {
                                        passwordVisible?<Eye />:<EyeClosed />
                                    }
                                </label>
                            </span>
                            <div className="loginOptions">
                                <span id="remember">
                                    <input type="checkbox" name="rememberMe" id="rememberMe"/>
                                    <label htmlFor="rememberMe">Remember Me</label>
                                </span>
                                <span id="forgot">
                                    <Link to="/recovery">Forgot Password?</Link>
                                </span>
                            </div>
                            <button id="loginButton">Log In<ArrowRight /></button>
                        </div>
                        <span className="createAccount">
                            Don't have an account?
                            <Link to="/register">Create an Account</Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Login;