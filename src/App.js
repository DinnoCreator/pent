import { Route, Routes } from "react-router-dom";
import Home from "./pages/unauthenticated/Home";
import Login from "./pages/unauthenticated/Login";
import Signup from "./pages/unauthenticated/Signup";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cruise" element={<Signup/>}/>
    </Routes>
  );
}

export default App;
