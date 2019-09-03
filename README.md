Dependency libraries:
express
body-parser
jsonwebtoken
redis
sequelize

Database:
MySql

/**
* config folder contains all config details
**/

Create Schema(schema name : test):
create schema test;

create user(username : test, password : password):
create user test identified by password;

--- DDL STATEMENTS ---
CREATE TABLE test.account (
    id integer NOT NULL auto_increment,
    auth_id character varying(40),
    username character varying(30),
    primary key(id)
);

CREATE TABLE test.phone_number (
    id integer NOT NULL auto_increment,
    number character varying(40),
    account_id integer,
    primary key(id)
);

ALTER TABLE `test`.`phone_number` 
ADD CONSTRAINT `account_id`
  FOREIGN KEY (`account_id`)
  REFERENCES `test`.`account` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

-- DML STATEMENTS FOR ACCOUNT --
INSERT INTO `test`.`account` (`auth_id`, `username`) VALUES ('20S0KPNOIM', 'plivo1');
INSERT INTO `test`.`account` (`auth_id`, `username`) VALUES ('54P2EOKQ47', 'plivo2');
INSERT INTO `test`.`account` (`auth_id`, `username`) VALUES ('9LLV6I4ZWI', 'plivo3');
INSERT INTO `test`.`account` (`auth_id`, `username`) VALUES ('YHWE3HDLPQ', 'plivo4');
INSERT INTO `test`.`account` (`auth_id`, `username`) VALUES ('6DLH8A25XZ', 'plivo5');

-- DML STATEMENTS FOR PHONE_NUMBER --
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('4924195509198','1');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('4924195509196','1');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('4924195509197','1');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('4924195509195','1');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('4924195509049','1');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('4924195509012','1');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('4924195509193','1');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('4924195509029','1');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('4924195509192','1');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('4924195509194','1');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('31297728125','1');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('3253280312','1');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('3253280311','1');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('3253280315','1');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('3253280313','1');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('3253280329','1');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441224459508','1');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441224980086','1');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441224980087','1');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441224980096','1');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441224980098','1');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441224980099','1');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441224980100','1');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441224980094','2');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441224459426','2');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('13605917249','2');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441224459548','2');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441224459571','2');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441224459598','2');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('13605895047','2');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('14433600975','2');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('16052299352','2');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('13602092244','2');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441224459590','2');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441224459620','2');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441224459660','2');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('234568266473','2');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441224980091','2');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441224980092','2');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441224980089','2');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441224459482','2');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441224980093','2');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441887480051','2');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441873440028','2');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441873440017','3');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441970450009','3');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441235330075','3');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441235330053','3');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441235330044','3');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('441235330078','3');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('34881254103','3');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61871112946','3');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61871112915','3');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61881666904','3');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61881666939','3');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61871112913','3');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61871112901','3');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61871112938','3');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61871112934','3');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61871112902','3');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61881666926','4');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61871705936','4');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61871112920','4');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61881666923','4');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61871112947','4');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61871112948','4');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61871112921','4');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61881666914','4');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61881666942','4');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61871112922','4');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61871232393','4');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61871112916','5');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61881666921','5');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61871112905','5');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61871112937','5');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61361220301','5');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61871112931','5');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61871112939','5');
INSERT INTO `test`.`phone_number` (`number`, `account_id`) VALUES ('61871112940','5');