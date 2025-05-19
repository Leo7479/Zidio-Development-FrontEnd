import React from "react";
import { BrowserRouter as BRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Internships from "./pages/Internships";
import Compete from "./pages/Compete";

const Routing = ()=>{

    return(
        <BRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/internships" element={<Internships />} />
                <Route path="/compete" element={<Compete />} />
            </Routes>
        </BRouter>
    );
}

export default Routing;