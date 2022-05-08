import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const Product = ({pd}) => {

    const[products, setProducts] = useProducts()
    const {supplier, img, name, packaged, about, stock, _id, price} = pd; 

    const handleDelete = id => {
        const agreed = window.confirm("Are You Sure you want to delete this item?")
        if(!agreed) return
        const url = `http://localhost:5000/products/${id}`
        axios.delete(url)
        .then(res => {
            const newProducts = products.filter(product => product._id !== id)
            setProducts(newProducts)
        })
    }

    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            
            <img
                src={img}
                className="object-cover w-full h-64"
                alt=""
            />
            <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <a
                        href="/"
                        className="transition-colors duration-200 text-blue-gray-900 hover:text-red-700"
                        aria-label="Category"
                        title="traveling"
                    >
                      Supplier:  {supplier}
                    </a>
                    <br />
                    <span className="text-gray-600">Imported — {packaged}</span>
                </p>
                <p
                    title="Simple is better"
                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-red-700"
                >
                    {name}
                </p>
                <p className="flex items-center font-semibold transition-colors duration-200 text-red-400 hover:text-red-800">In Stock: {stock || <span className='text-gray-800 ml-1'> Sold Out </span>}</p>
                <p className="flex items-center font-semibold transition-colors duration-200 text-slate-800">Price: {price}</p>
                <p className="mb-2 text-gray-700">
                    {about}
                </p>
                <Link to={`/inventory/${_id}`}
                    className="inline-flex items-center justify-center px-3 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-400 hover:bg-sky-700 focus:shadow-black focus:outline-none"
                >
                    Update
                </Link>
                <button 
                onClick={() => handleDelete(_id)}
                    className="inline-flex items-center ml-2 justify-center px-3 py-2 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-red-400 hover:bg-red-700 focus:shadow-black focus:outline-none">
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Product;