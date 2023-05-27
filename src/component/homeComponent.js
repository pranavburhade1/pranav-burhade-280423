import { useEffect, useState } from 'react';
import Filter from './filter';
import InfoComponent from './infoComponent';
import customerService from '../services/customerService';
import { useHref, useNavigate} from 'react-router-dom';

const HomeComponrnts = ()=> {
    let navigate = useNavigate();
    const clicked = (event) => {
       
        navigate('/addNew')
   
    };

  
    useEffect(()=>{
    
      console.log("aa");
      customerService.getCustomer().then((x)=>{
        console.log(  x.data[0]);
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

    return(<div>
         <h1 className="border border-danger" style={{ color: "red", backgroundColor: "skyblue", padding: "20px"}}>Customer Service</h1>
     {flag && <Filter update={update}  />}
     <button type="button" onClick={fiterOn} class="btn btn-info"> Apply Filter</button>
      
      <br></br>


      <button className='btn btn-green' style={{ margin: '1%' ,backgroundColor : 'green', color : 'white' }} onClick={clicked}>Add New</button>
      <InfoComponent arr={arr} setArr={setArr}  /> {/* Pass setArr as a prop */}
    </div>);
}

export default HomeComponrnts