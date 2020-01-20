import React from 'react';

function Post({ post }) {
    return (
        <div className="w-auto mb-4 bg-gray-200 p-4">
            <div className="mb-8">
                <div className="text-gray-900 font-bold text-xl mb-2">
                    {post.title}
                </div>
                <p className="text-gray-700 text-base">{post.body}</p>
            </div>
        </div>
    );
}

export default Post;
