import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import Forget from "./Components/Pages/Forget";

function App() {
  return (
    <div className="App">
      
        <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register"element={<Register />} />
              <Route path="/forget"element={<Forget />} />
              <Route path="/" element={<Navigate to="/register" />} />
        </Routes>

    </div>
  );
}

export default App;
