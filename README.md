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


**Create data dummy for dish**

INSERT INTO `restaurant`.`dish` 
(`dishid`, `dishname`, `description`, `price`, `ingredients`, `catId`, `dishImageURL`) 
VALUES 
(1, 'Phở', 'A Vietnamese noodle soup consisting of broth, rice noodles, and meat, primarily beef or chicken.', 10.99, 'Rice noodles, beef slices, onions, ginger, beef bone broth', 1, './images/pho.jpg'),
(2, 'Bánh Mì', 'A Vietnamese sandwich that consists of a French baguette filled with a variety of ingredients.', 5.99, 'Baguette, pork, pickled vegetables, pâté, cilantro, chili', 2, './images/banhmi.jpg'),
(3, 'Gỏi Cuốn', 'Vietnamese spring roll or cold roll; translucent rice paper rolled around greens, coriander, minced pork, shrimp, or crab.', 7.99, 'Rice paper, shrimp, herbs, pork, rice vermicelli', 3, NULL),
(4, 'Bún Thịt Nướng', 'A popular Vietnamese dish made with grilled pork, vermicelli noodles, and herbs.', 8.99, 'Vermicelli noodles, grilled pork, peanuts, shallots, fried onions', 4, NULL),
(5, 'Cà Ri Gà', 'Vietnamese chicken curry made with succulent chicken pieces, potatoes and carrots.', 9.99, 'Chicken, potatoes, carrots, coconut milk, lemongrass, curry powder', 5, NULL),
(6, 'Bánh Xèo', 'Crispy Vietnamese pancake made with rice flour, turmeric, shrimp, and bean sprouts.', 6.99, 'Rice flour, turmeric, shrimp, bean sprouts, onions', 6, NULL),
(7, 'Bún Riêu', 'A Vietnamese meat rice vermicelli soup with crab and tomato.', 9.49, 'Vermicelli, crab, tomatoes, tofu, fried shallots', 7, NULL),
(8, 'Bánh Canh', 'Thick Vietnamese noodle soup made with tapioca flour or a mixture of rice and tapioca flour.', 8.49, 'Tapioca noodles, shrimp, crab, pork, fried shallots', 8, NULL),
(9, 'Hủ Tiếu', 'A noodle soup with a pork stock and seafood.', 9.99, 'Rice noodles, pork, shrimp, garlic, bone broth', 9, NULL),
(10, 'Chả Giò', 'Vietnamese fried spring roll made with ground meat and wrapped in rice paper.', 5.49, 'Ground pork, shrimp, mushrooms, rice paper, vermicelli', 10, NULL);


**Install dependency to connect to mySQL**

npm i mysql

npm install express-session

** ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
Execute the following query in MYSQL Workbench

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
flush privileges;


INSERT INTO  category(catId, catName) values (6, 'DRINK');
INSERT INTO  category(catId, catName) values (2, 'BREAKFAST');
INSERT INTO  category(catId, catName) values (3, 'DINNER');
INSERT INTO  category(catId, catName) values (4, 'LUNCH');
