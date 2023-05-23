
const UpForm = (props)=> {
    return ( <div className="form-control border-success" style={{ margin: '1%', border : '' }} >
    <h3>Update Form</h3>
    <input type='text' placeholder='enter first name ' value={props.firstName} style={{ margin: '1%'  }} />
    <br></br>
    <input type='text' placeholder='enter last name ' value={props.lastName} style={{ margin: '1%'  }}  />
    <br></br>
    {props.mobileNumbers.map((x)=> 
    <input type='text' placeholder='enter mobile number ' value={x.mobileNumber} style={{ margin: '1%'  }} 
  />)}
    <br></br>
    <button className='btn btn-success' style={{ margin: '1%' }} >Update</button>
    
</div>);
}
export default UpForm;