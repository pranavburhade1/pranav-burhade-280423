package com.avisys.cim.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.avisys.cim.entities.Customer;
import com.avisys.cim.entities.MobileNumber;


@Repository
public interface MobileNumberRepository extends JpaRepository<MobileNumber, Long> {
	

}
