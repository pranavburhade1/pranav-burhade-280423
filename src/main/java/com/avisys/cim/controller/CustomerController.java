package com.avisys.cim.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.avisys.cim.dto.ApiResponse;
import com.avisys.cim.entities.Customer;
import com.avisys.cim.entities.MobileNumber;
import com.avisys.cim.services.CustomerService;
import com.avisys.cim.services.MobileNumberService;

@RestController
@RequestMapping("customer")
public class CustomerController {
	
	
	@Autowired
	private CustomerService cService;
	
	@Autowired
	private MobileNumberService mService;
	

	
	
	@GetMapping
	public ResponseEntity<List<Customer>> getCustomers(@RequestParam(required = false) String firstName,
			@RequestParam(required = false) String lastName,
			@RequestParam(required = false) String mobileNumber) {
		
		List<Customer> customers = cService.getCustomers(firstName, lastName, mobileNumber);
	
		 if (customers.isEmpty()) {
		        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null); 
		    } else {
		        return ResponseEntity.status(HttpStatus.OK).body(customers);
		    }
		
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addCustomer(@RequestBody Customer customer) {
		Customer customerFromDB = null;
		try {
		customerFromDB = cService.addCustomer(customer);
		}
		catch(Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse("Unable to create Customer. Mobile number already present.",e.getMessage()));
			
		}
	    return ResponseEntity.status(HttpStatus.OK).body(customerFromDB);
		
	}
	
	@DeleteMapping("/delete") 
	public ResponseEntity<?> deleteByMobileNumber(@RequestParam String mobileNumber) {
		
		List<Customer> customer = cService.getCustomers(null, null, mobileNumber);
		if(customer.isEmpty()) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse("Unable to delete Customer.no customer with that Mobile number."));
		}
		else {
			String msg =  cService.deleteCustomerByMobileNumber(customer.get(0), mobileNumber);
			return ResponseEntity.status(HttpStatus.OK).body(msg);
		}
		
	}
	
	

}
