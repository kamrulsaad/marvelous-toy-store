import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Blog from './Blog';
import { motion } from 'framer-motion';

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get('https://marvelous-toy-store.herokuapp.com/blogs')
        .then(res => setBlogs(res.data))
    },[])

    return (
        <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
            <motion.div initial={{width: 0}} animate={{width: '100%'}} exit={{x: window.innerWidth, transition: {duration: 0.5}}}  className="container">
                <div className="flex flex-wrap -mx-4">
                    {
                        blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                    }
                </div>
            </motion.div>
        </section>
    );
};

export default Blogs;