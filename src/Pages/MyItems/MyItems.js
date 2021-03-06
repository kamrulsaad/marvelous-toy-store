import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../API/axiosPrivate';
import auth from '../../firebase.init';
import Product from '../ProductCard/Product';
import Loading from '../Shared/Loading/Loading';
import { motion } from 'framer-motion';

const MyItems = () => {

    const [user] = useAuthState(auth)
    const [myItmes, setMyItems] = useState([])
    const navigate = useNavigate()

    
    useEffect(() => {
        const email = user?.email
        const url = `https://marvelous-toy-store.herokuapp.com/myItems?email=${email}`
        
        const getToken = async () => {
            try{
                const {data} = await axiosPrivate.get(url)
                setMyItems(data)
            }
            catch(error){
                if(error.response.status === 403 || error.response.status === 401 ){
                    signOut(auth)
                    navigate('/login')
                    localStorage.removeItem("accessToken")
                }
            }
        }

        getToken()

    },[user, navigate, myItmes])
    if(!myItmes.length) return <Loading>Sorry, No Data Found</Loading>
    
    return (
        <motion.div initial={{width: 0}} animate={{width: '100%'}} exit={{x: window.innerWidth, transition: {duration: 0.5}}} className="grid gap-8 lg:mx-20 my-4 mx-auto lg:grid-cols-3 max-w-sm  lg:max-w-full lg:py-10">
            {
                myItmes.map(item => <Product key={item._id} pd={item}></Product>)
            }
        </motion.div>
    );
};

export default MyItems;