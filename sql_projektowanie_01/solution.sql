CREATE DATABASE vod CHARACTER SET utf8mb4 COLLATE utf8mb4_polish_ci;

USE vod;

CREATE TABLE user (
	id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(45),
    email VARCHAR(45) NOT NULL UNIQUE,
    password VARCHAR(45) NOT NULL
);

CREATE TABLE subscription (
	id INT PRIMARY KEY AUTO_INCREMENT,
    start_date DATETIME NOT NULL,
    end_time DATETIME NOT NULL,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE movie_category (
	id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL
);

CREATE TABLE movie (
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(2000),
    rating INT NOT NULL,
    year INT NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES movie_category(id)
);

CREATE TABLE watch_progress (
	user_id INT NOT NULL,
    movie_id INT NOT NULL,
    watch_time INT NOT NULL,
    PRIMARY KEY (user_id, movie_id),
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (movie_id) REFERENCES movie(id)
);