import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

const AddContact = ()=>{
    const contacts = useSelector((state)=>state);
    const dispatch = useDispatch();
    const history = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const checkEmail = contacts.find((contact)=> contact.email ===email && email);
    const checkPhone = contacts.find((contact)=> contact.phone === phone && phone);
    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!email || !phone || !name){
            return toast.warning("Please fill all the fields!")
        }
        if(checkEmail){
            return toast.error("The email is already exists!")
        }
        if(checkPhone){
            return toast.error("The number is already exists!")
        }
        const data = {
            id : contacts[contacts.length-1].id +1,
            name,
            email,
            phone
        }
        dispatch({type: "ADD_CONTACT",payload: data})
        toast.success("Contact added successfully.");
        history('/')
        console.log(data);
    }
    return(
        <div className='container'>
            <div className='row'>
                <h1 className='display-3 text-center'>
                    Add Contact
                </h1>
                <div className='col-md-6 shadow mx-auto p-4'>
                    <form onSubmit={handleSubmit}>
                        <div className='input-group pt-4'>
                            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name' className='form-control' />
                        </div>
                        <div className='input-group pt-4'>
                            <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder='Email' className='form-control' />
                        </div>
                        <div className='input-group pt-4'>
                            <input value={phone} onChange={e=> setPhone(e.target.value)} type="number"  placeholder='Phone Number' className='form-control' />
                        </div>
                        <div className='input-group pt-4'>
                            <input type="submit" placeholder='Add Contact' className='btn btn-block btn-dark' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact;