import { useEffect, useState } from "react";
import CardBody from "./cardBody";
import UpForm from "./UpForm.js";
import DeleteComp from "./deleteComp";

const InfoComponent = (props) => {
  const { arr, setArr } = props;
  const [selectedItemIndex, setSelectedItemIndex] = useState();
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
 
    setUpflag(true);
    setDelflag(false);
    setSelectedItemIndex(index);
 }
 const deleteDetails = (index)=> {
  setSelectedItemIndex(index);
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
                  className={`nav-link ${((upflag === false && delflag === false) || selectedItemIndex != index) && inflag ? 'active' : ''}`}
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
                <a class="nav-link" style={{color :  selectedItemIndex === index && delflag ? 'white' : 'red' , backgroundColor : selectedItemIndex === index && delflag ? 'red' : ''}} onClick={()=>deleteDetails(index) }>delete</a>
              </li>
            </ul>
          </div>
          {selectedItemIndex === index && upflag && 
            <UpForm id ={x.id} firstName={x.firstName} lastName={x.lastName} mobileNumbers={x.mobileNumbers} />}
           
           {(upflag ===false || selectedItemIndex != index) && inflag &&  <CardBody x={x} />}
           {selectedItemIndex === index && delflag && <DeleteComp handleLinkClick={handleLinkClick} mobileNumbers= {x.mobileNumbers}/>}
          
         
        </div>
      ))}
    </>
  );
};

export default InfoComponent;
