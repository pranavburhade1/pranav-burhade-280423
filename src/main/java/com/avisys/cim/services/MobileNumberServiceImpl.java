package com.avisys.cim.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.avisys.cim.entities.Customer;
import com.avisys.cim.entities.MobileNumber;
import com.avisys.cim.repositories.MobileNumberRepository;

@Service
@Transactional
public class MobileNumberServiceImpl implements MobileNumberService {
	
	
	@Autowired
	private MobileNumberRepository mRepository;
	

	

}
