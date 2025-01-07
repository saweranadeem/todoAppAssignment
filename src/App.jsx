import Signup from "./accounts/Signup";
  import Login from "./accounts/Login";
import ForgotPassword from "./accounts/ForgotPassword";
import{Routes,Route}from "react-router-dom"
import "./App.css";

function App() {
  return (
    <>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/forgotPassword" element={<ForgotPassword/>}/>
        

    </Routes>
    </>
  );
}

export default App;
