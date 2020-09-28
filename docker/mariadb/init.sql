create database `mydata`;
CREATE USER 'mydata' IDENTIFIED BY 'passw0rd';
GRANT ALL privileges ON `mydata`.* TO 'mydata';

create table mydata.version (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  value CHAR(30) NOT NULL,
  PRIMARY KEY (id)
);
insert into mydata.version (value) values ('0.0.1');
