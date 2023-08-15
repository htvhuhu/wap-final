CREATE DATABASE  IF NOT EXISTS `restaurant` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `restaurant`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: restaurant
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dish`
--

DROP TABLE IF EXISTS `dish`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dish` (
  `dishId` int NOT NULL AUTO_INCREMENT,
  `dishName` varchar(100) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `price` decimal(5,2) NOT NULL,
  `ingredients` varchar(100) DEFAULT NULL,
  `catId` int NOT NULL,
  `dishImageURL` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`dishId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dish`
--

LOCK TABLES `dish` WRITE;
/*!40000 ALTER TABLE `dish` DISABLE KEYS */;
INSERT INTO `dish` VALUES (1,'Phở','A Vietnamese noodle soup consisting of broth, rice noodles, and meat, primarily beef or chicken.',10.99,'Rice noodles, beef slices, onions, ginger, beef bone broth',1,'./images/pho.jpg'),(2,'Bánh Mì','A Vietnamese sandwich that consists of a French baguette filled with a variety of ingredients.',5.99,'Baguette, pork, pickled vegetables, pâté, cilantro, chili',2,'./images/banhmi.jpg'),(3,'Gỏi Cuốn','Vietnamese spring roll or cold roll; translucent rice paper rolled around greens, coriander, minced pork, shrimp, or crab.',7.99,'Rice paper, shrimp, herbs, pork, rice vermicelli',3,NULL),(4,'Bún Thịt Nướng','A popular Vietnamese dish made with grilled pork, vermicelli noodles, and herbs.',8.99,'Vermicelli noodles, grilled pork, peanuts, shallots, fried onions',4,NULL),(5,'Cà Ri Gà','Vietnamese chicken curry made with succulent chicken pieces, potatoes and carrots.',9.99,'Chicken, potatoes, carrots, coconut milk, lemongrass, curry powder',5,NULL),(6,'Bánh Xèo','Crispy Vietnamese pancake made with rice flour, turmeric, shrimp, and bean sprouts.',6.99,'Rice flour, turmeric, shrimp, bean sprouts, onions',6,NULL),(7,'Bún Riêu','A Vietnamese meat rice vermicelli soup with crab and tomato.',9.49,'Vermicelli, crab, tomatoes, tofu, fried shallots',7,NULL),(8,'Bánh Canh','Thick Vietnamese noodle soup made with tapioca flour or a mixture of rice and tapioca flour.',8.49,'Tapioca noodles, shrimp, crab, pork, fried shallots',8,NULL),(9,'Hủ Tiếu','A noodle soup with a pork stock and seafood.',9.99,'Rice noodles, pork, shrimp, garlic, bone broth',9,NULL),(10,'Chả Giò','Vietnamese fried spring roll made with ground meat and wrapped in rice paper.',5.49,'Ground pork, shrimp, mushrooms, rice paper, vermicelli',10,NULL);
/*!40000 ALTER TABLE `dish` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-13 17:09:38
