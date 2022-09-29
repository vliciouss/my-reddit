import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    subreddits: [],
    isLoading: false,
    hasError: false
};

export const fetchSubreddits = createAsyncThunk('subreddits/getSubreddits', async (dispatch) => {
    const response = await axios.get(`https://www.reddit.com/subreddits.json`);
    return response.data.data.children.map((subreddit) => subreddit.data)
});

const subredditsSlice = createSlice({
    name: 'subreddits',
    initialState,
    extraReducers: {
        [fetchSubreddits.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [fetchSubreddits.fulfilled]: (state, action) => {
            state.subreddits = action.payload;
            state.isLoading = false;
            state.hasError = false;
        },
        [fetchSubreddits.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
});

export const selectSubreddits = state => state.subreddits.subreddits;
export default subredditsSlice.reducer;