import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { editTodo } from '../store/actions';

const EditUserForm = (props) => {

    useEffect(() => {
        setUser(props.currentUser)
    }, [props]);

    const dispatch = useDispatch()

    const [user, setUser] = useState(props.currentUser);

    const handleChange = e => {
        const {value} = e.target;
        setUser({...user,name: value});
        }

    const handleSubmit = e => {
        dispatch(editTodo(user));
        props.updateUser()
    }

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" value={user.name} name="name" onChange={handleChange} />
            <button className="button-primary" onClick={handleSubmit} >Update user</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditUserForm;