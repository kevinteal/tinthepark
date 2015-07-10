// JavaScript Document

function set_up_band_db(){
	//alert("DB");
	
	
		//main stage = 0
		//second stage = 1
		//thrid stage = 2
		//fourth = 3
		//fifth = 4
		
		db.transaction(function (tx) {		
		
		//tx.executeSql('DROP TABLE bands');
		tx.executeSql('CREATE TABLE IF NOT EXISTS bands (id UNIQUE, band_name TEXT, stage TEXT, day INTEGER, start_time INTEGER, finish_time INTEGER, band_fav INTEGER, stage_rank INTEGER, day_name)');
		
		
		
		//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (1, "Prides", "Main Stage", 20150710, 1330, 1400, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (2, "The Cribs", "Main Stage", 20150710, 1430, 1500, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (3, "The Wombats", "Main Stage", 20150710, 1530, 1615, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (4, "Annie Mac", "Main Stage", 20150710, 1645, 1735, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (5, "Hozier", "Main Stage", 20150710, 1805, 1850, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (6, "Rudimental", "Main Stage", 20150710, 1920, 2010, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (7, "Sam Smith", "Main Stage", 20150710, 2040, 2140, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (8, "Kasabian", "Main Stage", 20150710, 2220, 2350, 0, 0, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (9, "The Lafontaines", "Main Stage", 20150711, 1310, 1340, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (10, "Seasick Steve", "Main Stage", 20150711, 1410, 1450, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (11, "Labrinth", "Main Stage", 20150711, 1520, 1605, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (12, "Jessie J", "Main Stage", 20150711, 1635, 1720, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (13, "George Ezra", "Main Stage", 20150711, 1750, 1840, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (14, "The Script", "Main Stage", 20150711, 1905, 2015, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (15, "The Libertines", "Main Stage", 20150711, 2045, 2205, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (16, "Avicii", "Main Stage", 20150711, 2235, 2350, 0, 0, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (17, "Ella Eyre", "Main Stage", 20150712, 1335, 1420, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (18, "The View", "Main Stage", 20150712, 1450, 1535, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (19, "James Bay", "Main Stage", 20150712, 1605, 1650, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (20, "Alabama Shakes", "Main Stage", 20150712, 1720, 1805, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (21, "Paloma Faith", "Main Stage", 20150712, 1835, 1920, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (22, "Stereophonics", "Main Stage", 20150712, 1950, 2050, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (23, "Noel Gallaghers High Flying Birds", "Main Stage", 20150712, 2120, 2250, 0, 0, "Sunday")');
		
	
	
	//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (24, "Lower Than Atlantis", "Radio 1 Stage", 20150710, 1330, 1400, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (25, "Slaves", "Radio 1 Stage", 20150710, 1430, 1500, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (26, "Fuse Odg", "Radio 1 Stage", 20150710, 1530, 1615, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (27, "Sigma", "Radio 1 Stage", 20150710, 1645, 1735, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (28, "Gorgon City", "Radio 1 Stage", 20150710, 1805, 1850, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (29, "Afrojack", "Radio 1 Stage", 20150710, 1920, 2010, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (30, "The War On Drugs", "Radio 1 Stage", 20150710, 2040, 2140, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (31, "David Guetta", "Radio 1 Stage", 20150710, 2220, 2350, 0, 1, "Friday")');

//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (32, "The Strypes", "Radio 1 Stage", 20150711, 1220, 1250, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (33, "Circa Waves", "Radio 1 Stage", 20150711, 1320, 1400, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (34, "Palma Violets", "Radio 1 Stage", 20150711, 1430, 1510, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (35, "Charli Xcx", "Radio 1 Stage", 20150711, 1540, 1625, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (36, "Years & Years", "Radio 1 Stage", 20150711, 1655, 1740, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (37, "Enter Shikari", "Radio 1 Stage", 20150711, 1810, 1855, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (38, "The Vaccines", "Radio 1 Stage", 20150711, 1925, 2025, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (39, "Alt J", "Radio 1 Stage", 20150711, 2055, 2205, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (40, "Twin Atlantic", "Radio 1 Stage", 20150711, 2235, 2350, 0, 1, "Saturday")');

//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (41, "Marmozets", "Radio 1 Stage", 20150712, 1240, 1310, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (42, "Wolf Alice", "Radio 1 Stage", 20150712, 1340, 1425, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (43, "Peace", "Radio 1 Stage", 20150712, 1455, 1540, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (44, "Idlewild", "Radio 1 Stage", 20150712, 1605, 1650, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (45, "Catfish & The Bottlemen", "Radio 1 Stage", 20150712, 1720, 1805, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (46, "Kodaline", "Radio 1 Stage", 20150712, 1835, 1920, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (47, "Jamie T", "Radio 1 Stage", 20150712, 1950, 2050, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (48, "The Prodigy", "Radio 1 Stage", 20150712, 2120, 2250, 0, 1, "Sunday")');
	
	
	
	//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (49, "Luce Rose", "King Tuts Tent", 20150710, 1330, 1400, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (50, "Twilight Sad", "King Tuts Tent", 20150710, 1430, 1500, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (51, "Hannah Wants", "King Tuts Tent", 20150710, 1530, 1615, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (52, "Jessie Ware", "King Tuts Tent", 20150710, 1645, 1735, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (53, "Duke Dumont", "King Tuts Tent", 20150710, 1805, 1850, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (54, "Hot Chip", "King Tuts Tent", 20150710, 1920, 2010, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (55, "Fatboy Slim", "King Tuts Tent", 20150710, 2040, 2140, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (56, "Mark Ronson", "King Tuts Tent", 20150710, 2220, 2350, 0, 2, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (57, "The Coronas", "King Tuts Tent", 20150711, 1235, 1310, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (58, "Jack Savoretti", "King Tuts Tent", 20150711, 1335, 1405, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (59, "Marina & The Diamonds", "King Tuts Tent", 20150711, 1430, 1515, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (60, "Paul Heaton & Jacqui Abbott", "King Tuts Tent", 20150711, 1535, 1620, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (61, "Jungle", "King Tuts Tent", 20150711, 1645, 1735, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (62, "St Vincent", "King Tuts Tent", 20150711, 1805, 1900, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (63, "The Proclaimers", "King Tuts Tent", 20150711, 2055, 2205, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (64, "Courteeners", "King Tuts Tent", 20150711, 2235, 2350, 0, 2, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (65, "And So I Watch You From Afar", "King Tuts Tent", 20150712, 1240, 1310, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (66, "Saint Raymond", "King Tuts Tent", 20150712, 1340, 1425, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (67, "Admiral Fallow", "King Tuts Tent", 20150712, 1455, 1540, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (68, "Everything Everything", "King Tuts Tent", 20150712, 1605, 1650, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (69, "Modest Mouse", "King Tuts Tent", 20150712, 1720, 1805, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (70, "Oliver Heldens", "King Tuts Tent", 20150712, 1835, 1920, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (71, "Clean Bandit", "King Tuts Tent", 20150712, 1950, 2050, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (72, "Above & Beyond", "King Tuts Tent", 20150712, 2120, 2250, 0, 2, "Sunday")');
	

//Friday
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (73, "Visionquest", "Slam Tent", 20150711, 1200, 1330, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (74, "Art Department", "Slam Tent", 20150711, 1330, 1400, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (75, "Lil Louis", "Slam Tent", 20150711, 1400, 1630, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (76, "Annie Mac", "Slam Tent", 20150711, 1630, 1730, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (77, "Gary Beck", "Slam Tent", 20150711, 1730, 1900, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (78, "Jackmaster Joy Orbison", "Slam Tent", 20150711, 1900, 2100, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (79, "Rodhad", "Slam Tent", 20150711, 2100, 2230, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (80, "Maceo Plex", "Slam Tent", 20150711, 2230, 0000, 0, 3, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (81, "Dense & Pika", "Slam Tent", 20150712, 1200, 1300, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (82, "Alan Fitzpatrick", "Slam Tent", 20150712, 1300, 1430, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (83, "Surgeon & Lady Starlight", "Slam Tent", 20150712, 1430, 1530, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (84, "Claude Von Stroke", "Slam Tent", 20150712, 1530, 1700, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (85, "Maya Jane Coles", "Slam Tent", 20150712, 1700, 1830, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (86, "Dixon", "Slam Tent", 20150712, 1830, 2000, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (87, "Dubfire", "Slam Tent", 20150712, 2000, 2130, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (88, "Loco Dice", "Slam Tent", 20150712, 2130, 2300, 0, 3, "Sunday")');


	});
	
	
	//updates here
	db.transaction(function(tx){
		//tx.executeSql('UPDATE bands SET start_time=1700 WHERE id=1');
		//tx.executeSql('DELETE FROM bands WHERE id=74');
		//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (89, "The Beaches", "BBC Introducing Stage", 20150710, 1330, 1400, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (90, "Blossoms", "BBC Introducing Stage", 20150710, 1415, 1445, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (91, "The Riptide Movement", "BBC Introducing Stage", 20150710, 1505, 1540, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (92, "Coasts", "BBC Introducing Stage", 20150710, 1555, 1635, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (93, "Fort Hope", "BBC Introducing Stage", 20150710, 1650, 1735, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (94, "The Hearts", "BBC Introducing Stage", 20150710, 1755, 1835, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (95, "Luvbug", "BBC Introducing Stage", 20150710, 1900, 1945, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (96, "The Beach", "BBC Introducing Stage", 20150710, 2010, 2100, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (97, "Model Aeroplanes", "BBC Introducing Stage", 20150710, 2125, 2225, 0, 4, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (98, "Hector Bizerk", "BBC Introducing Stage", 20150710, 2250, 2350, 0, 4, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (99, "Stillhound", "BBC Introducing Stage", 20150711, 1235, 1310, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (100, "Peur", "BBC Introducing Stage", 20150711, 1330, 1410, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (101, "Clubs", "BBC Introducing Stage", 20150711, 1430, 1510, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (102, "Pinact", "BBC Introducing Stage", 20150711, 1535, 1620, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (103, "Yr Eira", "BBC Introducing Stage", 20150711, 1645, 1735, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (104, "Redfaces", "BBC Introducing Stage", 20150711, 1800, 1900, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (105, "Dead Ceremony", "BBC Introducing Stage", 20150711, 1925, 2025, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (106, "Vukovi", "BBC Introducing Stage", 20150711, 2055, 2205, 0, 4, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (107, "Neon Waltz", "BBC Introducing Stage", 20150711, 2235, 2350, 0, 4, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (108, "Toungues", "BBC Introducing Stage", 20150712, 1220, 1250, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (109, "Bdy_prts", "BBC Introducing Stage", 20150712, 1305, 1340, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (110, "Love Nor Money", "BBC Introducing Stage", 20150712, 1355, 1430, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (111, "Monogram", "BBC Introducing Stage", 20150712, 1450, 1525, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (112, "Man Of Moon", "BBC Introducing Stage", 20150712, 1545, 1625, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (113, "Sykes", "BBC Introducing Stage", 20150712, 1645, 1730, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (114, "Miaoux Miaoux", "BBC Introducing Stage", 20150712, 1755, 1845, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (115, "Cassels", "BBC Introducing Stage", 20150712, 1905, 2000, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (116, "Dive In", "BBC Introducing Stage", 20150712, 2025, 2120, 0, 4, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (117, "The Xcerts", "BBC Introducing Stage", 20150712, 2150, 2250, 0, 4, "Sunday")');


//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (118, "Apache Darling", "T Break Stage", 20150710, 1330, 1400, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (119, "Divides", "T Break Stage", 20150710, 1420, 1455, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (120, "Indiana", "T Break Stage", 20150710, 1515, 1555, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (121, "Rae Morris", "T Break Stage", 20150710, 1615, 1700, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (122, "Grant Nicholas", "T Break Stage", 20150710, 1720, 1805, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (123, "Lonely The Brave", "T Break Stage", 20150710, 1830, 1920, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (124, "Kitty Daisy & Lewis", "T Break Stage", 20150710, 1945, 2045, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (125, "Dead Man Fall", "T Break Stage", 20150710, 2110, 2215, 0, 5, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (126, "Schnarff Schnarff", "T Break Stage", 20150710, 2245, 2350, 0, 5, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (127, "Amtr Art", "T Break Stage", 20150711, 1235, 1300, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (128, "Catholic Action", "T Break Stage", 20150711, 1315, 1345, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (129, "Tijuana Bibles", "T Break Stage", 20150711, 1400, 1430, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (130, "Tbc", "T Break Stage", 20150711, 1445, 1515, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (131, "Gavin James", "T Break Stage", 20150711, 1535, 1610, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (132, "Elle King", "T Break Stage", 20150711, 1625, 1700, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (133, "Vaults", "T Break Stage", 20150711, 1720, 1800, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (134, "Sunset Sons", "T Break Stage", 20150711, 1820, 1900, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (135, "George The Poet", "T Break Stage", 20150711, 1920, 2005, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (136, "Our Future Glory", "T Break Stage", 20150711, 2030, 2115, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (137, "Other Humans", "T Break Stage", 20150711, 2140, 2230, 0, 5, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (138, "Ded Rabbit", "T Break Stage", 20150711, 2255, 2350, 0, 5, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (139, "Be Charlotte", "T Break Stage", 20150712, 1220, 1250, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (140, "The Van Ts", "T Break Stage", 20150712, 1305, 1340, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (141, "Gerry Cinnamon", "T Break Stage", 20150712, 1355, 1430, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (142, "Black Rivers", "T Break Stage", 20150712, 1450, 1525, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (143, "Benjamin Booker", "T Break Stage", 20150712, 1545, 1625, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (144, "Young Guns", "T Break Stage", 20150712, 1645, 1730, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (145, "Walking On Cars", "T Break Stage", 20150712, 1755, 1845, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (146, "Crash Club", "T Break Stage", 20150712, 1905, 2000, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (147, "Spring Break", "T Break Stage", 20150712, 2025, 2120, 0, 5, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (148, "The Claramassa", "T Break Stage", 20150712, 2150, 2250, 0, 5, "Sunday")');
		
		
		//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (149, "Ben Klock", "Slam Tent", 20150710, 2200, 2300, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (150, "Adam Beyer B2b Joseph Capriati", "Slam Tent", 20150710, 2000, 2100, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (151, "Slam", "Slam Tent", 20150710, 1800, 1900, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (152, "Eats Everything", "Slam Tent", 20150710, 1600, 1700, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (153, "Ame", "Slam Tent", 20150710, 1400, 1500, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (154, "Telford", "Slam Tent", 20150710, 1200, 1300, 0, 3, "Friday")');
		
		
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (155, "Stevie McCrorie", "King Tuts Tent", 20150711, 1220, 1250, 0, 2, "Saturday")');
		
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (156, "Lawson", "Main Stage", 20150711, 1310, 1340, 0, 0, "Saturday")');
		tx.executeSql('UPDATE bands SET start_time=1210, finish_time=1240 WHERE id=9');
		
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (157, "The Parsonage Choir", "Main Stage", 20150712, 1240, 1310, 0, 0, "Sunday")');
		
tx.executeSql('DELETE FROM bands WHERE id=95');
		
		
	});
	db.transaction(function(tx){
		tx.executeSql('UPDATE bands SET band_name="Tongues" WHERE id=108');
		tx.executeSql('UPDATE bands SET band_name="Lucy Rose" WHERE id=49');
		
			tx.executeSql('UPDATE bands SET start_time=1330, finish_time=1500 WHERE id=154');
			tx.executeSql('UPDATE bands SET start_time=1500, finish_time=1700 WHERE id=153');
			tx.executeSql('UPDATE bands SET start_time=1700, finish_time=1830 WHERE id=152');
			tx.executeSql('UPDATE bands SET start_time=1830, finish_time=2000 WHERE id=151');
			tx.executeSql('UPDATE bands SET start_time=2000, finish_time=2200 WHERE id=150');
			tx.executeSql('UPDATE bands SET start_time=2200, finish_time=0000 WHERE id=149');
			
			
			//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (158, "Eats Everything & Jasper James", "Tennents Arms", 20150710, 2130, 2315, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (159, "Dixon Avenue Basement Jams", "Tennents Arms", 20150710, 2000, 2130, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (160, "Denis Sulta", "Tennents Arms", 20150710, 1830, 2000, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (161, "Mia Dora", "Tennents Arms", 20150710, 1700, 1830, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (162, "Junior G", "Tennents Arms", 20150710, 1530, 1700, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (163, "Gary Hunter", "Tennents Arms", 20150710, 1400, 1530, 0, 6, "Friday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (164, "Night Of The Jaguar", "Tennents Arms", 20150710, 1200, 1400, 0, 6, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (165, "Sensu", "Tennents Arms", 20150711, 2100, 2315, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (166, "Bigfoots Tea Party", "Tennents Arms", 20150711, 1930, 2100, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (167, "Sub Rosa", "Tennents Arms", 20150711, 1800, 1930, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (168, "Theo Kottis & Izzy Demzky", "Tennents Arms", 20150711, 1630, 1800, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (169, "Groovement Perth", "Tennents Arms", 20150711, 1500, 1630, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (170, "Tricky", "Tennents Arms", 20150711, 1330, 1500, 0, 6, "Saturday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (171, "Vicious Creatures", "Tennents Arms", 20150711, 1200, 1330, 0, 6, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (172, "Harri & Domenic", "Tennents Arms", 20150712, 2100, 2315, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (173, "Telford", "Tennents Arms", 20150712, 1930, 2100, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (174, "Hammer & Jube", "Tennents Arms", 20150712, 1800, 1930, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (175, "Andrew Pirie & Simon Cordiner", "Tennents Arms", 20150712, 1630, 1800, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (176, "Ooft! Music", "Tennents Arms", 20150712, 1500, 1630, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (177, "David Barbarossa", "Tennents Arms", 20150712, 1330, 1500, 0, 6, "Sunday")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (178, "Joshua Stay Fresh", "Tennents Arms", 20150712, 1200, 1330, 0, 6, "Sunday")');
			
			
	});
	
	db.transaction(function(tx){
		
		//	tx.executeSql('UPDATE bands SET start_time=2200, finish_time=0000 WHERE id=149');
		tx.executeSql('UPDATE bands SET start_time=2215 WHERE id=8');
		tx.executeSql('UPDATE bands SET start_time=2035, finish_time=2135 WHERE id=7');
		tx.executeSql('UPDATE bands SET start_time=1910, finish_time=2005 WHERE id=6');
		tx.executeSql('UPDATE bands SET start_time=1750, finish_time=1840 WHERE id=5');
		tx.executeSql('UPDATE bands SET start_time=1635, finish_time=1720 WHERE id=4');
		tx.executeSql('UPDATE bands SET start_time=1525, finish_time=1605 WHERE id=3');
		tx.executeSql('UPDATE bands SET start_time=1425 WHERE id=2');
		
		
		tx.executeSql('UPDATE bands SET start_time=2235 WHERE id=31');
		tx.executeSql('UPDATE bands SET start_time=2045, finish_time=2145 WHERE id=30');
		
		tx.executeSql('UPDATE bands SET start_time=1925, finish_time=2015 WHERE id=29');
			tx.executeSql('UPDATE bands SET start_time=1805, finish_time=1855 WHERE id=28');
			tx.executeSql('UPDATE bands SET start_time=1650, finish_time=1735 WHERE id=27');
			tx.executeSql('UPDATE bands SET start_time=1540, finish_time=1620 WHERE id=26');
			tx.executeSql('UPDATE bands SET start_time=1435, finish_time=1510 WHERE id=25');
			
			tx.executeSql('UPDATE bands SET start_time=1640, finish_time=1725 WHERE id=52');
			tx.executeSql('UPDATE bands SET start_time=1755, finish_time=1845 WHERE id=53');
			
			
			tx.executeSql('UPDATE bands SET start_time=2245, finish_time=2315 WHERE id=138');
			tx.executeSql('UPDATE bands SET start_time=2150, finish_time=2220 WHERE id=137');
			tx.executeSql('UPDATE bands SET start_time=2055, finish_time=2125 WHERE id=136');
			tx.executeSql('UPDATE bands SET start_time=1955, finish_time=2030 WHERE id=135');
			tx.executeSql('UPDATE bands SET start_time=1855, finish_time=1930 WHERE id=134');
			tx.executeSql('UPDATE bands SET start_time=1755, finish_time=1830 WHERE id=133');
			tx.executeSql('UPDATE bands SET start_time=1655, finish_time=1730 WHERE id=132');
			tx.executeSql('UPDATE bands SET start_time=1555, finish_time=1630 WHERE id=131');
			tx.executeSql('UPDATE bands SET start_time=1455, finish_time=1530 WHERE id=130');
			tx.executeSql('UPDATE bands SET start_time=1305, finish_time=1335 WHERE id=128');
			tx.executeSql('UPDATE bands SET start_time=1210, finish_time=1240 WHERE id=127');
			
			
	});
	
	
	db.transaction(function(tx){
		
		
		tx.executeSql(' UPDATE bands SET start_time=1200, finish_time=1225 WHERE band_name="Stillhound" ');
		tx.executeSql(' UPDATE bands SET start_time=1240, finish_time=1305 WHERE band_name="Peur" ');
		tx.executeSql(' UPDATE bands SET start_time=1320, finish_time=1350 WHERE band_name="Clubs" ');
		tx.executeSql(' UPDATE bands SET start_time=1405, finish_time=1440 WHERE band_name="Pinact" ');
		tx.executeSql(' UPDATE bands SET start_time=1455, finish_time=1535 WHERE band_name="Yr Eira" ');
		tx.executeSql(' UPDATE bands SET start_time=1550, finish_time=1630 WHERE band_name="Redfaces" ');
		tx.executeSql(' UPDATE bands SET start_time=1650, finish_time=1735 WHERE band_name="Dead Ceremony" ');
		tx.executeSql(' UPDATE bands SET start_time=1755, finish_time=1845 WHERE band_name="Vukovi" ');
		tx.executeSql(' UPDATE bands SET start_time=1910, finish_time=2000 WHERE band_name="Neon Waltz" ');
		
	});
	db.transaction(function(tx){
				
		
		tx.executeSql(' UPDATE bands SET start_time=1330, finish_time=1400 WHERE band_name="Prides" ');
tx.executeSql(' UPDATE bands SET start_time=1425, finish_time=1500 WHERE band_name="The Cribs" ');
tx.executeSql(' UPDATE bands SET start_time=1530, finish_time=1610 WHERE band_name="The Wombats" ');
tx.executeSql(' UPDATE bands SET start_time=1640, finish_time=1725 WHERE id=4 ');
tx.executeSql(' UPDATE bands SET start_time=1755, finish_time=1845 WHERE band_name="Hozier" ');
tx.executeSql(' UPDATE bands SET start_time=1915, finish_time=2010 WHERE band_name="Rudimental" ');
tx.executeSql(' UPDATE bands SET start_time=2040, finish_time=2140 WHERE band_name="Sam Smith" ');
tx.executeSql(' UPDATE bands SET start_time=2220, finish_time=2350 WHERE band_name="Kasabian" ');
tx.executeSql(' UPDATE bands SET start_time=1330, finish_time=1405 WHERE band_name="Lower Than Atlantis" ');
tx.executeSql(' UPDATE bands SET start_time=1435, finish_time=1510 WHERE band_name="Slaves" ');
tx.executeSql(' UPDATE bands SET start_time=1540, finish_time=1620 WHERE band_name="Fuse Odg" ');
tx.executeSql(' UPDATE bands SET start_time=1645, finish_time=1735 WHERE band_name="Sigma" ');
tx.executeSql(' UPDATE bands SET start_time=1805, finish_time=1855 WHERE band_name="Gorgon City" ');
tx.executeSql(' UPDATE bands SET start_time=1925, finish_time=2015 WHERE band_name="Afrojack" ');
tx.executeSql(' UPDATE bands SET start_time=2045, finish_time=2145 WHERE band_name="The War On Drugs" ');
tx.executeSql(' UPDATE bands SET start_time=2235, finish_time=2350 WHERE band_name="David Guetta" ');
tx.executeSql(' UPDATE bands SET start_time=1330, finish_time=1400 WHERE band_name="Lucy Rose" ');
tx.executeSql(' UPDATE bands SET start_time=1425, finish_time=1500 WHERE band_name="Twilight Sad" ');
tx.executeSql(' UPDATE bands SET start_time=1530, finish_time=1610 WHERE band_name="Hannah Wants" ');
tx.executeSql(' UPDATE bands SET start_time=1640, finish_time=1725 WHERE band_name="Jessie Ware" ');
tx.executeSql(' UPDATE bands SET start_time=1755, finish_time=1845 WHERE band_name="Duke Dumont" ');
tx.executeSql(' UPDATE bands SET start_time=1915, finish_time=2015 WHERE band_name="Hot Chip" ');
tx.executeSql(' UPDATE bands SET start_time=2045, finish_time=2215 WHERE band_name="Fatboy Slim" ');
tx.executeSql(' UPDATE bands SET start_time=2235, finish_time=2355 WHERE band_name="Mark Ronson" ');
tx.executeSql(' UPDATE bands SET start_time=1400, finish_time=1530 WHERE band_name="Telford" ');
tx.executeSql(' UPDATE bands SET start_time=1530, finish_time=1715 WHERE band_name="Ame" ');
tx.executeSql(' UPDATE bands SET start_time=1715, finish_time=1845 WHERE band_name="Eats Everything" ');
tx.executeSql(' UPDATE bands SET start_time=1845, finish_time=2000 WHERE band_name="Slam" ');
tx.executeSql(' UPDATE bands SET start_time=2000, finish_time=2220 WHERE band_name="Adam Beyer B2b Joseph Capriati" ');
tx.executeSql(' UPDATE bands SET start_time=2220, finish_time=2345 WHERE band_name="Ben Klock" ');
tx.executeSql(' UPDATE bands SET start_time=1425, finish_time=1455 WHERE band_name="Apache Darling" ');
tx.executeSql(' UPDATE bands SET start_time=1520, finish_time=1550 WHERE band_name="Divides" ');
tx.executeSql(' UPDATE bands SET start_time=1615, finish_time=1650 WHERE band_name="Indiana" ');
tx.executeSql(' UPDATE bands SET start_time=1715, finish_time=1750 WHERE band_name="Rae Morris" ');
tx.executeSql(' UPDATE bands SET start_time=1815, finish_time=1850 WHERE band_name="Grant Nicholas" ');
tx.executeSql(' UPDATE bands SET start_time=1915, finish_time=1950 WHERE band_name="Lonely The Brave" ');
tx.executeSql(' UPDATE bands SET start_time=2015, finish_time=2050 WHERE band_name="Kitty Daisy & Lewis" ');
tx.executeSql(' UPDATE bands SET start_time=2115, finish_time=2145 WHERE band_name="Dead Man Fall" ');
tx.executeSql(' UPDATE bands SET start_time=2210, finish_time=2340 WHERE band_name="Schnarff Schnarff" ');
tx.executeSql(' UPDATE bands SET start_time=1400, finish_time=1435 WHERE band_name="The Beaches" ');
tx.executeSql(' UPDATE bands SET start_time=1500, finish_time=1535 WHERE band_name="Blossoms" ');
tx.executeSql(' UPDATE bands SET start_time=1600, finish_time=1635 WHERE band_name="The Riptide Movement" ');
tx.executeSql(' UPDATE bands SET start_time=1700, finish_time=1735 WHERE band_name="Coasts" ');
tx.executeSql(' UPDATE bands SET start_time=1800, finish_time=1835 WHERE band_name="Fort Hope" ');
tx.executeSql(' UPDATE bands SET start_time=1900, finish_time=1935 WHERE band_name="The Hearts" ');
tx.executeSql(' UPDATE bands SET start_time=2000, finish_time=2035 WHERE band_name="The Beach" ');
tx.executeSql(' UPDATE bands SET start_time=2100, finish_time=2135 WHERE band_name="Model Aeroplanes" ');
tx.executeSql(' UPDATE bands SET start_time=2200, finish_time=2240 WHERE band_name="Hector Bizerk" ');
tx.executeSql(' UPDATE bands SET start_time=1210, finish_time=1240 WHERE band_name="The Lafontaines" ');
tx.executeSql(' UPDATE bands SET start_time=1305, finish_time=1335 WHERE band_name="Lawson" ');
tx.executeSql(' UPDATE bands SET start_time=1400, finish_time=1440 WHERE band_name="Seasick Steve" ');
tx.executeSql(' UPDATE bands SET start_time=1510, finish_time=1555 WHERE band_name="Labrinth" ');
tx.executeSql(' UPDATE bands SET start_time=1625, finish_time=1710 WHERE band_name="Jessie J" ');
tx.executeSql(' UPDATE bands SET start_time=1740, finish_time=1830 WHERE band_name="George Ezra" ');
tx.executeSql(' UPDATE bands SET start_time=1900, finish_time=2010 WHERE band_name="The Script" ');
tx.executeSql(' UPDATE bands SET start_time=2030, finish_time=2150 WHERE band_name="The Libertines" ');
tx.executeSql(' UPDATE bands SET start_time=2230, finish_time=2350 WHERE band_name="Avicii" ');
tx.executeSql(' UPDATE bands SET start_time=1210, finish_time=1240 WHERE band_name="The Strypes" ');
tx.executeSql(' UPDATE bands SET start_time=1310, finish_time=1340 WHERE band_name="Circa Waves" ');
tx.executeSql(' UPDATE bands SET start_time=1410, finish_time=1450 WHERE band_name="Palma Violets" ');
tx.executeSql(' UPDATE bands SET start_time=1520, finish_time=1600 WHERE band_name="Charli Xcx" ');
tx.executeSql(' UPDATE bands SET start_time=1630, finish_time=1720 WHERE band_name="Years & Years" ');
tx.executeSql(' UPDATE bands SET start_time=1750, finish_time=1840 WHERE band_name="Enter Shikari" ');
tx.executeSql(' UPDATE bands SET start_time=1910, finish_time=2010 WHERE band_name="The Vaccines" ');
tx.executeSql(' UPDATE bands SET start_time=2050, finish_time=2155 WHERE band_name="Alt J" ');
tx.executeSql(' UPDATE bands SET start_time=2235, finish_time=2350 WHERE band_name="Twin Atlantic" ');
tx.executeSql(' UPDATE bands SET start_time=1220, finish_time=1250 WHERE band_name="Stevie Mccrorie" ');
tx.executeSql(' UPDATE bands SET start_time=1320, finish_time=1355 WHERE band_name="The Coronas" ');
tx.executeSql(' UPDATE bands SET start_time=1425, finish_time=1505 WHERE band_name="Jack Savoretti" ');
tx.executeSql(' UPDATE bands SET start_time=1535, finish_time=1620 WHERE band_name="Marina & The Diamonds" ');
tx.executeSql(' UPDATE bands SET start_time=1650, finish_time=1740 WHERE band_name="Paul Heaton & Jacqui Abbott" ');
tx.executeSql(' UPDATE bands SET start_time=1810, finish_time=1900 WHERE band_name="Jungle" ');
tx.executeSql(' UPDATE bands SET start_time=1930, finish_time=2030 WHERE band_name="St Vincent" ');
tx.executeSql(' UPDATE bands SET start_time=2100, finish_time=2200 WHERE band_name="The Proclaimers" ');
tx.executeSql(' UPDATE bands SET start_time=2230, finish_time=2350 WHERE band_name="Courteeners" ');
tx.executeSql(' UPDATE bands SET start_time=1200, finish_time=1330 WHERE band_name="Visionquest" ');
tx.executeSql(' UPDATE bands SET start_time=1330, finish_time=1445 WHERE band_name="Art Department" ');
tx.executeSql(' UPDATE bands SET start_time=1445, finish_time=1600 WHERE band_name="Lil Louis" ');
tx.executeSql(' UPDATE bands SET start_time=1600, finish_time=1700 WHERE id=76 ');
tx.executeSql(' UPDATE bands SET start_time=1700, finish_time=1800 WHERE band_name="Gary Beck" ');
tx.executeSql(' UPDATE bands SET start_time=1800, finish_time=2020 WHERE band_name="Jackmaster Joy Orbison" ');
tx.executeSql(' UPDATE bands SET start_time=2020, finish_time=2150 WHERE band_name="Rodhad" ');
tx.executeSql(' UPDATE bands SET start_time=2150, finish_time=2345 WHERE band_name="Maceo Plex" ');
tx.executeSql(' UPDATE bands SET start_time=1210, finish_time=1240 WHERE band_name="Amtr Art" ');
tx.executeSql(' UPDATE bands SET start_time=1305, finish_time=1335 WHERE band_name="Catholic Action" ');
tx.executeSql(' UPDATE bands SET start_time=1400, finish_time=1430 WHERE band_name="Tijuana Bibles" ');
tx.executeSql(' UPDATE bands SET start_time=1455, finish_time=1530 WHERE band_name="Tbc" ');
tx.executeSql(' UPDATE bands SET start_time=1555, finish_time=1630 WHERE band_name="Gavin James" ');
tx.executeSql(' UPDATE bands SET start_time=1655, finish_time=1730 WHERE band_name="Elle King" ');
tx.executeSql(' UPDATE bands SET start_time=1755, finish_time=1830 WHERE band_name="Vaults" ');
tx.executeSql(' UPDATE bands SET start_time=1855, finish_time=1930 WHERE band_name="Sunset Sons" ');
tx.executeSql(' UPDATE bands SET start_time=1955, finish_time=2030 WHERE band_name="George The Poet" ');
tx.executeSql(' UPDATE bands SET start_time=2055, finish_time=2125 WHERE band_name="Our Future Glory" ');
tx.executeSql(' UPDATE bands SET start_time=2150, finish_time=2220 WHERE band_name="Other Humans" ');
tx.executeSql(' UPDATE bands SET start_time=2245, finish_time=2315 WHERE band_name="Ded Rabbit" ');
tx.executeSql(' UPDATE bands SET start_time=1245, finish_time=1310 WHERE band_name="Stillhound" ');
tx.executeSql(' UPDATE bands SET start_time=1330, finish_time=1355 WHERE band_name="Peur" ');
tx.executeSql(' UPDATE bands SET start_time=1415, finish_time=1440 WHERE band_name="Clubs" ');
tx.executeSql(' UPDATE bands SET start_time=1500, finish_time=1525 WHERE band_name="Pinact" ');
tx.executeSql(' UPDATE bands SET start_time=1545, finish_time=1610 WHERE band_name="Yr Eira" ');
tx.executeSql(' UPDATE bands SET start_time=1630, finish_time=1655 WHERE band_name="Redfaces" ');
tx.executeSql(' UPDATE bands SET start_time=1715, finish_time=1740 WHERE band_name="Dead Ceremony" ');
tx.executeSql(' UPDATE bands SET start_time=1845, finish_time=1915 WHERE band_name="Vukovi" ');
tx.executeSql(' UPDATE bands SET start_time=1940, finish_time=2020 WHERE band_name="Neon Waltz" ');
tx.executeSql(' UPDATE bands SET start_time=1230, finish_time=1300 WHERE band_name="The Parsonage Choir" ');
tx.executeSql(' UPDATE bands SET start_time=1325, finish_time=1405 WHERE band_name="Ella Eyre" ');
tx.executeSql(' UPDATE bands SET start_time=1425, finish_time=1505 WHERE band_name="The View" ');
tx.executeSql(' UPDATE bands SET start_time=1535, finish_time=1620 WHERE band_name="James Bay" ');
tx.executeSql(' UPDATE bands SET start_time=1650, finish_time=1740 WHERE band_name="Alabama Shakes" ');
tx.executeSql(' UPDATE bands SET start_time=1810, finish_time=1900 WHERE band_name="Paloma Faith" ');
tx.executeSql(' UPDATE bands SET start_time=1930, finish_time=2045 WHERE band_name="Stereophonics" ');
tx.executeSql(' UPDATE bands SET start_time=2120, finish_time=2250 WHERE band_name="Noel Gallaghers High Flying Birds" ');
tx.executeSql(' UPDATE bands SET start_time=1230, finish_time=1300 WHERE band_name="Marmozets" ');
tx.executeSql(' UPDATE bands SET start_time=1325, finish_time=1355 WHERE band_name="Wolf Alice" ');
tx.executeSql(' UPDATE bands SET start_time=1425, finish_time=1500 WHERE band_name="Peace" ');
tx.executeSql(' UPDATE bands SET start_time=1530, finish_time=1615 WHERE band_name="Idlewild" ');
tx.executeSql(' UPDATE bands SET start_time=1645, finish_time=1735 WHERE band_name="Catfish & The Bottlemen" ');
tx.executeSql(' UPDATE bands SET start_time=1805, finish_time=1905 WHERE band_name="Kodaline" ');
tx.executeSql(' UPDATE bands SET start_time=1935, finish_time=2025 WHERE band_name="Jamie T" ');
tx.executeSql(' UPDATE bands SET start_time=2120, finish_time=2250 WHERE band_name="The Prodigy" ');
tx.executeSql(' UPDATE bands SET start_time=1235, finish_time=1305 WHERE band_name="And So I Watch You From Afar" ');
tx.executeSql(' UPDATE bands SET start_time=1335, finish_time=1410 WHERE band_name="Saint Raymond" ');
tx.executeSql(' UPDATE bands SET start_time=1440, finish_time=1520 WHERE band_name="Admiral Fallow" ');
tx.executeSql(' UPDATE bands SET start_time=1550, finish_time=1635 WHERE band_name="Everything Everything" ');
tx.executeSql(' UPDATE bands SET start_time=1705, finish_time=1800 WHERE band_name="Modest Mouse" ');
tx.executeSql(' UPDATE bands SET start_time=1830, finish_time=1930 WHERE band_name="Oliver Heldens" ');
tx.executeSql(' UPDATE bands SET start_time=2000, finish_time=2100 WHERE band_name="Clean Bandit" ');
tx.executeSql(' UPDATE bands SET start_time=2130, finish_time=2250 WHERE band_name="Above & Beyond" ');
tx.executeSql(' UPDATE bands SET start_time=1200, finish_time=1330 WHERE band_name="Dense & Pika" ');
tx.executeSql(' UPDATE bands SET start_time=1330, finish_time=1500 WHERE band_name="Alan Fitzpatrick" ');
tx.executeSql(' UPDATE bands SET start_time=1500, finish_time=1600 WHERE band_name="Surgeon & Lady Starlight" ');
tx.executeSql(' UPDATE bands SET start_time=1600, finish_time=1720 WHERE band_name="Claude Von Stroke" ');
tx.executeSql(' UPDATE bands SET start_time=1720, finish_time=1850 WHERE band_name="Maya Jane Coles" ');
tx.executeSql(' UPDATE bands SET start_time=1850, finish_time=2010 WHERE band_name="Dixon" ');
tx.executeSql(' UPDATE bands SET start_time=2010, finish_time=2120 WHERE band_name="Dubfire" ');
tx.executeSql(' UPDATE bands SET start_time=2120, finish_time=2245 WHERE band_name="Loco Dice" ');
tx.executeSql(' UPDATE bands SET start_time=1230, finish_time=1300 WHERE band_name="Be Charlotte" ');
tx.executeSql(' UPDATE bands SET start_time=1325, finish_time=1355 WHERE band_name="The Van Ts" ');
tx.executeSql(' UPDATE bands SET start_time=1420, finish_time=1455 WHERE band_name="Gerry Cinnamon" ');
tx.executeSql(' UPDATE bands SET start_time=1515, finish_time=1550 WHERE band_name="Black Rivers" ');
tx.executeSql(' UPDATE bands SET start_time=1615, finish_time=1655 WHERE band_name="Benjamin Booker" ');
tx.executeSql(' UPDATE bands SET start_time=1720, finish_time=1800 WHERE band_name="Young Guns" ');
tx.executeSql(' UPDATE bands SET start_time=1825, finish_time=1900 WHERE band_name="Walking On Cars" ');
tx.executeSql(' UPDATE bands SET start_time=1925, finish_time=1955 WHERE band_name="Crash Club" ');
tx.executeSql(' UPDATE bands SET start_time=2020, finish_time=2050 WHERE band_name="Spring Break" ');
tx.executeSql(' UPDATE bands SET start_time=2110, finish_time=2140 WHERE band_name="The Claramassa" ');
tx.executeSql(' UPDATE bands SET start_time=1245, finish_time=1310 WHERE band_name="Tongues" ');
tx.executeSql(' UPDATE bands SET start_time=1330, finish_time=1355 WHERE band_name="Bdy_prts" ');
tx.executeSql(' UPDATE bands SET start_time=1415, finish_time=1440 WHERE band_name="Love Nor Money" ');
tx.executeSql(' UPDATE bands SET start_time=1500, finish_time=1525 WHERE band_name="Monogram" ');
tx.executeSql(' UPDATE bands SET start_time=1545, finish_time=1610 WHERE band_name="Man Of Moon" ');
tx.executeSql(' UPDATE bands SET start_time=1630, finish_time=1655 WHERE band_name="Sykes" ');
tx.executeSql(' UPDATE bands SET start_time=1715, finish_time=1740 WHERE band_name="Miaoux Miaoux" ');
tx.executeSql(' UPDATE bands SET start_time=1825, finish_time=1850 WHERE band_name="Cassels" ');
tx.executeSql(' UPDATE bands SET start_time=1910, finish_time=1935 WHERE band_name="Dive In" ');
tx.executeSql(' UPDATE bands SET start_time=2000, finish_time=2040 WHERE band_name="The Xcerts" ');
		
		set_up_main_page();
	});
}













