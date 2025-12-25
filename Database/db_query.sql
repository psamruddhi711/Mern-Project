show databases;

create database sunbeam_project;

use sunbeam_project;

CREATE TABLE users(
email VARCHAR(255) primary KEY,
password VARCHAR(255),
role enum ('ADMIN' ,'STUDENT')
);

CREATE table courses(
course_id int PRIMARY KEY,
course_name varchar(255),
description VARCHAR(1000),
fees int,
start_date date,
end_date date,
video_expiry_days int
);

CREATE TABLE Students(
reg_no int primary key ,
name varchar(255),
email varchar(255),
course_id int,
mobile_no int(10),
profile_pic blob,
foreign key (email) references users(email),
foreign key (course_id) references courses(course_id)
);

CREATE TABLE videos(
video_id int primary key,
course_id int,
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
('admin2@gmail.com', '123', 'ADMIN');

INSERT INTO courses (course_id, course_name, description, fees, start_date, end_date, video_expiry_days) VALUES
(1, 'Java Basics', 'Core Java course', 5000, '2024-01-10', '2024-03-10', 30),
(2, 'Python', 'Python programming', 4500, '2024-02-01', '2024-04-01', 25),
(3, 'Web Dev', 'HTML CSS JS', 6000, '2024-03-05', '2024-05-05', 40),
(4, 'SQL Mastery', 'Database course', 4000, '2024-01-20', '2024-03-20', 20);

INSERT INTO students (reg_no, name, email, course_id, mobile_no, profile_pic) VALUES
(101, 'John Doe', 'john@gmail.com', 1, 987654321, NULL),
(102, 'Riya Shah', 'riya@gmail.com', 2, 876543210, NULL),
(103, 'Sam Patel', 'sam@gmail.com', 3, 765432109, NULL);

INSERT INTO videos (video_id, course_id, title, description , youtube_url, added_at) VALUES
(1, 1, 'Intro', 'Introduction to Java', 'https://youtu.be/java1', '2024-01-15'),
(2, 1, 'OOP', 'Object Oriented Concepts', 'https://youtu.be/java2', '2024-01-20'),
(3, 2, 'Basics', 'Python basics video', 'https://youtu.be/python1', '2024-02-05'),
(4, 3, 'HTML', 'HTML introduction', 'https://youtu.be/web1', '2024-03-10');


INSERT INTO courses (course_id, course_name, description, fees, start_date, end_date, video_expiry_days) VALUES
(5, ' Basics', 'Core  course', 9000, '2025-12-25', '2025-12-30', 30);

INSERT INTO students (reg_no, name, email, course_id, mobile_no, profile_pic) VALUES
(104, 'dhurandar', 'jack@gmail.com', 5, 987654321, NULL);

INSERT INTO users (email, password, role) VALUES
('jack2@gmail.com', 'jack123', 'student');

INSERT INTO videos (video_id, course_id, title, description , youtube_url, added_at) VALUES
(5, 5, 'OOP', 'Object Oriented Concepts', 'https://youtu.be/java2', '2025-12-11');


