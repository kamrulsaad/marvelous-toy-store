import React from 'react';
import Product from '../../Shared/Product/Product';

const Inventory = () => {
    return (
        <div className='md:h-screen'>
            <h1 className='text-center text-3xl'>
                Inventory
            </h1>
            <div>
                <Product></Product>
            </div>
            <button type="button" class="block mx-auto px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Manage Inventory</button>
        </div>
    );
};

export default Inventory;