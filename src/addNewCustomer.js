import { useState } from "react";
import customerService from "./services/customerService";
import { useNavigate } from "react-router-dom";

const AddNewCustomer = () => {
  
  const [mobileNumbers, setMobileNumbers] = useState([]);
  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  let navigate = useNavigate();

  const addNumber = (event) => {
    const mobileNumber = event.target.value;

    // Check if the mobile number already exists in the mobileNumbers array
    const isNumberExists = mobileNumbers.some(
      (number) => number.mobileNumber === mobileNumber
    );

    // Add the mobile number to the array only if it doesn't exist
    if (!isNumberExists) {
      setMobileNumbers([...mobileNumbers, { mobileNumber }]);
    }
    

  };

  const clicked = () => {
    setMobileNumbers([...mobileNumbers, { mobileNumber: "" }]);
  };

  const done = ()=> {
   const temp = {
    firstName : firstName,
    lastName : lastName,
    mobileNumbers : mobileNumbers
   }
   console.log(temp);
   customerService.addCustomer(temp).then((x)=>{
    navigate('/');
   }).catch((err)=>{
   alert(err);
   })
  
  }

  const handleMobileNumberChange = (index, event) => {
    const updatedNumbers = [...mobileNumbers];
    updatedNumbers[index] = { mobileNumber: event.target.value };
    setMobileNumbers(updatedNumbers);
    
  };

  return (
    <div>
        <h1 className="bg-primary text-white p-2">Add New Customer</h1>

        <div className="container mt-4">
        <div className="form-group">
        <label htmlFor="firstName">Enter your first name:</label>
          <input
            type="text"
            id="firstName"
            className="form-control"
            placeholder="Enter your first name"
            value={firstName}
            onChange={(event)=> {
                setFirstName(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Enter your last name:</label>
          <input
            type="text"
            id="lastName"
            className="form-control"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(event)=> {
                setLastName(event.target.value);
            }}
          />
        </div>
        <label htmlFor="lastName">  Enter your mobile number :</label>
      
        {mobileNumbers.map((number, index) => (
          <div className="form-group" key={index}>
            <input
              type="text"
              placeholder="enter your mobile number"
              className="form-control"
              value={number.mobileNumber}
              onChange={(event) => handleMobileNumberChange(index, event)}
              style={{marginBottom : '2%'}}
            />
          </div>
        ))}
        <br></br>
        <button
          className="bi bi-file-plus btn btn-success"
          onClick={clicked}
          
        > Add Number </button>
        <div id="1"></div>
        <br></br>
        <button className="btn btn-success" onClick={done} >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddNewCustomer;
