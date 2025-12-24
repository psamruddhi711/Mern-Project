DROP TABLE IF EXISTS users;
CREATE TABLE users(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(20),
    email VARCHAR(50),
    password VARCHAR(100),
    mobile CHAR(10)
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

CREATE table courses(
course_id int PRIMARY KEY,
course_name varchar(255),
description VARCHAR(1000),
fees int,
start_date date,
end_date date,
video_expiry_days int
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

