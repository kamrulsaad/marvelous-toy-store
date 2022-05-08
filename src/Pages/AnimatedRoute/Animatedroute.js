import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AddItem from '../AddItem/AddItem';
import AllProducts from '../AllProducts/AllProducts';
import Blogs from '../Blogs/Blogs';
import Features from '../Features/Features';
import Home from '../Home/Home/Home';
import Login from '../Login/Login';
import MyItems from '../MyItems/MyItems';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import RequireAuth from '../RequireAuth/RequireAuth';
import Update from '../Update/Update';

const Animatedroute = () => {
    const location = useLocation()
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
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
        </AnimatePresence>
    );
};

export default Animatedroute;