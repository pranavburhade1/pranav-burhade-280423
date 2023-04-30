package com.avisys.cim.services;

import java.util.List;

import com.avisys.cim.entities.Customer;
import com.avisys.cim.entities.MobileNumber;

public interface MobileNumberService {
	
	public MobileNumber addNumber(MobileNumber mobileNumber);
	
	public MobileNumber getMobileNumber(String number);
	
	public String deleteByMobileNumber(MobileNumber mobileNumber);

}
