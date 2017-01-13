CREATE DATABASE burgers_db

USE burgers_db

CREATE TABLE burgers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(255) NOT NULL,
    devoured tinyint(0),
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);