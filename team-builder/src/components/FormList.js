import React from "react";
import {ListGroup,ListGroupItem,mem} from "reactstrap";

function Forms({teamList,deleteMem,memberToEdit}){

 const handleClick=(e,index)=>{
 e.preventDefault();
 deleteMem(index);
}

const handleEdit=(e,index)=>{
    e.preventDefault();
     
   }
return(
    <div >
    <h2>Team Info</h2>
    {teamList.map((item,index)=>{
        return (
           <div className="teaminfo" >
            <div>
            <li>{item.urname}</li>
            <li>{item.email}</li>
            <li>{item.role}</li>
            <button className="edit"
            type="submit"
            className="edit"
            onClick={handleEdit}>Edit</button>
            
            <button className="remove"
            type="submit"
             onClick={handleClick}>Remove</button>
             </div>
           </div>
        )
        
    })}
    </div>
)
}
export default Forms;