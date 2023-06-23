import React, { useState, useRef, useEffect } from 'react';
import customerService from '../services/customerService';

const MobileNumberInput = ({ mobileNumber, onChange }) => {
  const inputRef = useRef(null);
  const [value, setValue] = useState(mobileNumber);

  useEffect(() => {
    setValue(mobileNumber);
  }, [mobileNumber]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event.target.value);
  };

  return (
    <input
      ref={inputRef}
      type="text"
      className="form-control"
      placeholder="Enter mobile number"
      value={value}
      style={{ margin: '1%' }}
      onChange={handleChange}
    />
  );
};

const UpForm = (props) => {
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [mobileNumbers, setMobileNumbers] = useState(props.mobileNumbers);

  

  const updateMobileNumber = (index, value) => {
    const updatedMobileNumbers = [...mobileNumbers];
    updatedMobileNumbers[index].mobileNumber = value;
    setMobileNumbers(updatedMobileNumbers);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(mobileNumbers);

    const temp = {
      id : props.id,
      firstName : firstName,
      lastName : lastName,
      mobileNumbers : mobileNumbers
    }
    customerService.updateCustomer(temp).then(()=>{
      alert("sucess");
      window.location.reload();
    }).catch((err)=>{
alert(err);
    })
  };

  const clicked = () => {
    setMobileNumbers([...mobileNumbers, { mobileNumber: "" }]);
  };

  return (
    <div className="form-control border-success" style={{ margin: '1%', border: '' }}>
      <h3>Update Form</h3>
      <label htmlFor={1}> First Name: </label>
      <input
        type="text"
        id="1"
        className="form-control"
        placeholder="Enter first name"
        value={firstName}
        style={{ margin: '1%' }}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <br />
      <label htmlFor={2}> Last Name: </label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter last name"
        value={lastName}
        style={{ margin: '1%' }}
        onChange={(event) => setLastName(event.target.value)}
      />
      <br />
      <label htmlFor={3}> Mobile Numbers: </label>
      {mobileNumbers.map((x, index) => (
        <MobileNumberInput
          key={index}
          mobileNumber={x.mobileNumber}
          onChange={(value) => updateMobileNumber(index, value)}
        />
      ))}
      <br />
      <button
          className="bi bi-file-plus btn btn-success"
          onClick={clicked}
          
        > Add Number </button>
      <button className="btn btn-success" style={{ margin: '1%' }} onClick={handleSubmit}>
        Update
      </button>
    </div>
  );
};

export default UpForm;
