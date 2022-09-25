import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import RegisterStudent from "./components/RegisterStudent/RegisterStudent";

export default function App(){
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/registrar" element={<RegisterStudent />} />
            </Routes>
        </BrowserRouter>
    );
};
