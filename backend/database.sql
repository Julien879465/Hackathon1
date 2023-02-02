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

CREATE TABLE menu (
  `id` INT PRIMARY KEY AUTO_INCREMENT,
  `restaurant_name` VARCHAR(255),
  `name_menu` VARCHAR(255),
  `description_menu` TEXT,
  `image_url` VARCHAR(255),
  `price` FLOAT
);

INSERT INTO menu (`id`, `restaurant_name`, `name_menu`, `description_menu`, `image_url`, `price`)
VALUES (1, 'PokéMamouth', 'Pokébowl-1', 'Un bol poisson cru légumes qui craquent', 'pokebowl-saumon.jpg', 10.99),
       (2, 'Jurassic Sushi', 'Maki', 'Roulé poisson cru et riz sur feuille noir', 'maki.jpg', 12.99),
       (3, 'Juicy Jungle', 'Berries Bowl', 'Bol baies', 'baies.jpg', 9.99),
       (4, 'Dino Delizioso', 'Pizza Margarita', 'Pain rond avec tomates', 'margarita.jpg', 14.99),
       (5, 'Dino Delizioso', 'Carbonara', 'Pâtes avec crème et oeuf', 'carbonara.jpg', 14.99),
       (6, 'Chez Pierre', 'Poulet basquaise', 'Poulet avec des trucs', 'basquaise.jpg', 18.99),
       (7, 'The Stone Age Kitchen', 'Hamburger', 'viande purée dans pain', 'burger.jpg', 8.99),
       (8, 'PokéMamouth', 'Pokébowl-2', 'Un bol pois chiche qui pique', 'pokefelafel.jpg', 10.99),
       (9, 'Jurassic Sushi', 'Sashimi', 'Tranches poisson cru', 'sashimi.jpg', 12.99),
       (10, 'Juicy Jungle', 'Exotic Bowl', 'Bol fruits où beaucoup soleil', 'salade-exotique.jpg', 9.99),
       (11, 'Dino Delizioso', 'Pizza Pepperoni', 'Pain rond avec tomates rond viande', 'pepperoni.jpg', 14.99),
       (12, 'Dino Delizioso', 'Pesto', 'Pâtes avec herbes verte', 'pesto.jpg', 14.99),
       (13, 'Chez Pierre', 'Blanquette', 'Veau et carottes dans sauce', 'blanquette.jpg', 18.99),
       (14, 'The Stone Age Kitchen', 'Chickenburger', 'Poulet purée dans pain', 'poulet.jpg', 8.99),
       (15, 'PokéMamouth', 'Pokébowl-3', 'bol poisson cru ', 'menupoké.jpg', 10.99),
       (16, 'Jurassic Sushi', 'California', 'Roulé poisson riz avec graines et poisson cru', 'california-roll.jpg', 12.99),
       (17, 'Juicy Jungle', 'Orange', 'Orange à boire', 'orange.jpg', 9.99),
       (18, 'Dino Delizioso', 'Pizza 4 saisons', 'Pain rond avec tomates et truc qui pousse dans la terre', '4saison.jpg', 14.99),
       (19, 'Dino Delizioso', 'Bolognaise', 'Pâtes sauce tomate et viaaande', 'bolognaise.jpg', 14.99),
       (20, 'Chez Pierre', 'Homard', 'Homard (insect de la mer)', 'homard.jpg', 18.99),
       (21, 'The Stone Age Kitchen', 'Hamburger', 'viande purée dans pain', 'fastfood.jpg', 8.99);
