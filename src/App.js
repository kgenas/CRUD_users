import { Fragment, useState} from 'react';
import { AddUserForm } from './forms/AddUserForm';
import { EditUserForm } from './forms/EditUserForm';
import { UserTable } from './tables/UserTable';
function App() {

  const userData = [
    { id: 1, name: 'Tania', username:'floppydiskette' },
    { id: 2, name: 'Craig', username:'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere'},
  ];
  const initialFormState = { id: null, name: '', username:''};
  const [ users, setUsers ] = useState(userData);
  const [ currentUser, setCurrentUser ] = useState(initialFormState);
  const [ editing, setEditing ] = useState(false);
  
  const addUser = (user)=>{
     user.id = users.length + 1
     setUsers([...users,user])
  }
  const deleteUser =(id)=>{
      setEditing(false);
      setUsers(users.filter(user => user.id !== id))
  }

  const updateUser = (id, updateUser ) =>{
    setEditing(false);
    // si el igual al id guarda el nuevo cambio si no carge la lista existente
    setUsers( users.map(user => (user.id ===id ? updateUser : user )));
  }

  const editRow = ( user ) =>{
     setEditing(true);
     setCurrentUser({id: user.id, name: user.name , username: user.username});
  }

  const EditUser = () =>{
    return(
      <Fragment>
        <h2>Edit user </h2>
        <EditUserForm
          editing = { editing }
          setEditing = { setEditing }
          currentUser = { currentUser }
          updateUser = { updateUser }
        />
      </Fragment>
    )
  }

  const AddUser = () =>{
    return(
      <Fragment>
          <h2>Add user</h2>
          <AddUserForm
            addUser = { addUser }
          />
      </Fragment>
    )
    }
   const ViewUser = () =>{
     return(
       <>
        <h2>View users</h2>
        <UserTable
          users = { users }    
          editRow = { editRow }
          deleteUser = { deleteUser }
        />
      </>
     )
   }
  
  return (
    <div className="container">      
      <h1>CRUD App </h1> 
      <div className='flex-row'>
          <div className='flex-large'>
             {editing ? EditUser() : AddUser() }
          </div>
          <div className='flex-large'>
              {ViewUser()}
          </div>
      </div>
    </div>
  );
}

export default App;
