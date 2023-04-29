package com.avisys.cim.services;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.avisys.cim.entities.Customer;
import com.avisys.cim.entities.MobileNumber;
import com.avisys.cim.repositories.CustomerRepository;
import com.avisys.cim.repositories.MobileNumberRepository;

@Service
@Transactional
public class CustomerServiceImpl implements CustomerService{
	
	@Autowired
	private CustomerRepository cRepository;
	
	@Autowired
	private MobileNumberRepository mRepository;

	@Override
	public List<Customer> getCustomers(String firstName, String lastName, String mobileNumber) {
		
		if(firstName == null && lastName == null && mobileNumber == null) {
			System.out.println("sus");
			return cRepository.findAll();
		}
		
		if((firstName != null && lastName != null && mobileNumber != null)) {
			return cRepository.getCustomerByAllDetails(firstName,lastName,mobileNumber);
		}
		if((firstName != null && lastName != null)) {
			System.err.println(firstName + " " + lastName);
			return cRepository.getCustomerByFirstAndLastName(firstName, lastName);
		}
		
		if(mobileNumber != null && lastName != null) {
			return cRepository.getCustomerByLastNameAndMobileNumber(lastName,mobileNumber);
		}
		if(firstName == null && lastName == null) {
			return cRepository.getCustomerByMobileNumber(mobileNumber);
		}
		
		if(mobileNumber != null && firstName != null) {
			return cRepository.getCustomerByFirstNameAndMobileNumber(firstName,mobileNumber);
		}
		if(mobileNumber == null && lastName == null) {
			return cRepository.getCustomerByfName(firstName);
		}
		if(mobileNumber == null && firstName == null) {
			
			return cRepository.getCustomerBylName(lastName);
		}
		
		 return Collections.emptyList();
	}
	
	
	
	public Customer addCustomer(Customer customer) {
		
		for(int i = 0; i < customer.getMobileNumbers().size();i++) {
			customer.getMobileNumbers().get(i).setCustomer(customer);
		}
		Customer customerReturn = cRepository.save(customer);
		
	

		return customerReturn;
		
	}

}
