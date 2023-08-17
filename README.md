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

ALTER TABLE `restaurant`.`nutrition` 
CHANGE COLUMN `value` `value` VARCHAR(45) NOT NULL DEFAULT '0.00' ;




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



**update nutrition**
DELETE FROM `restaurant`.`nutrition` where nutId between 0 and 1000000;

INSERT INTO `restaurant`.`nutrition` (`nutId`, `dishId`, `nutrition`, `value`)
VALUES
-- Nutrition for Phở
(1, 1, 'Calories', 219.90),
(2, 1, 'Total Fat', 10.7),
(3, 1, 'Saturated Fat', 2.2),
(4, 1, 'Cholesterol', 37.4),
(5, 1, 'Sodium', 120.3),
(6, 1, 'Potassium', 32.8),
(7, 1, 'Total Carbohydrate', 22.3),
(8, 1, 'Sugars', 8.4),
(9, 1, 'Protein', 7.9),
(10, 1, 'Dietary Fiber', 1.5),

-- Nutrition for Bánh Mì
(11, 2, 'Calories', 250),
(12, 2, 'Total Fat', 8),
(13, 2, 'Saturated Fat', 2),
(14, 2, 'Cholesterol', 25),
(15, 2, 'Sodium', 500),
(16, 2, 'Potassium', 50),
(17, 2, 'Total Carbohydrate', 30),
(18, 2, 'Sugars', 5),
(19, 2, 'Protein', 10),
(20, 2, 'Dietary Fiber', 2),

-- Nutrition for Gỏi Cuốn
(21, 3, 'Calories', 150.90),
(22, 3, 'Total Fat', 5.7),
(23, 3, 'Saturated Fat', 1.2),
(24, 3, 'Cholesterol', 20.4),
(25, 3, 'Sodium', 110.3),
(26, 3, 'Potassium', 30.8),
(27, 3, 'Total Carbohydrate', 20.3),
(28, 3, 'Sugars', 3.4),
(29, 3, 'Protein', 6.9),
(30, 3, 'Dietary Fiber', 1.2),

-- Nutrition for Bún Thịt Nướng
(31, 4, 'Calories', 260),
(32, 4, 'Total Fat', 9),
(33, 4, 'Saturated Fat', 2.5),
(34, 4, 'Cholesterol', 30),
(35, 4, 'Sodium', 520),
(36, 4, 'Potassium', 55),
(37, 4, 'Total Carbohydrate', 32),
(38, 4, 'Sugars', 6),
(39, 4, 'Protein', 11),
(40, 4, 'Dietary Fiber', 2.5),

-- Nutrition for Cà Ri Gà
(41, 5, 'Calories', 280),
(42, 5, 'Total Fat', 11),
(43, 5, 'Saturated Fat', 3),
(44, 5, 'Cholesterol', 40),
(45, 5, 'Sodium', 530),
(46, 5, 'Potassium', 60),
(47, 5, 'Total Carbohydrate', 34),
(48, 5, 'Sugars', 7),
(49, 5, 'Protein', 12),
(50, 5, 'Dietary Fiber', 3),

-- Nutrition for Bánh Xèo
(51, 6, 'Calories', 230.90),
(52, 6, 'Total Fat', 8.7),
(53, 6, 'Saturated Fat', 1.9),
(54, 6, 'Cholesterol', 25.4),
(55, 6, 'Sodium', 210.3),
(56, 6, 'Potassium', 40.8),
(57, 6, 'Total Carbohydrate', 28.3),
(58, 6, 'Sugars', 4.4),
(59, 6, 'Protein', 7.5),
(60, 6, 'Dietary Fiber', 1.8),

-- Nutrition for Bún Riêu
(61, 7, 'Calories', 250),
(62, 7, 'Total Fat', 9.5),
(63, 7, 'Saturated Fat', 2.4),
(64, 7, 'Cholesterol', 30.5),
(65, 7, 'Sodium', 520.5),
(66, 7, 'Potassium', 55.5),
(67, 7, 'Total Carbohydrate', 30.5),
(68, 7, 'Sugars', 5.5),
(69, 7, 'Protein', 10.5),
(70, 7, 'Dietary Fiber', 2.6),

-- Nutrition for Bánh Canh
(71, 8, 'Calories', 240),
(72, 8, 'Total Fat', 8.5),
(73, 8, 'Saturated Fat', 2.3),
(74, 8, 'Cholesterol', 28.5),
(75, 8, 'Sodium', 510.5),
(76, 8, 'Potassium', 50.5),
(77, 8, 'Total Carbohydrate', 29.5),
(78, 8, 'Sugars', 4.8),
(79, 8, 'Protein', 9.5),
(80, 8, 'Dietary Fiber', 2.4),

-- Nutrition for Hủ Tiếu
(81, 9, 'Calories', 260),
(82, 9, 'Total Fat', 10),
(83, 9, 'Saturated Fat', 2.5),
(84, 9, 'Cholesterol', 32),
(85, 9, 'Sodium', 530),
(86, 9, 'Potassium', 58),
(87, 9, 'Total Carbohydrate', 31),
(88, 9, 'Sugars', 5),
(89, 9, 'Protein', 11),
(90, 9, 'Dietary Fiber', 2.5),
-- Nutrition for Chả Giò
-- Nutrition for Chả Giò
(91, 10, 'Calories', 240),
(92, 10, 'Total Fat', 10),
(93, 10, 'Saturated Fat', 2.8),
(94, 10, 'Cholesterol', 35),
(95, 10, 'Sodium', 510),
(96, 10, 'Potassium', 50),
(97, 10, 'Total Carbohydrate', 30),
(98, 10, 'Sugars', 5.5),
(99, 10, 'Protein', 9),
(100, 10, 'Dietary Fiber', 2),

-- Nutrition for Hot cafe
(101, 11, 'Calories', 100),
(102, 11, 'Total Fat', 2),
(103, 11, 'Saturated Fat', 0.5),
(104, 11, 'Cholesterol', 5),
(105, 11, 'Sodium', 10),
(106, 11, 'Potassium', 20),
(107, 11, 'Total Carbohydrate', 20),
(108, 11, 'Sugars', 10),
(109, 11, 'Protein', 2),
(110, 11, 'Dietary Fiber', 0.5),

-- Nutrition for Ice cafe
(111, 12, 'Calories', 120),
(112, 12, 'Total Fat', 3),
(113, 12, 'Saturated Fat', 1),
(114, 12, 'Cholesterol', 10),
(115, 12, 'Sodium', 15),
(116, 12, 'Potassium', 25),
(117, 12, 'Total Carbohydrate', 25),
(118, 12, 'Sugars', 15),
(119, 12, 'Protein', 3),
(120, 12, 'Dietary Fiber', 1);




