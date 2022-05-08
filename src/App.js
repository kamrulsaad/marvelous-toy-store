import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddItem from "./Pages/AddItem/AddItem";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Footer from "./Pages/Shared/Footer/Footer";
import Nav from "./Pages/Shared/Navbar/Navbar";
import Update from "./Pages/Update/Update";
import 'react-toastify/dist/ReactToastify.css';
import MyItems from "./Pages/MyItems/MyItems";
import NotFound from "./Pages/NotFound/NotFound";
import Features from "./Pages/Features/Features";
import Blogs from "./Pages/Blogs/Blogs";


function App() {

  return (
    <div className="relative">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventory" element={<RequireAuth><AllProducts></AllProducts></RequireAuth>}></Route>
        <Route path="/inventory/:id" element={<RequireAuth><Update></Update></RequireAuth>}></Route>
        <Route path="/myItems" element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path="/addItem" element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/features" element={<Features></Features>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
