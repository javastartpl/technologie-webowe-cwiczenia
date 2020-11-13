SELECT * FROM city WHERE CountryCode = 'POL';

SELECT * FROM city ORDER BY Population DESC LIMIT 1;

SELECT * FROM country ORDER BY Population DESC LIMIT 3;

SELECT * FROM countrylanguage WHERE CountryCode = 'USA' ORDER BY Percentage DESC;

SELECT * FROM city WHERE Name = 'Warszawa';
#1
UPDATE city SET Population = 1700000 WHERE ID = 2928;
#2
UPDATE city SET Population = 1700000 WHERE Name = 'Warszawa';

SELECT * FROM city WHERE Name = 'Sosnowiec';
#1
DELETE FROM city WHERE ID = 2941;
#2
DELETE FROM city WHERE Name = 'Sosnowiec';