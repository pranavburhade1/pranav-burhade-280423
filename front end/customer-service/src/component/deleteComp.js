import { useNavigate } from 'react-router-dom';
import customerService from '../services/customerService';
const DeleteComp = (props)=> {
  
    const deleting = ()=> {
        customerService.deleteCustomer(props.mobileNumbers[0].mobileNumber).then(()=>{
            alert("deleted sucessfully");
            window.location.reload();
        }).catch((err)=>{
            alert(err);
        })
    }
    return (<div>
        <h4>ARE YOU SURE WANT TO DELETE THIS CONTACT ?</h4>
        <button className="btn btn-primary" style={{margin : '5%'}} onClick={deleting}>YES</button>
        <button className="btn btn-danger" style={{margin : '5%'}} onClick={()=>props.handleLinkClick()}>NO</button>
    </div>);
}
export default DeleteComp;