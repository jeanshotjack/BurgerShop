DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burg (
    id INT NOT NULL AUTO_INCREMENT,
    burgname VARCHAR(30) NOT NULL,
    devour BOOLEAN FALSE,
    PRIMARY KEY (id)
);