import axios from 'axios';
import React from 'react';
import { Slide, toast } from 'react-toastify';
import useProducts from '../../hooks/useProducts';

const TableRow = ({ pd }) => {

    const[products, setProducts] = useProducts()
    const { supplier, name, packaged, stock, price, _id } = pd;

    const handleDelete = id => {
        const url = `http://localhost:5000/products/${id}`
        axios.delete(url)
        .then(res => {
            const newProducts = products.filter(product => product._id !== id)
            setProducts(newProducts)
            toast.success('Product Deleted', {position: 'top-center', transition: Slide})
        })
    }

    return (
        <>
            <tr>
                <td
                    class=" text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-red-100
                           border-b border-l border-[#E8E8E8]
                           "
                >
                        {name}
                </td>
                <td
                    class="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                >
                    {price}
                </td>
                <td
                    class=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]">
                    {stock || 'Sold Out' }
                </td>
                <td
                    class="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
                >
                    {supplier}
                </td>
                <td
                    class="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-[#E8E8E8]
                           "
                >
                    {packaged}
                </td>
                <td
                    class="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-r border-[#E8E8E8]
                           "
                >
                    <a
                        href="/"
                        class="
                              border border-sky-200
                              py-2
                              px-6
                              text-sky-400
                              inline-block
                              rounded
                              transition-all duration-300
                              hover:bg-sky-600 hover:text-white
                              "
                    >
                        Update
                    </a>
                </td>
                <td
                    class="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-r border-[#E8E8E8]
                           "
                >
                    <button
                    onClick={() => handleDelete(_id)}
                        class="
                              border border-red-200
                              py-2
                              px-6
                              text-red-400
                              inline-block
                              rounded
                              transition-all duration-300
                              hover:bg-red-600 hover:text-white
                              "
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </>
    );
};

export default TableRow;