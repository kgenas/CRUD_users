import React, { useEffect, useState } from 'react'

export const EditUserForm = (props) => {
  // props.currentUser : value select
  const [ user, setUser ]= useState(props.currentUser)
  //test
  //console.log(user);
  useEffect(
      ()=>{
          setUser(props.currentUser)
      },[props]
  )
  const handleInputChange =({target})=>{
        setUser({ ...user, [target.name]: target.value});
  }

  const handleFormSubmit =(e)=>{
      e.preventDefault();
      props.updateUser(user.id, user);
  }
  const RowCancel = ()=>{
      props.setEditing(false);
  }
  return (
    <form onSubmit={handleFormSubmit}>
        <label>Name</label>
        <input
            type='text'
            name='name'
            value={ user.name }
            onChange={ handleInputChange }
        ></input>
        <input
            type='text'
            name='username'
            value={ user.username }
            onChange={ handleInputChange }
        ></input>
        <button>Update user</button>
        <button
            onClick={ RowCancel }
            className ='button muted-button'
        >
            Cancel
        </button>
    </form>
  )
}
