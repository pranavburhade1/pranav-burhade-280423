import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import InfoComponent from './component/infoComponent';
import customerService from './services/customerService'
import Filter from './component/filter';

function App() {
  
  const clicked = (event) => {
   
  };


  useEffect(()=>{
  
    console.log("aa");
    customerService.getCustomer().then((x)=>{
      setArr(x.data);
    }).catch((err)=>{
      alert(err);
    })
  },[]);

  const update = (firstName, lastName ,mobileNumber)=> {
  
    console.log(firstName);
    customerService.filCustomer(firstName, lastName ,mobileNumber).then((x)=>{
      setArr(x.data);
    }).catch((err)=>{
      alert(err);
    })

  }
  const fiterOn = ()=> {
    if(flag) {
      setFlag(false);
    }
    else{
      setFlag(true);
    }

  }

  let [arr, setArr] = useState([
  ]); 
  let [flag, setFlag] = useState(false);

  return (
    <div className="App" >
      <h1 className="border border-danger" style={{ color: "red", backgroundColor: "skyblue", padding: "20px", width: "50%", marginLeft: "25%" }}>Customer Service</h1>
     {flag && <Filter update={update}  />}
     <button type="button" onClick={fiterOn} class="btn btn-info"> Apply Filter</button>
      
      <br></br>


      <button className='btn btn-green' style={{ margin: '1%' }} onClick={clicked}>Add New</button>
      <InfoComponent arr={arr} setArr={setArr}  /> {/* Pass setArr as a prop */}
    </div>
  );
}

export default App;