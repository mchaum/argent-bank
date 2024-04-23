import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData, updateUserName } from '../features/auth/userSlice';

const UserEdit = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.user);
    const [newUserName, setNewUserName] = useState('');
    const [isEditing, setIsEditing] = useState(false); 

    console.log({ user });

    useEffect(() => {
        if (token) {
            dispatch(fetchUserData());
        }
    }, [dispatch, token]);

    const handleSaveUserName = async (e) => {
        e.preventDefault();
        if (newUserName) {
          dispatch(updateUserName(newUserName));
          setIsEditing(!isEditing);
          setNewUserName('');
        }
      };

      const handleCancel = (e) => {
        e.preventDefault();
        setIsEditing(!isEditing);
        setNewUserName('');
      };

      const btnEditing = () => {
        setIsEditing(!isEditing);
      };

    return (
        <div className="header">
            <h1>Welcome back {`${user.firstName}`} {`${user.lastName}`}!</h1>
            <button className="edit-button" onClick={btnEditing}>
              Edit Name</button>
              {isEditing && (
            <form>
                <div className="edit-user">
                <div className="input-wrapper input-wrapper--edit">
                        <label htmlFor="userName">User Name</label>
                        <input
                            type="text"
                            id="userName"
                            value={newUserName}
                            autoComplete="off"
                            onChange={(e) => setNewUserName(e.target.value)} />
                    </div>
                    <div className="input-wrapper input-wrapper--edit">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            value={user.firstName}
                            disabled />
                    </div>
                    <div className="input-wrapper input-wrapper--edit">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            value={user.lastName}
                            disabled />
                    </div>
                    <button className="edit-button" type="submit" onClick={handleSaveUserName}>Save</button>
                    <button className="edit-button" type="submit" onClick={handleCancel}>Cancel</button>

                </div>
            </form>
            )}
        </div>
    );
}

export default UserEdit;