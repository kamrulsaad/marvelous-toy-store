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
        <div class="flex justify-center my-8">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <img class="rounded-t-lg" src={img} alt="" />
                <div class="p-6">
                    <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                        <p className="transition-colors duration-200 text-blue-gray-900 hover:text-red-700">
                            Supplier:  {supplier}
                        </p>
                        <br />
                        <p className="text-gray-600">Imported — {packaged}</p>
                    </p>
                    <h5 class="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                    <p className="inline-flex items-center font-semibold transition-colors duration-200 text-red-400 hover:text-red-800">In Stock: {stock}</p>
                    <p class="text-gray-700 text-base mb-4">
                        {about}
                    </p>
                    <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Shipped</button>
                </div>
            </div>
        </div>
    );
};

export default Update;