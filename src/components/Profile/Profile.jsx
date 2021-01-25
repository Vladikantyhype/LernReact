import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (<div className={classes.content}>
        <div>
            <img src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f29dc848-c9ab-4c46-89f1-71e92148ed4e/dd6q3is-f05e26ff-c6bb-4c5a-8c54-ed3f90940df0.jpg/v1/fill/w_1024,h_725,q_75,strp/valhalla_s_gates_by_naidenromanov_dd6q3is-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD03MjUiLCJwYXRoIjoiXC9mXC9mMjlkYzg0OC1jOWFiLTRjNDYtODlmMS03MWU5MjE0OGVkNGVcL2RkNnEzaXMtZjA1ZTI2ZmYtYzZiYi00YzVhLThjNTQtZWQzZjkwOTQwZGYwLmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.EHEnIMXDE4zufyt98FKcAgqyNtoM94elhv6s05MdSuw"/>
        </div>
        <div>ava  +  discription</div>
        <MyPosts/>
        </div>);

}

export default Profile;