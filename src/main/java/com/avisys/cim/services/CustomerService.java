package com.avisys.cim.services;

import java.util.List;
import java.util.Optional;

import com.avisys.cim.entities.Customer;

public interface CustomerService {
	
	
	public List<Customer> getCustomers(String firstName, String lastName, String mobileNumber);
	
	public Customer addCustomer(Customer customer);
	
	public String deleteCustomerByMobileNumber(Customer customer, String mobileNumber);
	
	
	public Customer getCustomer(Long customerId);

}
