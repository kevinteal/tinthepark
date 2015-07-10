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
			
		set_up_main_page();
	});
}













