import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadUser = useLoaderData()
    const handleToUpdate= event=>{
        event.preventDefault()
        const form= event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser= {name,email}
        console.log(updatedUser);

        fetch(`http://localhost:5000/users/${loadUser._id}`,{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.modifiedCount>0){
                alert("User update successfully")
            }
        })
    }
    return (
        <div>
            <h1>update information of {loadUser.name}</h1>

            <form onSubmit={handleToUpdate} >
                <input type="text" name="name" defaultValue={loadUser?.name} placeholder='name'  id="" /> <br />
                <input type="email" name="email"  defaultValue={loadUser?.email} placeholder='email' id="" /> <br />

                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;