import React, { useEffect, useState } from 'react';
import Posts from '../posts';
import CreatePost from '../create-post';

const initialPosts = localStorage.getItem('uegPosts')
    ? JSON.parse(localStorage.getItem('uegPosts'))
    : [];

const App = () => {
    const [posts, setPosts] = useState(initialPosts);

    useEffect(() => {
        async function fetchPosts() {
            if (!initialPosts.length) {
                const result = await fetch(
                    'https://jsonplaceholder.typicode.com/posts/'
                );
                const resultToJson = await result.json();
                setPosts(resultToJson);
                localStorage.setItem('uegPosts', JSON.stringify(resultToJson));
            } else {
                setPosts(initialPosts);
            }
        }
        fetchPosts();
    }, []);

    const handlePostsUpdate = postsPayload => {
        localStorage.setItem('uegPosts', JSON.stringify(postsPayload));
        setPosts(postsPayload);
    };

    return (
        <div className="mx-auto flex w-screen px-5 py-5">
            <Posts posts={posts} />
            <CreatePost handlePostsUpdate={handlePostsUpdate} />
        </div>
    );
};

export default App;
