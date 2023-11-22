import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Trace from "../pages/Trace";
import Sidebar from "../components/organism/Sidebar";
import Footer from "../components/molecules/Footer";
import { AuthProvider } from "../context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

function App() {
    return ( 
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />} />

                    <Route element={<ProtectedRoute/>}>
                        <Route path="/app/*"
                            element={
                                <>
                                    <Sidebar>
                                        <Routes>
                                            <Route path="/home" element={<Home />} />
                                            <Route path="/dashboard" element={<Dashboard />} />
                                            <Route path="/trace" element={<Trace />} />
                                        </Routes>
                                    </Sidebar>
                                    <Footer/>
                                </>
                            }
                        />
                    </Route>
                    
                </Routes>
            </BrowserRouter>
        </AuthProvider>
     );
}

export default App;