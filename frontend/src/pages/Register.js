import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";
import GoogleLogo from "../resources/googlelogo.png";
import FacebookLogo from "../resources/facebooklogo.png";
import { Mail, LockKeyhole, EyeClosed, Eye, User, ArrowRight } from "lucide-react";
import Input from "../components/Input";
import "../styles/Register.css";
import SocialLogin from "../components/SocialLogin";

const Register = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    function showPassword() {
        const showPasswordCheck = document.getElementById("showPassword");
        if (showPasswordCheck.checked) {
            setPasswordVisible(true);
        } else {
            setPasswordVisible(false);
        }
    }

    return (
        <div className="registerBody">
            <div className="registerForm">
                <div className="leftSide">
                </div>
                <div className="rightSide">
                    <span className="back"><Link to="/"><MoveLeft />Back to Home</Link></span>
                    <div className="mainContent">
                        <span className="welcome">
                            <h1>Create an account</h1>
                            <p>Please fill out the fields: </p>
                        </span>
                        <div className="directRegisterDetails">
                            <span id="registerName">
                                <User className="registerIcon" />
                                <Input type="text" id="name" name="name" required className="RegisterInput" placeholder=""/>
                                <label className="inputDivText">Enter Your Name</label>
                            </span>
                            <span id="registerEmail">
                                <Mail className="registerIcon" />
                                <Input type="email" id="email" name="email" required className="RegisterInput" placeholder=""/>
                                <label className="inputDivText">Enter Your Email</label>
                            </span>
                            <span id="registerPassword">
                                <LockKeyhole className="registerIcon" />
                                <Input type="password" id="password" name="password" required className="RegisterInput" placeholder=""/>
                                <label className="inputDivText">Enter Password</label>
                            </span>
                            <span id="registerPassword">
                                <LockKeyhole className="registerIcon" />
                                <Input type={passwordVisible ? "text" : "password"} id="passwordConfirm" name="passwordConfirm" required className="RegisterInput" placeholder=""/>
                                <label className="inputDivText">Retype Password</label>
                                <input type="checkbox" id="showPassword" onChange={showPassword} hidden />
                                <label id="eyeButton" htmlFor="showPassword">
                                    {
                                        passwordVisible ? <Eye /> : <EyeClosed />
                                    }
                                </label>
                            </span>
                            <button id="registerButton" className="shine">Register<ArrowRight /></button>
                        </div>
                        <span className="createAccount">
                            Already have an account?
                            <Link to="/login">Login</Link>
                        </span>
                        <span className="horizontalSeperation">
                            <p>or continue with</p>
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

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;