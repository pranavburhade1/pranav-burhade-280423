import axiosServ from "./axiosServ"


const getCustomer = ()=> {
    
    return axiosServ.get("/customer");

}

const filCustomer = (firstName, lastName ,mobileNumber)=> {

    return axiosServ.get("/customer",{
        params: {
          firstName: firstName,
          lastName: lastName,
          mobileNumber: mobileNumber,
        },
      });

}

const addCustomer = (customer)=> {
 return axiosServ.post('/customer/add', customer);
}

const updateCustomer = (customer)=> {
  return axiosServ.put('/customer/add', customer);
 }

const deleteCustomer = (mobileNumber)=> {
  console.log(mobileNumber);
  return axiosServ.delete('/customer/delete',{ params: {mobileNumber : mobileNumber}} );
}
export default {getCustomer, filCustomer, addCustomer,deleteCustomer, updateCustomer}