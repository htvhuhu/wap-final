# wap
Download mySQL
https://dev.mysql.com/downloads/installer/

DB Script
https://github.com/butbuiapp/wap/tree/main/Final%20Project/Database

ALTER TABLE `restaurant`.`orderdetail` 
RENAME TO  `restaurant`.`order_detail`;

ALTER TABLE `restaurant`.`dish` 
ADD COLUMN `dishImageURL` VARCHAR(255) NULL AFTER `catId`;



Install dependency to connect to mySQL
npm i mysql2

npm install express-session


