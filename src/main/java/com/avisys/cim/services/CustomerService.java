package com.avisys.cim.services;

import java.util.List;

import com.avisys.cim.entities.Customer;

public interface CustomerService {
	
	
	public List<Customer> getCustomers(String firstName, String lastName, String mobileNumber);
	
	public Customer addCustomer(Customer customer);


}
