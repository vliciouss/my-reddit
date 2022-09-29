import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDiscussion, selectDiscussion } from "../../store/postsSlice";
import { Comment } from "./Comment";

export const Comments = ({ post }) => {
    const dispatch = useDispatch();
    const discussion = useSelector(selectDiscussion);
    console.log(discussion);


    useEffect(() => {
        dispatch(fetchDiscussion(post.permalink));
    }, [dispatch, post.permalink]);

    return <div>{discussion.map(comment => {
        return <Comment 
            key={comment.id}
            comment={comment}
        />
    })}</div>
};