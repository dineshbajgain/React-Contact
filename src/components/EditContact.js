import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const EditContact = () => {
    const dispatch = useDispatch();
    const history = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const {id} = useParams();
    
    const contacts = useSelector(state=>state)
    const currentContact = contacts.find(contact=>contact.id===parseInt(id))
    
    useEffect(()=>{
        if(currentContact){
            setName(currentContact.name);
            setEmail(currentContact.email);
            setPhone(currentContact.phone);
        }
    },[currentContact]);

    const checkEmail = contacts.find((contact)=> contact.id !== parseInt(id) && contact.email ===email );
    const checkPhone = contacts.find((contact)=> contact.id !== parseInt(id) && contact.phone === phone && phone);
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
            id : parseInt(id),
            name,
            email,
            phone
        }
        dispatch({type: "UPDATE_CONTACT",payload: data})
        toast.success("Contact added successfully.");
        history('/')
        console.log(data);
    }

    return (
    <div className='row'>
        {currentContact?(
            <>
            <h1 className='display-3 text-center'>
             Edit Contact {id}
         </h1>
         <div className='col-md-6 shadow mx-auto p-4'>
             <form onSubmit={handleSubmit}>
                 <div className='input-group pt-4'>
                     <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Name' className='form-control' />
                 </div>
                 <div className='input-group pt-4'>
                     <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' className='form-control' />
                 </div>
                 <div className='input-group pt-4'>
                     <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" placeholder='Phone Number' className='form-control' />
                 </div>
                 <div className='input-group pt-4'>
                     <Link to='/' className='btn btn-dark mx-4'> Cancel </Link>
                     <input type="submit" placeholder='Update Contact' className='btn btn-block btn-dark' />
                 </div>
             </form>
         </div>
         </>
        ):(
            <>
            <h1 className='display-3 text-center'>
             Contact Not Available !!!
         </h1>
         </>
        )}
               
    </div>
  )
}

export default EditContact