import React,{useEffect, useState} from "react";

function Forms({addMember,memberToEdit,editMember}){

console.log('Member to edit in Form=',memberToEdit)

const [formData,setFormData]=useState(
    {urname:"",
     email:"",
     role:"",
     })

 useEffect(()=>{
  //Populate the form with current member data
  setFormData({...formData,...memberToEdit} )
 },[memberToEdit])

const handleChange=(e)=>{
setFormData({...formData,[e.target.name] : e.target.value})
}   

console.log('Form Data in Form=',formData)
const handleSubmit=(e)=>{
    e.preventDefault();
    (memberToEdit)? editMember(formData) :addMember(formData);
    setFormData({
        urname:"",email:"",role:""
    })
}
return(
    <div>
    <forms
    onSubmit={handleSubmit}>

    <label htmlFor="urname">Enter your Name</label>
    <input
     onChange={handleChange}
     type="text"
     name="urname"
     id="urname"
     value={formData.urname}
     placeholder={"Your sweet Name!"}
    />
    <br/>
    <label htmlFor="email">Enter your Email</label>
    <input
    onChange={handleChange}
    type="email"
    name="email"
    id="email"
    value={formData.email}
    placeholder={"Your email ID"}
    />
    
    <br/>
    <label htmlFor="role">Enter your Role</label>
    <input
    onChange={handleChange}
    type="role"
    name="role"
    id="role"
    value={formData.role}
    placeholder={"Your Role"}
    />
    <br/>
    <label htmlFor="submit"></label>
    <div>
    <button
    onClick={handleSubmit}
    name="submit"
    id="submit"
    type="submit"
    >Submit</button>
    </div>
    </forms> 
    </div>
)
}
export default Forms;