import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import Loading from '../Shared/Loading/Loading';
import TableRow from './TableRow';
import {motion} from 'framer-motion'

const AllProducts = () => {

    const [products] = useProducts()

    if (products.length === 0) return <Loading></Loading>

    return (
        <motion.div initial={{width: 0}} animate={{width: '100%'}} exit={{x: window.innerWidth, transition: {duration: 0.5}}} className="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
            <h1 className='text-5xl text-center font-medium my-2'>Manage Inventory</h1>
            <section className="bg-white py-4">
                <div>
                    <div className="flex flex-wrap">
                        <div className="w-full">
                            <div className="max-w-full overflow-x-scroll md:overflow-visible">
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr className="bg-red-500 text-center">
                                            <th
                                                className=" w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent ">
                                                Name
                                            </th>
                                            <th
                                                className=" w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 ">
                                                Price
                                            </th>
                                            <th
                                                className=" w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 ">
                                                Quantity
                                            </th>
                                            <th
                                                className=" w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 ">
                                                Supplier
                                            </th>
                                            <th
                                                className=" w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 ">
                                                Packaged
                                            </th>
                                            <th
                                                className=" w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-r border-transparent ">
                                                Register
                                            </th>
                                            <th
                                                className=" w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-r border-transparent ">
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
        </motion.div>
    );
};

export default AllProducts;