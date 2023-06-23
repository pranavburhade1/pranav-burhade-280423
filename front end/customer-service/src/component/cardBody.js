

const CardBody = (props)=> {
   
    return ( <div class="card-body">
    <h5 class="card-title">{props.x.firstName}&nbsp; {props.x.lastName}</h5>
    <hr></hr>
    <p class="card-text" style={{ textAlign: "left" }}>
 
       <b>Mobile Numbers : </b>
       <ul style={{paddingLeft : '30%'}}>{ props.x.mobileNumbers.map((k, index)=> {
             return < div ><li style={{color : 'blue'}}>{k.mobileNumber}</li></div>
        } )
}

</ul> 

    </p>
    

  </div>);

}
export default CardBody;