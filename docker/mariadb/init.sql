create database `mydata` charset 'utf8mb4' collate 'utf8mb4_unicode_ci';
CREATE USER 'mydata' IDENTIFIED BY 'passw0rd';
GRANT ALL privileges ON `mydata`.* TO 'mydata';

create table mydata.version (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  value CHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

create table mydata.categories (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  title CHAR(100) NOT NULL,
  prefix CHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

create table mydata.groups (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  category_id MEDIUMINT NOT NULL,
  title CHAR(100) NOT NULL,
  route CHAR(30) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_category
    FOREIGN KEY (category_id) REFERENCES mydata.categories (id)
    ON DELETE CASCADE
    ON UPDATE RESTRICT
);

create table mydata.spending_products (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  date TIMESTAMP NOT NULL,
  shop INT,
  sum FLOAT,
  PRIMARY KEY (id)
);
create table mydata.spending_chemistry (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  date TIMESTAMP NOT NULL,
  shop INT,
  sum FLOAT,
  PRIMARY KEY (id)
);
create table mydata.spending_appliances (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  date TIMESTAMP NOT NULL,
  shop INT,
  sum FLOAT,
  PRIMARY KEY (id)
);
create table mydata.spending_communal (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  date TIMESTAMP NOT NULL,
  shop INT,
  sum FLOAT,
  PRIMARY KEY (id)
);
create table mydata.spending_communication (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  date TIMESTAMP NOT NULL,
  shop INT,
  sum FLOAT,
  PRIMARY KEY (id)
);
create table mydata.spending_clothes (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  date TIMESTAMP NOT NULL,
  shop INT,
  sum FLOAT,
  PRIMARY KEY (id)
);
create table mydata.spending_bicycle (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  date TIMESTAMP NOT NULL,
  shop INT,
  sum FLOAT,
  PRIMARY KEY (id)
);

create table mydata.sport_bicycle (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  date TIMESTAMP NOT NULL,
  duration FLOAT,
  distance FLOAT,
  PRIMARY KEY (id)
);
create table mydata.sport_exercises (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  date TIMESTAMP NOT NULL,
  push_ups INT,
  squats INT,
  abdominal INT,
  pull_ups INT,
  PRIMARY KEY (id)
);
create table mydata.sport_volleyball (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  date TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);
create table mydata.sport_ping_pong (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  date TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);
