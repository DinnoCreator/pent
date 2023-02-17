import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/authenticated/Dashboard";
import Home from "./pages/unauthenticated/Home";
import Login from "./pages/unauthenticated/Login";
import Signup from "./pages/unauthenticated/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cruise" element={<Signup/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
    </Routes>
  );
}

export default App;
