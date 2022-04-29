import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../ProductCard/Product';

const AllProducts = () => {

    const [products] = useProducts()

    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                {
                    products.map(pd => <Product key={pd._id} pd={pd}></Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;