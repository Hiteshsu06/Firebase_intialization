import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import './taskpage.css';
import {BiEdit} from "react-icons/bi";
import {AiTwotoneDelete} from "react-icons/ai";


const Taskpage = () => {
const [textBox,setText]=useState("");
const [selectBox,setSelectbox]=useState("");
const [input,setInput]=useState({});
const [array,setArray]=useState([]);
const [err,setErr]=useState("");

//Submit Button
const submitHandler=(e)=>{
e.preventDefault();
if(!textBox || !selectBox){
  setErr("*please fill the data")
}
else{
setArray([...array,input]);
setText("");
setSelectbox("");
}
}

//Input change handler
const onchangeHandler=(e)=>{
if(e.target.name==="text"){
  setText(e.target.value)
}
if(e.target.name==="status"){
  setSelectbox(e.target.value)
}
setInput({...input,[e.target.name]: e.target.value});
console.log("task page data here:",input)
}

  return (
    <div className='taskpage'> 
    {/* Form_section */}
    <form onSubmit={submitHandler}>
    <div>
    <textarea name="text"  id="textbox" placeholder='Type here...' cols="30" rows="10" value={textBox} onChange={onchangeHandler}></textarea>
    <div className='select'>
    <select className="form-select" name="status" value={selectBox} id="status" onChange={onchangeHandler}>
                <option value="none">Select</option>
                <option value="PENDING">Pending</option>
                <option value="COMPLETED">Completed</option>
    </select>
    </div>
    </div>
    <div className='highlighter'><h6>{err}</h6></div>
    <div>
      <button className="btn btn-primary">Submit</button>
    </div>
    </form>
   {/* Status_section  */}
    <div className="table0">
      <table>
        <thead>
           <tr>
             <th scope="col">Pending Tasks</th>
             <th scope="col">Completed Tasks</th>
           </tr>
        </thead>
        <tbody>
          <tr>
          <td>5</td>
          <td>5</td>
          </tr>
        </tbody>
      </table>
    </div>
   {/* Pending_section */}
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>hellow</td>
            <td>Pending</td>
            <td><button className='tablebtn'><BiEdit/></button></td>
            <td><button className='tablebtn'><AiTwotoneDelete/></button></td>
          </tr>
        </tbody>
      </table>
    </div>
    {/* Completed_section */}
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>hellow</td>
            <td>Completed</td>
            <td><button className='tablebtn'><BiEdit/></button></td>
            <td><button className='tablebtn'><AiTwotoneDelete/></button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
    <Link className="btn btn-primary" to="/">LogOut</Link>
    </div>
    </div>
  )
}

export default Taskpage