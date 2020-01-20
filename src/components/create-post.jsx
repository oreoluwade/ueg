import React, { useReducer } from 'react';

const reducer = (initialState, finalState) => ({
    ...initialState,
    ...finalState
});

const CreatePost = ({ handlePostsUpdate }) => {
    const [state, setState] = useReducer(reducer, {
        title: '',
        body: '',
        submitting: false
    });

    const changeFieldValue = e => {
        e.preventDefault();
        setState({ [e.target.name]: e.target.value });
    };

    const createNewPost = async () => {
        const newPost = {
            title: state.title,
            body: state.body,
            userId: 1
        };

        const existingPosts = JSON.parse(localStorage.getItem('uegPosts'));

        existingPosts.unshift(newPost);

        handlePostsUpdate(existingPosts);

        setState({ title: '', body: '' });
    };
    return (
        <div className="container w-1/3 mx-auto px-7">
            <form
                action=""
                className=" bg-white shadow-md rounded px-8 py-8 pt-8"
            >
                <div className="px-4 pb-4">
                    <label
                        htmlFor="title"
                        className="text-sm block font-bold  pb-2"
                    >
                        TITLE
                    </label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
                        placeholder="Title..."
                        onChange={changeFieldValue}
                        value={state.title}
                    />
                </div>
                <div className="px-4 pb-4">
                    <label
                        htmlFor="body"
                        className="text-sm block font-bold pb-2"
                    >
                        BODY
                    </label>
                    <textarea
                        name="body"
                        id="body"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
                        placeholder="Type post body..."
                        onChange={changeFieldValue}
                        value={state.body}
                    />
                </div>
                <div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={createNewPost}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreatePost;
