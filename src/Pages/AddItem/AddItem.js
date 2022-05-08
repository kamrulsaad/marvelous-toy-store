import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Slide, toast } from 'react-toastify';
import auth from '../../firebase.init';

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

        const url = 'http://localhost:5000/products'
        axios.post(url, product)
            .then(res => toast.success('New Item Added', {transition: Slide, position: 'top-center'}))
        e.target.reset()
    }

    return (
        <div>
            <h1 className='text-5xl text-center my-3 text-sky-600'>Add a New Item</h1>
            <div class="flex justify-center">
                <form onSubmit={handleFormSubmit} class="mb-3 xl:w-96">
                    <input
                        type="text"
                        name='name'
                        class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"

                        required
                        placeholder="Product Name" />
                    <textarea
                        type="text"
                        name='about'
                        class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
                        required
                        placeholder="Short Description" />
                    <input
                        type="text"
                        name='supplier'
                        class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
                        required
                        defaultValue={user?.displayName}
                        placeholder="Your Name" />
                    <input
                        type="email"
                        name='email'
                        class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
                        required defaultValue={user?.email}
                        placeholder="Your Email" />
                    <input
                        type="text"
                        name='img'
                        class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
                        required
                        placeholder="Image URL" />
                    <input
                        type="number"
                        name='stock'
                        class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
                        required
                        placeholder="Quantity" />
                    <input
                        type="number"
                        name='price'
                        class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
                        required
                        placeholder="Price" />
                    <input
                        type="date"
                        name='packaged'
                        class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2"
                        required
                        placeholder="Packaging Date" />
                    <input
                        type="submit"
                        class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-200 cursor-pointer bg-blue-600 bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 mb-2" value='Add Item' />
                </form>
            </div>
        </div>
    );
};

export default AddItem;