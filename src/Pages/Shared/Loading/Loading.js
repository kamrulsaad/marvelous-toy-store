import React from 'react';

const Loading = ({ children }) => {
    return (
        <div className="flex h-screen justify-center items-center">
            {
                !children ?
                    <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-red-500" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> :

                    <p className='text-2xl text-red-500'>
                        {children}
                    </p>
            }
        </div>
    );
};

export default Loading;