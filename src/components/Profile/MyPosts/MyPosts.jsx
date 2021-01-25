import React from 'react';
import classes from './MyPosts.module.css';
import Posts from "./Post/Posts";

const MyPosts = () => {
    return (<div className={classes.content}>
        <div>my posts</div>
        <textarea />
        <button>Add post</button>
        <button>Remove</button>
        <div>new posts</div>
        <div className= 'posts'>
        <Posts />
        <Posts />
        <Posts />
        </div>

    </div>);
}

export default MyPosts;