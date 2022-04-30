import { Route, Routes } from "react-router-dom";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer/Footer";
import Nav from "./Pages/Shared/Navbar/Navbar";
import Update from "./Pages/Update/Update";


function App() {

  return (
    <div className="relative">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<AllProducts></AllProducts>}></Route>
        <Route path="/inventory/:id" element={<Update></Update>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
