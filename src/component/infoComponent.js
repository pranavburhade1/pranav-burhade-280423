import { useEffect, useState } from "react";
import CardBody from "./cardBody";
import UpForm from "./UpForm.js";

const InfoComponent = (props) => {
  const { arr, setArr } = props;
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [inflag, setInflag] = useState(true);
  const [upflag, setUpflag] = useState(false);
  const [delflag, setDelflag] = useState(false);

  const handleLinkClick = (index) => {
    setInflag(true);
    setUpflag(false);
    setDelflag(false);
    setSelectedItemIndex(index);
  };
 const handleUpdate = (index) => {
    setInflag(false);
    setUpflag(true);
    setDelflag(false);
    setSelectedItemIndex(index);
 }
 const deleteDetails = ()=> {
    setInflag(false);
    setUpflag(false);
    setDelflag(true);
 }

  return (
    <>
      {arr.map((x, index) => (
        <div key={index} class="card text-center" style={{ width: "38%", marginLeft: '30%' }}>
          <div class="card-header">
            <ul class="nav nav-pills card-header-pills">
              <li class="nav-item">
                <a
                  className={`nav-link ${ inflag ? 'active' : ''}`}
                  onClick={() => handleLinkClick(index)}
                >
                  Contact Info
                </a>
              </li>
              <li class="nav-item">
                <a
                  className={`nav-link ${selectedItemIndex === index && upflag ? 'active' : ''}`}
                  onClick={() => handleUpdate(index)}
                >
                  Update Details
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" style={{color : delflag? 'white' : 'red' , backgroundColor : delflag ? 'red' : ''}} onClick={deleteDetails}>delete</a>
              </li>
            </ul>
          </div>
          {selectedItemIndex === index && upflag ? (
            <UpForm firstName={x.firstName} lastName={x.lastName} mobileNumbers={x.mobileNumbers} />
          ) : (
            <CardBody x={x} />
          )}
        </div>
      ))}
    </>
  );
};

export default InfoComponent;
