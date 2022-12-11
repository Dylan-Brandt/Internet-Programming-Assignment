--mysql -u C4131F22U14 -hcse-mysql-classes-01.cse.umn.edu -P3306 -p C4131F22U14

create table messages (
    messageId integer not null auto_increment primary key,
    messageTitle varchar(50) not null,
    messagerEmail varchar(50) not null,
    messagerUsername varchar(50) not null,
    messageLink varchar(50),
    messageCategory varchar(50) not null,
    messageText varchar(1000) not null
);