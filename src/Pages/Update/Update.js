import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const [product, setProduct] = useState({})
    const { supplier, img, name, packaged, about, stock } = product;

    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])




    return (
        <div className="flex justify-center my-8">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                    <img className="rounded-t-lg" src={img} alt="" />
                <div className="p-6">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <p className="transition-colors duration-200 text-blue-gray-900 hover:text-red-700">
                            Supplier:  {supplier}
                        </p>
                        <br />
                        <p className="text-gray-600">Imported — {packaged}</p>
                    </p>
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                    <p className="inline-flex items-center font-semibold transition-colors duration-200 text-red-400 hover:text-red-800">In Stock: {stock || <span className='text-gray-800 ml-1'> Sold Out </span>}</p>
                    <p className="text-gray-700 text-base mb-4">
                        {about}
                    </p>
                    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Shipped</button>
                    <input className='block w-full my-4 h-8 px-2 py-2 font-normal text-sm text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' type="number" />
                    <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Deliver</button>
                </div>
            </div>
        </div>
    );
};

export default Update;