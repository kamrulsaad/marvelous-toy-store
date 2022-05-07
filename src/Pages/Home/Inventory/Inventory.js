import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';
import Product from '../../ProductCard/Product';
import Loading from '../../Shared/Loading/Loading';

const Inventory = () => {

    const [products] = useProducts()

    if(products.length === 0) return <Loading></Loading>

    const sixProducts = products.slice(0, 6)

    return (
        <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <h1 className='text-5xl text-center font-medium my-2'>Inventory</h1>
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full lg:py-10">
                {
                    sixProducts.map(pd => <Product key={pd._id} pd={pd}></Product>)
                }
            </div>
            <div className='w-full flex justify-center'>
                <Link
                    to="/inventory"
                    className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-red-700 hover:bg-red-700 focus:shadow-outline focus:outline-none"
                >
                    Manage Inventory
                </Link>
            </div>
        </div>
    );
};
export default Inventory;