import AppRoutes from "./routes/AppRoutes";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./pages/Home/Home";

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
    </Routes>
  );
}

export default App;



