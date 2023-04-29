package com.avisys.cim.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.avisys.cim.entities.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {
	
	@Query("select c from Customer c") 
	public List<Customer> getAllCustomers();
	
	@Query("Select c from Customer c JOIN c.mobileNumbers m where m.mobileNumber = :mobNo")
	public List<Customer> getCustomerByMobileNumber(@Param("mobNo") String mobileNumber);
	
	@Query("SELECT c FROM Customer c WHERE LOWER(c.firstName) LIKE '%' || LOWER(:fName)||'%'")
	public List<Customer> getCustomerByfName(@Param("fName") String firstName);
	
	@Query("SELECT c FROM Customer c WHERE LOWER(c.lastName) LIKE '%' || LOWER(:lName)||'%'")
	public List<Customer> getCustomerBylName(@Param("lName") String lastName);

	@Query("SELECT c FROM Customer c JOIN c.mobileNumbers m WHERE c.firstName = :firstName AND c.lastName = :lastName AND m.mobileNumber = :mobileNumber")
	public List<Customer> getCustomerByAllDetails(@Param("firstName") String firstName, @Param("lastName") String lastName, @Param("mobileNumber") String mobileNumber);
	
	@Query("SELECT c FROM Customer c WHERE c.lastName = :lName and c.firstName = :fName")
	public List<Customer> getCustomerByFirstAndLastName(@Param("fName") String firstName,
			@Param("lName") String lastName);
	
	@Query("SELECT c FROM  Customer c JOIN c.mobileNumbers m WHERE c.lastName = :lName and m.mobileNumber = :mobNo")
	public List<Customer>  getCustomerByLastNameAndMobileNumber(
			@Param("lName") String lastName,
			@Param("mobNo") String mobileNumber);
	
	@Query("SELECT c FROM Customer c JOIN c.mobileNumbers m WHERE c.firstName = :fName and m.mobileNumber = :mobNo")
	public List<Customer> getCustomerByFirstNameAndMobileNumber(@Param("fName") String firstName,
			@Param("mobNo") String mobileNumber);
	
	
}
