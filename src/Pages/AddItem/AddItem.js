import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Slide, toast } from 'react-toastify';
import auth from '../../firebase.init';
import { motion } from 'framer-motion';

const AddItem = () => {

    const [user] = useAuthState(auth)

    const handleFormSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const name = e.target.name.value
        const supplier = e.target.supplier.value
        const packaged = e.target.packaged.value
        const about = e.target.about.value
        const stock = e.target.stock.value
        const price = e.target.price.value
        const img = e.target.img.value
        const product = { name, email, stock, supplier, packaged, about, img, price: `$${price}` }

        const url = 'https://marvelous-toy-store.herokuapp.com/products'
        const url2 = 'https://marvelous-toy-store.herokuapp.com/myItems'
        axios.post(url, product)
            .then(res => toast.success('New Item Added', {transition: Slide, position: 'top-center'}))
        axios.post(url2, product)
        e.target.reset()
    }

    return (
        <motion.div initial={{width: 0}} animate={{width: '100%'}} exit={{x: window.innerWidth, transition: {duration: 0.5}}} >
            <h1 className='text-5xl text-center my-3 text-sky-600'>Add a New Item</h1>
            <div className="md:flex mx-8 justify-center">
                <form onSubmit={handleFormSubmit} className="mb-3 xl:w-96">
                    <input
                        type="text"
                        name='name'
                        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"

                        required
                        placeholder="Product Name" />
                    <textarea
                        type="text"
                        name='about'
                        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
                        required
                        placeholder="Short Description" />
                    <input
                        type="text"
                        name='supplier'
                        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
                        required
                        defaultValue={user?.displayName}
                        placeholder="Your Name" />
                    <input
                        type="email"
                        name='email'
                        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
                        required defaultValue={user?.email}
                        placeholder="Your Email" />
                    <input
                        type="text"
                        name='img'
                        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
                        required
                        placeholder="Image URL" />
                    <input
                        type="number"
                        name='stock'
                        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
                        required
                        placeholder="Quantity" />
                    <input
                        type="number"
                        name='price'
                        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
                        required
                        placeholder="Price" />
                    <input
                        type="date"
                        name='packaged'
                        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
                        required
                        placeholder="Packaging Date" />
                    <input
                        type="submit"
                        className=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-200 cursor-pointer bg-blue-600 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 mb-2" value='Add Item' />
                </form>
            </div>
        </motion.div>
    );
};

export default AddItem;