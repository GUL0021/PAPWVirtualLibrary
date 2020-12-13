CREATE TABLE genres (id serial PRIMARY KEY, name varchar(255), route varchar(255))
CREATE TABLE books (id serial PRIMARY KEY, title varchar(255), genre_id int, CONSTRAINT fk_genre FOREIGN KEY (genre_id) REFERENCES genres(id), author varchar(255), link text)
