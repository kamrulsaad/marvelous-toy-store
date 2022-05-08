import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useProducts from '../../hooks/useProducts';

const TableRow = ({ pd }) => {

    const [products, setProducts] = useProducts()
    const { supplier, name, packaged, stock, price, _id } = pd;

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const url = `https://marvelous-toy-store.herokuapp.com/products/${id}`
                axios.delete(url)
                    .then(res => {
                        const newProducts = products.filter(product => product._id !== id)
                        setProducts(newProducts)
                    })
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <>
            <tr>
                <td
                    className=" text-dark font-medium text-base py-5 px-2 bg-red-100 border-b border-l border-[#E8E8E8] ">
                    {name}
                </td>
                <td
                    className=" text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-[#E8E8E8] ">
                    {price}
                </td>
                <td
                    className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8]">
                    {stock || 'Sold Out'}
                </td>
                <td
                    className=" text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-[#E8E8E8] ">
                    {supplier}
                </td>
                <td
                    className=" text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-[#E8E8E8] "
                >
                    {packaged}
                </td>
                <td
                    className=" text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-r border-[#E8E8E8] ">
                    <Link
                        to={`/inventory/${_id}`}
                        className=" border border-sky-200 py-2 px-6 text-sky-400 inline-block rounded transition-all duration-300 hover:bg-sky-600 hover:text-white ">
                        Update
                    </Link>
                </td>
                <td
                    className=" text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-r border-[#E8E8E8] ">
                    <button
                        onClick={() => handleDelete(_id)}
                        className=" border border-red-200 py-2 px-6 text-red-400 inline-block rounded transition-all duration-300 hover:bg-red-600 hover:text-white ">
                        Delete
                    </button>
                </td>
            </tr>
        </>
    );
};

export default TableRow;