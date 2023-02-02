CREATE DATABASE manger_db;
USE manger_db;

CREATE TABLE restaurant (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  restaurant_name VARCHAR(255),
  cuisine VARCHAR(255),
  adresse VARCHAR(255),
  rating FLOAT
);

INSERT INTO restaurant (id, restaurant_name, cuisine, adresse, rating)
VALUES (1, "PokéMamouth", "Pokébowl", "grotte numéro 12", 4.5),

INSERT INTO restaurant (id, restaurant_name, cuisine, adresse, rating)
VALUES (2, "Jurassic Sushi", "Sushi", "grotte numéro 4", 5),

INSERT INTO restaurant (id, restaurant_name, cuisine, adresse, rating)
VALUES (3, "Juicy Jungle", "Bar à fruits", "grotte numéro 2", 4.8),

INSERT INTO restaurant (id, restaurant_name, cuisine, adresse, rating)
VALUES (4, "Dino Delizioso", "Italien", "grotte numéro 7", 4.3),

INSERT INTO restaurant (id, restaurant_name, cuisine, adresse, rating)
VALUES (5, "Chez Pierre", "gastronomique", "grotte numéro 8", 4.9),

INSERT INTO restaurant (id, restaurant_name, cuisine, adresse, rating)
VALUES (6, "The Stone Age Kitchen", "Fast-Food", "grotte numéro 11", 4.6);

CREATE TABLE reviews (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  restaurant_id INT,
  customer_name VARCHAR(255),
  review_text TEXT, 
  rating INT
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
  );

INSERT INTO reviews (restaurant_id, customer_name, review_text, rating)
VALUES (1, "Zod", "Salade et carottes rempli pas estomac. Femme a aimé mangé parce que petit estomac.", 4.7),

INSERT INTO reviews (restaurant_id, customer_name, review_text, rating)
VALUES (2, "Ayla", "Jurassic Sushi fait sushi bon avec poisson cru, Madame Oga très gentille.", 5),

INSERT INTO reviews (restaurant_id, customer_name, review_text, rating)
VALUES (3, "Iza", "Beaucoup fruits, beaucoup baies et jus pas mauvais", 4.9),

INSERT INTO reviews (restaurant_id, customer_name, review_text, rating)
VALUES (4, "Mog", "Bonne pizza et pâtes dans grande assiette.", 4.2),

INSERT INTO reviews (restaurant_id, customer_name, review_text, rating)
VALUES (5, "Thog", "Bien manger, Pierre donne beaucoup à manger, bon jambon.", 5),

INSERT INTO reviews (restaurant_id, customer_name, review_text, rating)
VALUES (6, "Thog", "Manger viande dans pain, et patates batons dans cornet Miam!", 4.5);


  CREATE TABLE menu_items (
    id INT PRIMARY KEY AUTO_INCREMENT,
    restaurant_name VARCHAR(255),
    name_menu VARCHAR(255),
    description_menu TEXT,
    image_url VARCHAR(255),
    price FLOAT
  );

  INSERT INTO menu_items (id, restaurant_name, name_menu, description_menu, image_url, price)
VALUES (1, "PokéMamouth", "Pokébowl", "un bol poisson cru légumes qui craquent", "pokébowl.jpg", 10.99),

INSERT INTO menu_items (id, restaurant_name, name_menu, description_menu, image_url, price)
VALUES (2, "Jurassic Sushi", "Sushi", "tranches poisson cru sur riz avec sauce marron", "sushi.jpg", 12.99),

INSERT INTO menu_items (id, restaurant_name, name_menu, description_menu, image_url, price)
VALUES (3, "Juicy Jungle", "Fruits Bowl", "bol fruits et baies", "bol-fruits.jpg", 9.99),

INSERT INTO menu_items (id, restaurant_name, name_menu, description_menu, image_url, price)
VALUES (4, "Dino Delizioso", "Pizza", "pain rond avec tomates", "pizza.jpg", 14.99),

INSERT INTO menu_items (id, restaurant_name, name_menu, description_menu, image_url, price)
VALUES (4, "Dino Delizioso", "Pâtes", "Pain pas cuit mouillé", "pates.jpg", 14.99),

INSERT INTO menu_items (id, restaurant_name, name_menu, description_menu, image_url, price)
VALUES (5, "Chez Pierre", "viande", "viand et patates", "menu_gastro.jpg", 18.99),

INSERT INTO menu_items (id, restaurant_name, name_menu, description_menu, image_url, price)
VALUES (6, "The Stone Age Kitchen", "Hamburger", "viande purée dans pain", "fastfood.jpg", 8.99);
