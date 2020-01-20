import React from 'react';
import Post from './post';

function Posts({ posts }) {
    return (
        <div className="overflow-auto w-2/3 mr-5">
            {posts.map((post, index) => (
                <Post key={index} post={post} />
            ))}
        </div>
    );
}

export default Posts;
