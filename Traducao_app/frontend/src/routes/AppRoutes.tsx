import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import ClientArea from "../pages/ClientArea";
import MarriageCertificate from "../pages/MarriageCertificate";
import Home from "../pages/Home";
import PrivateRoute from "./PrivateRoute";
import Register from "../pages/Register";

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute isAuthenticated={true} >
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/client-area"
                    element={
                        <PrivateRoute isAuthenticated={true} >
                            <ClientArea />
                        </PrivateRoute>
                    }
                />
                <Route path="/marriage-certificate" element={<MarriageCertificate />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
