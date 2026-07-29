import React from "react";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home/Home";
import AppRoutes from "./routes/AppRoutes";


function App() {

  return (

    <MainLayout>

        <Home />
        <AppRoutes />

    </MainLayout>

  );

}


export default App;