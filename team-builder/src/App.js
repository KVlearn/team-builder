import React,{useState,useEffect} from 'react'; 
import Forms from './components/Forms';
import './App.css';
import data from './data';

function App() {

  const[teamList,setTeamList]=useState(data)
  const[memberToEdit,setmemberToEdit]=useState({
    urname:"",
    email:"",
    role:"",
  })
 

  const addMember=(memInfo)=> {
  console.log('meminfo=', memInfo)
    const newMember={
      id:Date.now(),
      urname:memInfo.urname,
      email:memInfo.email,
      role:memInfo.role,
    };
    setTeamList([...teamList,newMember])
  }
  

  function handleEdit(id){
    let editInfo={};
    console.log('index in handleEdit=',id)
     editInfo=teamList.filter(item=>{
      return (item.id === id)})  
    console.log('editInfo',editInfo);
    setmemberToEdit(editInfo)
  }
   

//Handle Delete Member -Delete member by index and update State 'teamList'
  function handleDelete(index){
     const newMemList=[...teamList]; //copying
     newMemList.splice(index,1);
     setTeamList(newMemList);   //setting back
  }

   function editMember(editMemberInfo){
      console.log('editMemberinfo=', editMemberInfo);
      const editMemList=[...teamList]; //copying
       const mapNewList= editMemList.map((item)=>{
        if(item.id == editMemberInfo.id){
          return(editMemberInfo) 
        }else return item;
      })
      
      console.log('mapnewList=',mapNewList)
      
     setTeamList(mapNewList);   //setting back
     
 }
 
  return (
    <div className="App">
      <h1>Team Builder App!</h1>
       
      <Forms 
      memberToEdit={memberToEdit[0]}
      addMember={addMember}
      editMember={editMember}
      />
     
    <div>
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
            onClick={(e)=>handleEdit(item.id)}>Edit</button>
            
            <button className="remove"
            type="submit"
             onClick={(e)=>handleDelete(index)}>Remove</button>
            </div>
           </div>
        )
    })}
    </div>
    </div>
  )}

export default App;
