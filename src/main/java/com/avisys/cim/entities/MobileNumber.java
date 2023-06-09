package com.avisys.cim.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "mobile_numbers")
public class MobileNumber {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "MOBILE_NUMBER", unique = true, nullable = false )
	private String mobileNumber;
	
	 @ManyToOne
	 @JoinColumn(name = "customer_id")
	 @JsonIgnore
	 private Customer customer;
	 
	 public MobileNumber() {
			super();
		}
	 public MobileNumber(Long id, String mobileNumber, Customer customer) {
			super();
			this.id = id;
			this.mobileNumber = mobileNumber;
			this.customer = customer;
		}

	
	
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMobileNumber() {
		return mobileNumber;
	}

	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	@Override
	public String toString() {
		return "MobileNumber [id=" + id + ", mobileNumber=" + mobileNumber ;
	}

	
	 
	 

}
