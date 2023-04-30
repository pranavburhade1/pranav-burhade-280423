CREATE SEQUENCE CUSTOMER_SEQ START WITH 1 INCREMENT BY 1;
CREATE TABLE customer (
	id BIGINT DEFAULT NEXTVAL('CUSTOMER_SEQ') NOT NULL,
	first_name varchar(100) not null,
	last_name varchar(100) not null,
	
	PRIMARY KEY (id)
);

CREATE SEQUENCE MOBILENUMBER_SEQ START WITH 1 INCREMENT BY 1;
CREATE TABLE mobile_numbers (
	id BIGINT DEFAULT NEXTVAL('MOBILENUMBER_SEQ') NOT NULL,
	mobile_number varchar(15) not null, 
	customer_id BIGINT,
	
	PRIMARY KEY (id),
	CONSTRAINT customer_id FOREIGN KEY (customer_id) REFERENCES customer(id)
);

ALTER TABLE mobile_numbers ADD CONSTRAINT mobile_number_uk UNIQUE (mobile_number);
