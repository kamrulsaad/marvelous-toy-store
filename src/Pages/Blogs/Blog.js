import React from 'react';

const Blog = ({blog}) => {

    const {img, question, answer} = blog;

    return (
        <>
            <div  className="w-full md:w-1/2 xl:w-1/3 px-4">
                <div className="bg-white rounded-lg overflow-hidden mb-10">
                    <img
                        src={img}
                        alt=""
                        className="w-full h-52"
                    />
                    <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                        <h3>
                            <p
                                className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                            >
                                {question}
                            </p>
                        </h3>
                        <p className="text-base text-body-color leading-relaxed mb-7">
                            {answer}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;