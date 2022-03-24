import React from 'react'

export const TableItem = ({name,username, props,updateuser,id}) => {
  
  return (
    <>
         <tr>
            <td>{ name }</td>
            <td>{ username }</td>
            <td>
                <button
                    onClick={ ()=>props.editRow( updateuser ) }
                >
                    Edit
                </button>
                <button
                    onClick={ ()=>props.deleteUser( id ) }
                    className = 'button muted-button'
                >
                    Delete
                </button>
            </td>
        </tr>
    </>
  )
}
