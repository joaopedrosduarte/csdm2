import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from './pages/Home';
import Request from "./pages/Request";
import Application from "./pages/Application";
import FinalOrder from './pages/FinalOrder/index';

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/aplication" element={<Application/>} />
            <Route path="/home/aplication/new_request" element={<Request />} />
            <Route path="/home/aplication/doing_request" element={<FinalOrder />} />
        </Routes>
    )
}