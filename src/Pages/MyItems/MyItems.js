import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Product from '../ProductCard/Product';
import Loading from '../Shared/Loading/Loading';

const MyItems = () => {

    const [user] = useAuthState(auth)
    const [myItmes, setMyItems] = useState([])

    
    useEffect(() => {
        axios.get(`http://localhost:5000/myItems?email=${user.email}`)
        .then(res => setMyItems(res.data))
    },[user])
    
    if(myItmes.length === 0 ) return <Loading></Loading>
    
    return (
        <div className="grid gap-8 lg:mx-20 my-4 mx-auto lg:grid-cols-3 max-w-sm  lg:max-w-full lg:py-10">
            {
                myItmes.map(item => <Product key={item._id} pd={item}></Product>)
            }
        </div>
    );
};

export default MyItems;