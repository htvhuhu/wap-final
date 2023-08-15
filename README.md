# wap
Download mySQL
https://dev.mysql.com/downloads/installer/

**DB Script**

https://github.com/butbuiapp/wap/tree/main/Final%20Project/Database

**Update tables**

ALTER TABLE `restaurant`.`orderdetail` RENAME TO `restaurant`.`order_detail`;
ALTER TABLE `restaurant`.`dish` ADD COLUMN `dishImageURL` VARCHAR(255) NULL AFTER `catId`;

ALTER TABLE `restaurant`.`dish` CHANGE COLUMN `discription` `description` VARCHAR(500) NULL DEFAULT NULL ;
ALTER TABLE `restaurant`.`dish` CHANGE COLUMN `ingredient` `ingredients` VARCHAR(100) NULL DEFAULT NULL ;

**Install dependency to connect to mySQL**

npm i mysql

npm install express-session

** ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
Execute the following query in MYSQL Workbench

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
flush privileges;

******************* UPDATE DATA **********************************

INSERT INTO `category` VALUES (1,'BREAKFAST'),(2,'LUNCH'),(3,'DINNER'),(4,'DRINK');

INSERT INTO `dish` VALUES (1,'Phở','A Vietnamese noodle soup consisting of broth, rice noodles, and meat, primarily beef or chicken.',10.99,'Rice noodles, beef slices, onions, ginger, beef bone broth',1,'./images/products/pho.jpg'),(2,'Bánh Mì','A Vietnamese sandwich that consists of a French baguette filled with a variety of ingredients.',5.99,'Baguette, pork, pickled vegetables, pâté, cilantro, chili',1,'./images/products/banhmi.jpg'),(3,'Gỏi Cuốn','Vietnamese spring roll or cold roll; translucent rice paper rolled around greens, coriander, minced pork, shrimp, or crab.',7.99,'Rice paper, shrimp, herbs, pork, rice vermicelli',3,'./images/products/goi_cuon.jpg'),(4,'Bún Thịt Nướng','A popular Vietnamese dish made with grilled pork, vermicelli noodles, and herbs.',8.99,'Vermicelli noodles, grilled pork, peanuts, shallots, fried onions',2,'./images/products/bun_thit_nuong.jpg'),(5,'Cà Ri Gà','Vietnamese chicken curry made with succulent chicken pieces, potatoes and carrots.',9.99,'Chicken, potatoes, carrots, coconut milk, lemongrass, curry powder',2,'./images/products/cari_ga.jpg'),(6,'Bánh Xèo','Crispy Vietnamese pancake made with rice flour, turmeric, shrimp, and bean sprouts.',6.99,'Rice flour, turmeric, shrimp, bean sprouts, onions',3,'./images/products/banh_xeo.jpg'),(7,'Bún Riêu','A Vietnamese meat rice vermicelli soup with crab and tomato.',9.49,'Vermicelli, crab, tomatoes, tofu, fried shallots',2,'./images/products/bun_rieu.jpg'),(8,'Bánh Canh','Thick Vietnamese noodle soup made with tapioca flour or a mixture of rice and tapioca flour.',8.49,'Tapioca noodles, shrimp, crab, pork, fried shallots',1,'./images/products/banh_canh_cua.png'),(9,'Hủ Tiếu','A noodle soup with a pork stock and seafood.',9.99,'Rice noodles, pork, shrimp, garlic, bone broth',1,'./images/products/hu_tieu.jpg'),(10,'Chả Giò','Vietnamese fried spring roll made with ground meat and wrapped in rice paper.',5.49,'Ground pork, shrimp, mushrooms, rice paper, vermicelli',3,'./images/products/cha_gio.webp'),(11,'Hot cafe','Vietnamese hot coffee',4.99,NULL,4,'./images/products/cafe_nong.jpg'),(12,'Ice cafe','Vietnamese ice coffee',4.99,NULL,4,'./images/products/cafe_sua_da.jpg');

**Update 8/15/2023 **

ALTER TABLE `restaurant`.`dish` 
ADD COLUMN `preprationTime` INT NULL AFTER `dishImageURL`,
ADD COLUMN `cookingTime` INT NULL AFTER `preprationTime`,
ADD COLUMN `servings` INT NULL AFTER `cookingTime`;


CREATE TABLE `restaurant`.`nutrition` (
  `nutId` INT NOT NULL AUTO_INCREMENT,
  `dishId` INT NOT NULL,
  `nutrition` VARCHAR(45) NOT NULL,
  `value` DECIMAL(5,2) NOT NULL DEFAULT 0,
  PRIMARY KEY (`nutId`));



UPDATE `restaurant`.`dish` SET `preprationTime` = '4', `cookingTime` = '3', `servings` = '3' WHERE (`dishId` = '1');
UPDATE `restaurant`.`dish` SET `preprationTime` = '5', `cookingTime` = '3', `servings` = '4' WHERE (`dishId` = '2');
UPDATE `restaurant`.`dish` SET `preprationTime` = '6', `cookingTime` = '3', `servings` = '3' WHERE (`dishId` = '3');
UPDATE `restaurant`.`dish` SET `preprationTime` = '6', `cookingTime` = '3', `servings` = '3' WHERE (`dishId` = '4');
UPDATE `restaurant`.`dish` SET `preprationTime` = '45', `cookingTime` = '3', `servings` = '4' WHERE (`dishId` = '5');
UPDATE `restaurant`.`dish` SET `preprationTime` = '34' WHERE (`dishId` = '6');
UPDATE `restaurant`.`dish` SET `preprationTime` = '34' WHERE (`dishId` = '7');
UPDATE `restaurant`.`dish` SET `preprationTime` = '45' WHERE (`dishId` = '8');
UPDATE `restaurant`.`dish` SET `preprationTime` = '5' WHERE (`dishId` = '9');
UPDATE `restaurant`.`dish` SET `preprationTime` = '4' WHERE (`dishId` = '10');
UPDATE `restaurant`.`dish` SET `preprationTime` = '4' WHERE (`dishId` = '11');
UPDATE `restaurant`.`dish` SET `preprationTime` = '45' WHERE (`dishId` = '12');


INSERT INTO `restaurant`.`nutrition` (`dishId`, `nutrition`, `value`) VALUES ('1', 'Calories', '219.9');
INSERT INTO `restaurant`.`nutrition` (`dishId`, `nutrition`, `value`) VALUES ('1', 'Total Fat', '10.7 g');
INSERT INTO `restaurant`.`nutrition` (`dishId`, `nutrition`, `value`) VALUES ('1', 'Saturated Fat', '2.2 g');
INSERT INTO `restaurant`.`nutrition` (`dishId`, `nutrition`, `value`) VALUES ('1', 'Cholesterol', '37.4 mg');
INSERT INTO `restaurant`.`nutrition` (`dishId`, `nutrition`, `value`) VALUES ('1', 'Sodium', '120.3 mg');
INSERT INTO `restaurant`.`nutrition` (`dishId`, `nutrition`, `value`) VALUES ('1', 'Potassium', '32.8 mg');
INSERT INTO `restaurant`.`nutrition` (`dishId`, `nutrition`, `value`) VALUES ('1', 'Total Carbohydrate', '22.3 g');
INSERT INTO `restaurant`.`nutrition` (`dishId`, `nutrition`, `value`) VALUES ('1', 'Sugars', '8.4 g');
INSERT INTO `restaurant`.`nutrition` (`dishId`, `nutrition`, `value`) VALUES ('1', 'Protein', '7.9 g');


