import { Route, Routes } from "react-router-dom";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Nav from "./Pages/Shared/Navbar/Navbar";


function App() {

  return (
    <div className="relative">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<AllProducts></AllProducts>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
