import { configureStore } from "@reduxjs/toolkit";
import subredditsReducer from './subredditsSlice';
import postsReducer from './postsSlice';


export const store = configureStore({
    reducer: {
        subreddits: subredditsReducer,
        posts: postsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['discussion/getDiscussion/fulfilled'],
                // Ignore these paths in the state
                ignoredPaths: [`posts.discussion`]
            }
        })
});