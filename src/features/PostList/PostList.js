import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from '@mui/material/Grid';

import Post from "../Post/Post";
import { fetchPosts, selectPosts } from "../../store/postsSlice";

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);

    useEffect(() => {
        dispatch(fetchPosts(posts.selectedSubreddit));
    }, [posts.selectedSubreddit]);

    return (
        <div>
            <Grid container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            >
                {posts.posts.map(post => {
                    return <Post 
                    key={post.id}
                    post={post}
                    />;
                })}
            </Grid>
        </div>
    )
};

export default PostList;