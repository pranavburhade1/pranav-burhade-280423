package com.avisys.cim.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.avisys.cim.entities.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
	
	@Query("select c from Customer c") 
	public List<Customer> getAllCustomers();
	
	@Query("Select c from Customer c where c.mobileNumber = :mobNo")
	public List<Customer> getCustomerByMobileNumber(@Param("mobNo") String mobileNumber);
	
	@Query("SELECT c FROM Customer c WHERE LOWER(c.firstName) LIKE '%' || LOWER(:fName)||'%'")
	public List<Customer> getCustomerByfName(@Param("fName") String firstName);
	
	@Query("SELECT c FROM Customer c WHERE LOWER(c.lastName) LIKE '%' || LOWER(:lName)||'%'")
	public List<Customer> getCustomerBylName(@Param("lName") String lastName);

	@Query("SELECT c FROM Customer c WHERE c.lastName = :lName and c.firstName = :fName and c.mobileNumber = :mobNo")
	public List<Customer> getCustomerByAllDetails(@Param("fName") String firstName,
			@Param("lName") String lastName,
			@Param("mobNo") String mobileNumber);
	
	@Query("SELECT c FROM Customer c WHERE c.lastName = :lName and c.firstName = :fName")
	public List<Customer> getCustomerByFirstAndLastName(@Param("fName") String firstName,
			@Param("lName") String lastName);
	
	@Query("SELECT c FROM Customer c WHERE c.lastName = :lName and c.mobileNumber = :mobNo")
	public List<Customer>  getCustomerByLastNameAndMobileNumber(
			@Param("lName") String lastName,
			@Param("mobNo") String mobileNumber);
	
	@Query("SELECT c FROM Customer c WHERE c.firstName = :fName and c.mobileNumber = :mobNo")
	public List<Customer> getCustomerByFirstNameAndMobileNumber(@Param("fName") String firstName,
			@Param("mobNo") String mobileNumber);
	
	
}
