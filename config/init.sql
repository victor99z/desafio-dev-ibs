CREATE TABLE users(
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL,
	gender VARCHAR(50) NOT NULL,
	birthdate DATE NOT NULL, /* yyyy-mm-dd */
	marital_status VARCHAR(50) NOT NULL
);

CREATE TABLE address(
	id SERIAL PRIMARY KEY,
	user_id INT NOT NULL,
	street VARCHAR(100) NOT NULL,
	number INT NOT NULL,
	neighborhood VARCHAR(100) NOT NULL,
	city VARCHAR(100) NOT NULL,
	state VARCHAR(100) NOT NULL,
	country VARCHAR(100) NOT NULL,
	postal_code VARCHAR(100) NOT NULL,
	more_details VARCHAR(100),
	FOREIGN KEY (user_id) REFERENCES users(id)
);


DO $$
BEGIN
	INSERT INTO users (name, gender, birthdate, marital_status)
	VALUES
		('John Doe', 'Male', '1990-01-01', 'Single'),
		('Jane Doe', 'Female', '1992-02-02', 'Married'),
		('Jack Doe', 'Unknown', '1993-03-03', 'Single'),
		('Jill Doe', 'Female', '1994-04-04', 'Married');

	INSERT INTO address (user_id, street, number, neighborhood, city, state, country, more_details, postal_code)
	VALUES
		(1, 'Main Street', 123, 'Downtown', 'New York', 'New York', 'USA', 'Apartment 1', '10001'),
		(2, 'Second Street', 456, 'Uptown', 'New York', 'New York', 'USA', 'Apartment 2', '10002'),
		(3, 'Third Street', 789, 'Midtown', 'New York', 'New York', 'USA', 'Apartment 3', '10003'),
		(4, 'Fourth Street', 1011, 'Downtown', 'New York', 'New York', 'USA', 'Apartment 4', '10004');
END;
$$;


