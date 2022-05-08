import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Blog from './Blog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/blogs')
        .then(res => setBlogs(res.data))
    },[])

    return (
        <section class="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6]">
            <div class="container">
                <div class="flex flex-wrap -mx-4">
                    {
                        blogs.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blogs;