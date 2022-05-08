import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Slide, toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';
import { motion } from 'framer-motion';

const Update = () => {
    const [product, setProduct] = useState({})
    const { supplier, img, name, packaged, about, stock } = product;

    
    const { id } = useParams()
    
    useEffect(() => {
        fetch(`https://marvelous-toy-store.herokuapp.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [id, product])
    
    if(product === {}) return <Loading></Loading>

    const handleAmountDecrease = () => {
        const decreasedStockAmount = { stock: stock - 1 };
        const url = `https://marvelous-toy-store.herokuapp.com/products/${id}`
        axios.put(url, decreasedStockAmount)
            .then(res => toast.success('Product amount decreased.', {transition: Slide}))
    }

    const handleAmountUpdate = (e) => {
        e.preventDefault()
        const updatedAmount = parseInt(e.target.stock.value);
        if(updatedAmount <= 0) return toast.error("Please provide a valid number", {transition: Slide}) 
        const updatedStockAmount = { stock : stock + updatedAmount};
        const url = `https://marvelous-toy-store.herokuapp.com/products/${id}`
        axios.put(url, updatedStockAmount)
            .then(res => toast.success('Product Updated.', {transition: Slide}))

        e.target.reset()
    }


    return (
        <motion.div initial={{width: 0}} animate={{width: '100%'}} exit={{x: window.innerWidth, transition: {duration: 0.5}}} className="flex justify-center items-center flex-col my-8">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <img className="rounded-t-lg" src={img} alt="" />
                <div className="p-6">
                    <div className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <p className="transition-colors duration-200 text-blue-gray-900 hover:text-red-700">
                            Supplier:  {supplier}
                        </p>
                        <p className="transition-colors duration-200 text-blue-gray-900 hover:text-red-700">
                            Id:  {id}
                        </p>
                        <br />
                        <p className="text-gray-600">Imported — {packaged}</p>
                    </div>
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                    <p className="inline-flex items-center font-semibold transition-colors duration-200 text-red-400 hover:text-red-800">In Stock: {stock || <span className='text-gray-800 ml-1'> Sold Out </span>}</p>
                    <p className="text-gray-700 text-base mb-4">
                        {about}
                    </p>
                    <button disabled={!stock} type="button" onClick={handleAmountDecrease} className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Shipped</button>
                    <form onSubmit={handleAmountUpdate}>
                        <input name='stock' className='block w-full my-4 h-8 px-2 py-2 font-normal text-sm text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' type="number" required  />
                        <input type="submit" value='Restock' className="cursor-pointer inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"/>
                    </form>
                </div>
            </div>
            <Link
                to="/inventory"
                className="flex mt-8 items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-red-700 hover:bg-red-700 focus:shadow-outline focus:outline-none"
            >
                Manage Inventory
            </Link>
        </motion.div>
    );
};

export default Update;