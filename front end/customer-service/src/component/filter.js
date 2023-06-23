import { useState } from "react";

const Filter = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const search = (event) => {
    event.preventDefault();
    props.update(firstName, lastName, mobileNumber);
  };

  return (
    <div className="form-control border-success" style={{ margin: '1%', border: '', width: '20%', marginLeft: '40%' }}>
      <h3>Apply Filter</h3>
      <input
        type="text"
        placeholder="Enter first name"
        value={firstName}
        className="form-control"
        style={{ margin: '1%', width: '80%' }}
        onChange={(event) => {
          setFirstName(event.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Enter last name"
        value={lastName}
        className="form-control"
        style={{ margin: '1%', width: '80%' }}
        onChange={(event) => {
          setLastName(event.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Enter mobile number"
        value={mobileNumber}
        className="form-control"
        style={{ margin: '1%', width: '80%' }}
        onChange={(event) => {
          setMobileNumber(event.target.value);
        }}
      />
      <br />
      <button className="btn btn-success" style={{ margin: '1%', width: '30%' }} onClick={search}>
        Search
      </button>
    </div>
  );
};

export default Filter;
