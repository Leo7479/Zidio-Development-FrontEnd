import React from "react";
import { BrowserRouter as BRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Internships from "./pages/Internships";
import Compete from "./pages/Compete";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CompleteUserDetails from "./pages/CompleteUserDetails";
import Error404Page from "./pages/Error";
const Routing = ()=>{

    return(
        <BRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/internships" element={<Internships />} />
                <Route path="/compete" element={<Compete />} />
                <Route path='/login' element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/complete-registration/" element={<CompleteUserDetails />} />
                <Route path="*" element={<Error404Page />} />
            </Routes>
        </BRouter>
    );
}

export default Routing;