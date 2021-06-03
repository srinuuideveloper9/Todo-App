import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/actions';

const AddUserForm = () => {

    const initUser = { name: '' };
    const dispatch = useDispatch();

    const [user, setUser] = useState(initUser);

    const handleChange = e => {
        const { value } = e.target;
        setUser({ name: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (user.name) {
            dispatch(addTodo(user));
            setUser(initUser);
        }
    }

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Add user</button>
        </form>
    )
}

export default AddUserForm;