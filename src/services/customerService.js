import axiosServ from "./axiosServ"


const getCustomer = ()=> {
    
    return axiosServ.get("/customer");

}

const filCustomer = (firstName, lastName ,mobileNumber)=> {
   

    // if(firstName == "") {firstName = am}
    // if(lastName == "") {lastName = am}
    // if(mobileNumber == "") {mobileNumber = am}
    return axiosServ.get("/customer",{
        params: {
          firstName: firstName,
          lastName: lastName,
          mobileNumber: mobileNumber,
        },
      });

}
export default {getCustomer, filCustomer}