SELECT address.city_id, first_name, last_name, email, address.address 
FROM customer
JOIN address ON customer.address_id=address.address_id
AND address.city_id = 312;

SELECT film.film_id, film.title, film.description, film.release_year, film.rating, film.special_features, category.name AS genre
FROM film
JOIN film_category ON film_category.film_id = film.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE category.name = 'COMEDY';

SELECT actor.actor_id, concat_ws(' ',actor.first_name, actor.last_name) AS actor_name, film.title, film.description, film.release_year
FROM film
JOIN film_actor ON film_actor.film_id = film.film_id
JOIN actor ON actor.actor_id = film_actor.film_id
WHERE actor.actor_id = 5;


SELECT customer.first_name, customer.last_name, customer.email, address.address
FROM customer
JOIN address ON address.address_id = customer.address_id
WHERE customer.store_id = '1'
AND address.city_id IN ('1', '42', '312', '459');

SELECT film.title, film.description, film.release_year, film.rating, film.special_features
FROM film
JOIN film_actor ON film_actor.film_id = film.film_id
WHERE rating = 'G'
AND special_features LIKE '%Behind the Scenes%'
AND actor_id = '15';

SELECT actor.actor_id, actor.first_name, actor.last_name, film.film_id, film.title
FROM actor
JOIN film_actor ON film_actor.actor_id = actor.actor_id
JOIN film ON film_actor.film_id = film.film_id
WHERE film.film_id = '369';

SELECT film.title, film.description, film.release_year, film.rating, film.special_features, category.name AS genre
FROM film
JOIN film_category ON film_category.film_id = film.film_id
JOIN category ON film_category.category_id = category.category_id
WHERE film.rental_rate = '2.99';

SELECT * FROM actor;

SELECT film.title, film.description, film.release_year, film.rating, film.special_features, category.name AS 'genre', concat_ws(' ',actor.first_name, actor.last_name) AS actor_name
FROM film
JOIN film_category ON film_category.film_id = film.film_id
JOIN category ON film_category.category_id = category.category_id
JOIN film_actor ON film_actor.film_id = film.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE category.name = 'Action' AND actor.actor_id = '23';



