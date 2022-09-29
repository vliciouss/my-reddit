import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    posts: [],
    isLoading: false,
    hasError: false,
    selectedSubreddit: '/r/pics',
    discussion: [],
    discussionIsLoading: false,
    discussionHasError: false
};

export const fetchPosts = createAsyncThunk('posts/getPosts', async (subreddit) => {
    const response = await axios.get(`https://www.reddit.com/${subreddit}.json`);
    return response.data.data.children.map((subreddit) => subreddit.data)
});

export const fetchDiscussion = createAsyncThunk('discussion/getDiscussion', async (permalink) => {
    const response = await axios.get(`https://www.reddit.com/${permalink}.json`);
    return response.data[1].data.children.map((subreddit) => subreddit.data);
});

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setSelectedSubreddit (state, action) {
            state.selectedSubreddit = action.payload;
        }
    },
    extraReducers: {
        [fetchPosts.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [fetchPosts.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        },
        [fetchDiscussion.pending]: (state) => {
            state.discussionIsLoading = true;
            state.discussionHasError = false;
        },
        [fetchDiscussion.fulfilled]: (state, action) => {
            state.discussion = action.payload;
            state.discussionIsLoading = false;
            state.discussionHasError = false;
        },
        [fetchDiscussion.rejected]: (state) => {
            state.discussionIsLoading = false;
            state.discussionHasError = true;
        }
    }
});

export const { setSelectedSubreddit } = postsSlice.actions;
export const selectPosts = (state => state.posts)
export const selectDiscussion = (state => state.posts.discussion)
export default postsSlice.reducer;