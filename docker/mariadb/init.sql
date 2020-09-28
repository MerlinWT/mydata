create database mydata;
create table mydata.version (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  value CHAR(30) NOT NULL,
  PRIMARY KEY (id)
);
insert into mydata.version (value) values ('0.0.1');
