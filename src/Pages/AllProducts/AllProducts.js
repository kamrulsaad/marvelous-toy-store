import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Loading from '../Shared/Loading/Loading';
import TableRow from './TableRow';

const AllProducts = () => {

    const [products] = useProducts()

    if (products.length === 0) return <Loading></Loading>

    return (
        <div className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <h1 className='text-5xl text-center font-medium my-2'>Manage Inventory</h1>
            <section class="bg-white py-4">
                <div>
                    <div class="flex flex-wrap">
                        <div class="w-full">
                            <div class="max-w-full overflow-x-scroll md:overflow-visible">
                                <table class="table-auto w-full">
                                    <thead>
                                        <tr class="bg-red-500 text-center">
                                            <th
                                                class=" w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent ">
                                                Name
                                            </th>
                                            <th
                                                class=" w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 ">
                                                Price
                                            </th>
                                            <th
                                                class=" w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 ">
                                                Quantity
                                            </th>
                                            <th
                                                class=" w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 ">
                                                Supplier
                                            </th>
                                            <th
                                                class=" w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 ">
                                                Packaged
                                            </th>
                                            <th
                                                class=" w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-r border-transparent ">
                                                Register
                                            </th>
                                            <th
                                                class=" w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-r border-transparent ">
                                                Register
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products.map(pd => <TableRow key={pd._id} pd={pd}></TableRow>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='w-full flex justify-center'>
                <Link
                    to="/addItem"
                    className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-red-500 hover:bg-red-800 focus:shadow-outline focus:outline-none"
                >
                    Add New Item
                </Link>
            </div>
        </div>
    );
};

export default AllProducts;