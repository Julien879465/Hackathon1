-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: manger_db
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `menu`
--

DROP TABLE IF EXISTS `menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `restaurant_name` varchar(255) DEFAULT NULL,
  `name_menu` varchar(255) DEFAULT NULL,
  `description_menu` text,
  `image_url` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menu`
--

LOCK TABLES `menu` WRITE;
/*!40000 ALTER TABLE `menu` DISABLE KEYS */;
INSERT INTO `menu` VALUES (1,'PokéMamouth','Pokébowl-1','Un bol poisson cru légumes qui craquent','https://images.unsplash.com/photo-1622119652484-dc8a0311ca90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',10.99),(2,'Jurassic Sushi','Maki','Roulé poisson cru et riz sur feuille noir','https://imgs.search.brave.com/-mhQpYvxGmhCKw41Bm5I4PhhcToh3rW-k7ckmfrv4Zc/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5a/clllbC1fX2x6cE9h/TTB6WHdRRVpRSGFM/RyZwaWQ9QXBp',12.99),(3,'Juicy Jungle','Berries Bowl','Bol baies','https://imgs.search.brave.com/9B3HYLQ2yNi3F7cKvMPZKxIrNR6sYxvN7BEMBh5OdgY/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC52/bUlxV3hjUXZsQlQ3/T0F0cDVCektBSGFM/SCZwaWQ9QXBp',9.99),(4,'Dino Delizioso','Pizza Margarita','Pain rond avec tomates','https://imgs.search.brave.com/j02DCsHYuD199neOQGZ8mwcNZYaFY9ihXDSLFziewIw/rs:fit:591:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5u/Z3lxaGlnQW4xdTFK/ZEhnbGdUOXFRSGFG/OCZwaWQ9QXBp',14.99),(5,'Dino Delizioso','Carbonara','Pâtes avec crème et oeuf','https://imgs.search.brave.com/gCJ0IvRSuWRD0l-IGSZuvvwwsxcSZ1fqfnjF0lFZy4Y/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/YmlOTFRVNkE0ZlFJ/eTZHTVEwdUFnSGFI/YSZwaWQ9QXBp',14.99),(6,'Chez Pierre','Poulet basquaise','Poulet avec des trucs','https://imgs.search.brave.com/ruIdNraEciNDiljF9CfKC9-qGEYT76sBAOftgrgukhk/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/dXVRd2Y2Yi1VczFs/cjdqcjZ2NXFnSGFM/SCZwaWQ9QXBp',18.99),(7,'The Stone Age Kitchen','Hamburger','viande purée dans pain','https://imgs.search.brave.com/cmptecCJQmpsq06pyCXSxWBkMxYTGKsHtvvmecJ8uE8/rs:fit:279:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4y/VklwVVBIT0xNQ0pV/WXktQ1ZFWHRnQUFB/QSZwaWQ9QXBp',8.99),(8,'PokéMamouth','Pokébowl-2','Un bol pois chiche qui pique','https://imgs.search.brave.com/GcZQ--6zXnV1QQdKFQaWCYHDi_ejwnDw3YVzkYp0iqQ/rs:fit:316:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5h/U011RVA1YmR5SFd1/YjcydDVyakp3SGFM/SCZwaWQ9QXBp',10.99),(9,'Jurassic Sushi','Sashimi','Tranches poisson cru','https://imgs.search.brave.com/RV5hYBe6HsRYKoBVktq720bseL0SPO_YM_vsZuxAYN8/rs:fit:339:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/X2NzaXZqN3RWeHY5/STBFNGR5bUtnSGFL/ViZwaWQ9QXBp',12.99),(10,'Juicy Jungle','Exotic Bowl','Bol fruits où beaucoup soleil','https://images.unsplash.com/photo-1564093497595-593b96d80180?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',9.99),(11,'Dino Delizioso','Pizza Pepperoni','Pain rond avec tomates rond viande','https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',14.99),(12,'Dino Delizioso','Pesto','Pâtes avec herbes verte','https://images.unsplash.com/photo-1567608285969-48e4bbe0d399?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',14.99),(13,'Chez Pierre','Blanquette','Veau et carottes dans sauce','https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_630,q_auto,w_1200/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/recipe_photos/original/206364/open-uri20210117-36-g2ja0h',18.99),(14,'The Stone Age Kitchen','Chickenburger','Poulet purée dans pain','https://images.unsplash.com/photo-1513185158878-8d8c2a2a3da3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',8.99),(15,'PokéMamouth','Pokébowl-3','bol poisson cru ','https://images.unsplash.com/photo-1670944316338-40c256cb144e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',10.99),(16,'Jurassic Sushi','California','Roulé poisson riz avec graines et poisson cru','https://images.unsplash.com/photo-1554502078-ef0fc409efce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80',12.99),(17,'Juicy Jungle','Orange','Orange à boire','https://images.unsplash.com/photo-1542444459-db37a5da9d5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',9.99),(18,'Dino Delizioso','Pizza 4 saisons','Pain rond avec tomates et truc qui pousse dans la terre','https://images.unsplash.com/photo-1576458088443-04a19bb13da6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',14.99),(19,'Dino Delizioso','Bolognaise','Pâtes sauce tomate et viaaande','https://plus.unsplash.com/premium_photo-1664472619078-9db415ebef44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1076&q=80',14.99),(20,'Chez Pierre','Homard','Homard (insect de la mer)','https://images.unsplash.com/photo-1590759668628-05b0fc34bb70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',18.99),(21,'The Stone Age Kitchen','Fishburger','poisson purée dans pain','https://images.unsplash.com/photo-1520073201527-6b044ba2ca9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=712&q=80',8.99);
/*!40000 ALTER TABLE `menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `restaurant`
--

DROP TABLE IF EXISTS `restaurant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `restaurant` (
  `id` int NOT NULL AUTO_INCREMENT,
  `restaurant_name` varchar(255) DEFAULT NULL,
  `cuisine` varchar(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `rating` float DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurant`
--

LOCK TABLES `restaurant` WRITE;
/*!40000 ALTER TABLE `restaurant` DISABLE KEYS */;
INSERT INTO `restaurant` VALUES (1,'PokéMamouth','Pokébowl',' https://images.unsplash.com/photo-1670816978291-a5cf23d87968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80','grotte numéro 12',4.5),(2,'Jurassic Sushi','Sushi',' https://images.unsplash.com/photo-1607301406259-dfb186e15de8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1211&q=80','grotte numéro 4',5),(3,'Juicy Jungle','Bar à fruits',' https://images.unsplash.com/photo-1622597467836-f3285f2131b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80','grotte numéro 2',4.8),(4,'Dino Delizioso','Italien','https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80','grotte numéro 7',4.3),(5,'Chez Pierre','gastronomique','https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80','grotte numéro 8',4.9),(6,'The Stone Age Kitchen','Fast-Food','https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80','grotte numéro 11',4.6);
/*!40000 ALTER TABLE `restaurant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `id` int NOT NULL AUTO_INCREMENT,
  `restaurant_id` int DEFAULT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `review_text` text,
  `rating` float DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `restaurant_id` (`restaurant_id`),
  CONSTRAINT `review_ibfk_1` FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,1,'Zod','Salade et carottes rempli pas estomac. Femme a aimé mangé parce que petit estomac.',4.7),(2,2,'Ayla','Jurassic Sushi fait sushi bon avec poisson cru, Madame Oga très gentille.',5),(3,3,'Iza','Beaucoup fruits, beaucoup baies et jus pas mauvais',4.9),(4,4,'Mog','Bonne pizza et pâtes dans grande assiette.',4.2),(5,5,'Thog','Bien manger, Pierre donne beaucoup à manger, bon jambon.',5),(6,6,'Thog','Manger viande dans pain, et patates batons dans cornet Miam!',4.5);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-22 11:34:10
