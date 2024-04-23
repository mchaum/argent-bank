import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../features/auth/userSlice';

const UserEdit = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.user);

    console.log({user});

    useEffect(() => {
        if (token) {
          dispatch(fetchUserData());
        }
      }, [dispatch, token]);
    return (
            <div className="header">
            <h1>Welcome back {`${user.firstName}`} {`${user.lastName}`}!</h1>
              <button className="edit-button">Edit Name</button>
            </div>
    );
};

export default UserEdit;