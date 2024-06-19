import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={SignUp} />
      </Routes>
    </>
  );
}

export default App;
