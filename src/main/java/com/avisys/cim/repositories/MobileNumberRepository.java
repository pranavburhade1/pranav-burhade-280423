package com.avisys.cim.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.avisys.cim.entities.MobileNumber;


@Repository
public interface MobileNumberRepository extends JpaRepository<MobileNumber, Long> {
		public MobileNumber findByMobileNumber(String number);
		

		
		@Modifying
		@Query("delete from MobileNumber m where m.id = :mobId")
		public void removeBYId(@Param("mobId") Long mobileNumber);

}
