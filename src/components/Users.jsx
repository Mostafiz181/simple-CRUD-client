import React, { useState } from 'react';
import { Link, useLoaderData, useRouteLoaderData } from 'react-router-dom';

const Users = () => {

    const loaderUsers =useLoaderData();

    const [users,setUsers]= useState(loaderUsers)

    const handleToDelete = _id =>{
        console.log(_id);

        fetch(`http://localhost:5000/users/${_id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0){
                alert('user deleted successfully')
                const remaining = users.filter(user=>user._id!== _id)
                setUsers(remaining)
            }
        })
    }
    return (
        <div>

            <h1>{users.length}</h1>

            <div>
                {
                    users.map(user=> <p key={user._id}>{user.name}: {user.email} {user._id} 

                        <Link to={`/update/${user._id}`}> <button>Update</button> </Link>


                    <button onClick={()=> handleToDelete(user._id)} >X</button> </p> )
                }
            </div>

            
        </div>
    );
};

export default Users;