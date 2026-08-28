import React from "react";
import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";


function App() {

    return (

        <Routes>

            <Route
                path="/"
                element={
                    <MainLayout>
                        <Home />
                    </MainLayout>
                }
            />


            <Route
                path="/login"
                element={<Login />}
            />

        </Routes>

    );

}


export default App;