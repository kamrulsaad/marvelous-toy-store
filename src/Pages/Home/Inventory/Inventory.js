import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../../ProductCard/Product';

const Inventory = () => {

    const [products] = useProducts()

    const sixProducts = products.slice(0,6)

    return (
        <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
            <h1 className='text-5xl text-center font-medium my-2'>Inventory</h1>
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full lg:py-10">
                {
                    sixProducts.map(pd => <Product key={pd._id} pd={pd}></Product>)
                }
            </div>
        </div>
    );
};
export default Inventory;