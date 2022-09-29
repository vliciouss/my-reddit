import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSubreddits, fetchSubreddits } from '../../store/subredditsSlice';
import { setSelectedSubreddit } from "../../store/postsSlice";



const SubredditList = () => {
    const subreddits = useSelector(selectSubreddits);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchSubreddits());
    }, [dispatch]);

    return (
        <>
            <h2>Subreddits</h2>
                <div className="ui list">
                    {subreddits.map(subreddit => {
                    return (
                        <div className="item" key={subreddit.id}>
                            <img className="ui avatar image" src={subreddit.icon_img || 'https://user-images.githubusercontent.com/33750251/59486444-3699ab80-8e71-11e9-9f9a-836e431dcbfd.png'} alt="icon"/>
                            <div className="content">
                                <a href='/' className="header" onClick={() => dispatch(setSelectedSubreddit(subreddit.display_name_prefixed))}>{subreddit.display_name_prefixed}</a>
                            </div>
                        </div>
                        );
                    })}
                </div>
        </>
    );
};

export default SubredditList;