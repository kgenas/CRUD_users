import React from 'react'
import { TableItem } from './TableItem'

export const UserTable = (props) => {
  
  
  const ListUsers = ()=>{
       return( 
           props.users.map( user =>(           
                <TableItem
                    key = {user.id}
                    props = { props }
                    updateuser = { user }
                    {...user}
                />
           ))
        )
  }
  const NotUsers = () =>{     
    return(
        <tr>
            <td colSpan={3}>No users</td>
        </tr>
    )
  }
  return (
    <>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? ListUsers() : NotUsers() }
            </tbody>
        </table>        
    </>
  )
}
