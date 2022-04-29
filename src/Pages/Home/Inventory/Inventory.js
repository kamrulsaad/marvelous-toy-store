import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../../ProductCard/Product';

const Inventory = () => {

    const [products] = useProducts()

    const sixProducts = products.slice(0,6)

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {
                    sixProducts.map(pd => <Product key={pd._id} pd={pd}></Product>)
                }
            </div>
        </div>
    );
};
export default Inventory;