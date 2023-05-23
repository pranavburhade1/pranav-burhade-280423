import { useState } from "react";


const Filter = (props)=> {
    let [firstName, setFirstName] = useState();
  let [lastName, setLastName] = useState();
  let [mobileNumber, setMobileNumber] = useState();
  const search = (event)=> {
    event.preventDefault();
   
    
    props.update(firstName,lastName,mobileNumber);
  }

 

    return (
        <div className="form-control border-success" style={{ margin: '1%', border : '', width :'20%' , marginLeft : '40%'}} >
            <h3>Apply Filter</h3>
            <input type='text' placeholder='enter first name ' value={firstName} style={{ margin: '1%'  }} onChange={(event)=>{
        setFirstName(event.target.value);
            }}/>
            <br></br>
            <input type='text' placeholder='enter last name ' value={lastName} style={{ margin: '1%'  }} onChange={(event)=>{
        setLastName(event.target.value);
            }} />
            <br></br>
            <input type='text' placeholder='enter mobile number ' value={mobileNumber} style={{ margin: '1%'  }} onChange={(event)=>{
        setMobileNumber(event.target.value);
            }} />
            <br></br>
            <button className='btn btn-success' style={{ margin: '1%' }} onClick={search}>Search</button>
            
        </div>

    );
}
export default Filter;