CREATE TABLE "koala" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(80) NOT NULL,
    "age" INTEGER,
    "gender" VARCHAR(1) NOT NULL,
    "ready_for_transfer" BOOLEAN,
    "notes" VARCHAR(255)
);

INSERT INTO "koala"
	("name", "age", "gender", "ready_for_transfer", "notes") 
VALUES
	('Scotty', 4, 'M', true, 'Born in Guatemala'),
	('Jean', 5, 'F', true, 'Allergic to lots of lava'),
	('Ororo', 7, 'F', false, 'loves listening to Paula (Abdul)'),
	('Logan', 15, 'M', false, 'Love the sauna'),
	('Charlie', 9, 'M', true, 'Favorite bank is Nirvana'),
	('Betsy', 4, 'F', true, 'Has a pet iguana');
	
SELECT * FROM "koala";