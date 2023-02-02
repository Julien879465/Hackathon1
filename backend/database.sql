DROP DATABASE IF EXISTS manger_db;
CREATE DATABASE manger_db;
USE manger_db;

CREATE TABLE restaurant (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `restaurant_name` VARCHAR(255),
  `cuisine` VARCHAR(255),
  `adresse` VARCHAR(255),
  `rating` FLOAT
);

INSERT INTO restaurant (`restaurant_name`, `cuisine`, `adresse`, `rating`)
VALUES ('PokéMamouth', 'Pokébowl', 'grotte numéro 12', 4.5),
       ('Jurassic Sushi', 'Sushi', 'grotte numéro 4', 5),
       ('Juicy Jungle', 'Bar à fruits', 'grotte numéro 2', 4.8),
       ('Dino Delizioso', 'Italien', 'grotte numéro 7', 4.3),
       ('Chez Pierre', 'gastronomique', 'grotte numéro 8', 4.9),
       ('The Stone Age Kitchen', 'Fast-Food', 'grotte numéro 11', 4.6);

CREATE TABLE review (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `restaurant_id` INT,
  `customer_name` VARCHAR(255),
  `review_text` TEXT, 
  `rating` INT,
  FOREIGN KEY (`restaurant_id`) REFERENCES `restaurant`(`id`)
);

INSERT INTO review (`restaurant_id`, `customer_name`, `review_text`, `rating`)
VALUES (1, 'Zod', 'Salade et carottes rempli pas estomac. Femme a aimé mangé parce que petit estomac.', 4.7),
       (2, 'Ayla', 'Jurassic Sushi fait sushi bon avec poisson cru, Madame Oga très gentille.', 5),
       (3, 'Iza', 'Beaucoup fruits, beaucoup baies et jus pas mauvais', 4.9),
       (4, 'Mog', 'Bonne pizza et pâtes dans grande assiette.', 4.2),
       (5, 'Thog', 'Bien manger, Pierre donne beaucoup à manger, bon jambon.', 5),
       (6, 'Thog', 'Manger viande dans pain, et patates batons dans cornet Miam!', 4.5);

CREATE TABLE menu_item (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `restaurant_name` VARCHAR(255),
  `name_menu` VARCHAR(255),
  `description_menu` TEXT,
  `image_url` VARCHAR(255),
  `price` FLOAT
);

INSERT INTO menu_item (`id`, `restaurant_name`, `name_menu`, `description_menu`, `image_url`, `price`)
VALUES (1, 'PokéMamouth', 'Pokébowl', 'un bol poisson cru légumes qui craquent', 'pokébowl.jpg', 10.99),
       (2, 'Jurassic Sushi', 'Sushi', 'tranches poisson cru sur riz avec sauce marron', 'sushi.jpg', 12.99),
       (3, 'Juicy Jungle', 'Fruits Bowl', 'bol fruits et baies', 'bol-fruits.jpg', 9.99),
       (4, 'Dino Delizioso', 'Pizza', 'pain rond avec tomates', 'pizza.jpg', 14.99),
       (5, 'Dino Delizioso', 'Pâtes', 'Pain pas cuit mouillé', 'pates.jpg', 14.99),
       (6, 'Chez Pierre', 'viande', 'viand et patates', 'menu_gastro.jpg', 18.99),
       (7, 'The Stone Age Kitchen', 'Hamburger', 'viande purée dans pain', 'fastfood.jpg', 8.99);


