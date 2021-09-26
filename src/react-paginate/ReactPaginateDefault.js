import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

const ReactPaginateDefault = () => {

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [postsPerPage] = useState(10);
  
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
      };
  
      fetchPosts();
    }, []);

      // Get current posts
  const indexOfFirstPost = currentPage * postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfFirstPost + postsPerPage);

  const pageCount = Math.ceil(posts.length / postsPerPage);

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };
console.log(posts);
    return (
        <div>
            <ul className='list-group mb-4'>
                {currentPosts.map(post => (
                    <li key={post.id} className='list-group-item'>
                        {post.title}
                    </li>
                ))}
            </ul>

            {/* React paginate */}

            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}      // all are custom class
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </div>
    );
};

export default ReactPaginateDefault;