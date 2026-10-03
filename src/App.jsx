import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Tailors from "./pages/Tailors/Tailors";
import Register from "./pages/Register/Register";

// Added
import CustomerDashboard from "./pages/CustomerDashboard/CustomerDashboard";
import Booking from "./pages/Booking/Booking";


function App() {
    return (
        <Routes>

            {/* Home */}
            <Route
                path="/"
                element={
                    <MainLayout>
                        <Home />
                    </MainLayout>
                }
            />

            {/* Login */}
            <Route
                path="/login"
                element={<Login />}
            />

            <Route
                path="/register"
                element={<Register />}
            />

            {/* Tailors */}
            <Route
                path="/tailors"
                element={
                    <MainLayout>
                        <Tailors />
                    </MainLayout>
                }
            />

            {/* Customer Dashboard */}
            <Route
                path="/customer-dashboard"
                element={<CustomerDashboard />}
            />

            {/* Booking */}
            <Route
                path="/booking"
                element={<Booking />}
            />

        </Routes>
    );
}

export default App;