import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Nav from "./Pages/Shared/Navbar/Navbar";


function App() {

  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
