import React from 'react';

const Product = ({pd}) => {

    const {supplier, img, name, packaged, about} = pd; 
    console.log(pd);

    return (
        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
            <img
                src={img}
                className="object-cover w-full h-64"
                alt=""
            />
            <div className="p-5 border border-t-0">
                <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <a
                        href="/"
                        className="transition-colors duration-200 text-blue-gray-900 hover:text-purple-700"
                        aria-label="Category"
                        title="traveling"
                    >
                        {supplier}
                    </a>
                    <span className="text-gray-600">— {packaged}</span>
                </p>
                <a
                    href="/"
                    aria-label="Category"
                    title="Simple is better"
                    className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-purple-700"
                >
                    {name}
                </a>
                <p className="mb-2 text-gray-700">
                    {about}
                </p>
                <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
                >
                    Learn more
                </a>
            </div>
        </div>
    );
};

export default Product;