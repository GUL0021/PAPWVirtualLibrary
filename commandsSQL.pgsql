CREATE TABLE genres (id serial PRIMARY KEY, name varchar(255), route varchar(255));
CREATE TABLE books (id serial PRIMARY KEY, title varchar(255), genre_id int, CONSTRAINT fk_genre FOREIGN KEY (genre_id) REFERENCES genres(id), author varchar(255), link text);
INSERT INTO genres (name, route) VALUES ('Romantické', 'romance');
INSERT INTO genres (name, route) VALUES ('Mysteriózne', 'mystery');
INSERT INTO genres (name, route) VALUES ('Dobrodružné', 'adventure');
INSERT INTO genres (name, route) VALUES ('Biografické', 'biographies');
INSERT INTO genres (name, route) VALUES ('Historické', 'history');
INSERT INTO genres (name, route) VALUES ('Detské', 'childrens');
INSERT INTO genres (name, route) VALUES ('Fantasy', 'fantasy');
INSERT INTO genres (name, route) VALUES ('Science fiction', 'scifi');
INSERT INTO genres (name, route) VALUES ('Horor', 'horror');

