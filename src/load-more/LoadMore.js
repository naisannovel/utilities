import axios from 'axios';
import React, { useEffect, useState } from 'react';

const LoadMore = () => {

    const [posts, setPosts] = useState([]);
    const [visible, setVisible] = useState(6);
  
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
      };
  
      fetchPosts();
    }, []);

    const showMore = ()=>{
        setVisible(visible + 6);
        // setVisible((prevValue) => prevValue + 6);
    }

    return (
        <div>
            <ul className='list-group mb-4'>
                {posts.slice(0, visible).map(post => (
                    <li key={post.id} className='list-group-item'>
                        <span> { post.id } </span>
                        {post.title}
                    </li>
                ))}
            </ul>
                <button onClick={showMore} className='btn-primary'>Load More</button>
        </div>
    );
};

export default LoadMore;