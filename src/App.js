import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, editTodo } from "./store/actions";

const App = () => {
  const users = useSelector((state) => {
    console.log(state);
    return state ?? [];
  });
  const dispatch = useDispatch();

  const deleteUser = (id) => {
    dispatch(deleteTodo(id));
  };

  const [editing, setEditing] = useState(false);

  const initialUser = { id: null, name: "" };

  const [currentUser, setCurrentUser] = useState(initialUser);

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };

  const updateUser = () => {
    setCurrentUser(initialUser);
    setEditing(false);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="five columns">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                currentUser={currentUser}
                setEditing={setEditing}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm />
            </div>
          )}
        </div>
        <div className="seven columns">
          <h2>View users</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
