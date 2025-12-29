show databases;
drop database sunbeam_project;
create database sunbeam_project;

use sunbeam_project;

CREATE TABLE users(
email VARCHAR(255) primary KEY,
password VARCHAR(255),
role enum ('ADMIN' ,'STUDENT')
);

CREATE table courses(
course_id int PRIMARY KEY AUTO_INCREMENT,
course_name varchar(255),
description VARCHAR(1000),
fees int,
start_date date,
end_date date,
video_expiry_days int
);

CREATE TABLE Students(
reg_no int primary key AUTO_INCREMENT ,
name varchar(255) NOT NULL ,
email varchar(255) NOT NULL,
course_id int,
mobile_no int(10),
profile_pic blob,
foreign key (email) references users(email),
foreign key (course_id) references courses(course_id)
);

CREATE TABLE videos(
video_id int primary key AUTO_INCREMENT,
course_id int NOT NULL,
title varchar(255),
description varchar(1000),
youtube_url varchar(5000),
added_at date,
foreign key (course_id) references courses(course_id)
);

INSERT INTO users (email, password, role) VALUES
('admin@gmail.com', 'admin123', 'admin'),
('john@gmail.com', 'john123', 'student'),
('riya@gmail.com', 'riya123', 'student'),
('sam@gmail.com', 'sam123', 'student');

INSERT INTO users (email, password, role) VALUES
('jack@gmail.com', '12345', 'student');

INSERT INTO users (email, password, role) VALUES
('admin2@gmail.com', '123', 'ADMIN');

INSERT INTO courses (course_name, description, fees, start_date, end_date, video_expiry_days) VALUES
('Java Basics', 'Core Java course', 5000, '2024-01-10', '2024-03-10', 30),
('Python', 'Python programming', 4500, '2024-02-01', '2024-04-01', 25),
('Web Dev', 'HTML CSS JS', 6000, '2024-03-05', '2024-05-05', 40),
('SQL Mastery', 'Database course', 4000, '2024-01-20', '2024-03-20', 20);

INSERT INTO students ( name, email, course_id, mobile_no, profile_pic) VALUES
( 'John Doe', 'john@gmail.com', 1, 987654321, NULL),
( 'Riya Shah', 'riya@gmail.com', 2, 876543210, NULL),
( 'Sam Patel', 'sam@gmail.com', 3, 765432109, NULL);

INSERT INTO videos ( course_id, title, description , youtube_url, added_at) VALUES
(1,'Intro', 'Introduction to Java', 'https://youtu.be/java1', '2024-01-15'),
(2,'OOP', 'Object Oriented Concepts', 'https://youtu.be/java2', '2024-01-20'),
(3,'Basics', 'Python basics video', 'https://youtu.be/python1', '2024-02-05'),
(4,'HTML', 'HTML introduction', 'https://youtu.be/web1', '2024-03-10');

INSERT INTO courses (course_id, course_name, description, fees, start_date, end_date, video_expiry_days) VALUES
(6,' Basics', 'Core  course', 9000, '2025-12-25', '2025-12-30', 30);

INSERT INTO students (name, email, course_id, mobile_no, profile_pic) VALUES
('dhurandar', 'jack@gmail.com', 5, 987654321, NULL);

INSERT INTO users (email, password, role) VALUES
('jack2@gmail.com', 'jack123', 'student');

INSERT INTO videos (course_id, title, description , youtube_url, added_at) VALUES
(5, 'OOP', 'Object Oriented Concepts', 'https://youtu.be/java2', '2025-12-11');

INSERT INTO courses (course_name, description, fees, start_date, end_date, video_expiry_days) VALUES
('Basics', 'Core  course', 9000, '2025-12-12', '2026-01-20', 30);

select * from videos;

select * from Students;

select * from users;

INSERT INTO users (email, password, role) VALUES
('rahul.sharma@gmail.com', 'rahul123', 'student'),
('priya.patil@gmail.com', 'priya123', 'student'),
('amit.verma@gmail.com', 'amit123', 'student'),
('admin@sunbeam.in', 'admin123', 'admin');

INSERT INTO courses
(course_name, description, fees, start_date, end_date, video_expiry_days) VALUES
('Core Java Programming', 'Java fundamentals and OOP concepts', 30000,
 '2025-01-15', '2025-05-15', 60),
 ('Python for Data Science', 'Python, NumPy, Pandas, ML basics', 35000,
 '2025-02-01', '2025-06-01', 90),
('MERN Stack Development', 'MongoDB, Express, React, Node.js', 40000,
 '2025-03-01', '2025-08-01', 120);
 
 
INSERT INTO videos
(course_id, title, description, youtube_url, added_at) VALUES
(1, 'Java Introduction', 'Overview of Java and JVM',
 'https://youtu.be/eIrMbAQSU34', '2025-01-16'),
(5, 'OOP Concepts', 'Encapsulation, Inheritance, Polymorphism',
 'https://youtu.be/BSVKUk58K6U', '2025-01-18'),
(3, 'Python Basics', 'Python syntax and variables',
 'https://youtu.be/rfscVS0vtbw', '2025-02-03'),
(4, 'React Introduction', 'React basics and JSX',
 'https://youtu.be/bMknfKXIFA8', '2025-03-05');
