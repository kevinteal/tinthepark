// JavaScript Document

function set_up_band_db(){
	//alert("DB");
	
	
		//main stage = 0
		//second stage = 1
		//thrid stage = 2
		//fourth = 3
		//fifth = 4
		
		db.transaction(function (tx) {		
		
		tx.executeSql('DROP TABLE bands');
		tx.executeSql('CREATE TABLE IF NOT EXISTS bands (id UNIQUE, band_name TEXT, stage TEXT, day INTEGER, start_time INTEGER, finish_time INTEGER, band_fav INTEGER, stage_rank INTEGER, day_name, video_link TEXT)');
		
		
		
		//Friday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (1, "Prides", "Main Stage", 20150710, 1330, 1400, 0, 0, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (2, "The Cribs", "Main Stage", 20150710, 1430, 1500, 0, 0, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (3, "The Wombats", "Main Stage", 20150710, 1530, 1615, 0, 0, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (4, "Annie Mac", "Main Stage", 20150710, 1645, 1735, 0, 0, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (5, "Hozier", "Main Stage", 20150710, 1805, 1850, 0, 0, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (6, "Rudimental", "Main Stage", 20150710, 1920, 2010, 0, 0, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (7, "Sam Smith", "Main Stage", 20150710, 2040, 2140, 0, 0, "Friday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (8, "Kasabian", "Main Stage", 20150710, 2220, 2350, 0, 0, "Friday", "video_link_HERE")');
//Saturdayday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (9, "The Lafontaines", "Main Stage", 20150711, 1310, 1340, 0, 0, "Saturdayday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (10, "Seasick Steve", "Main Stage", 20150711, 1410, 1450, 0, 0, "Saturdayday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (11, "Labrinth", "Main Stage", 20150711, 1520, 1605, 0, 0, "Saturdayday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (12, "Jessie J", "Main Stage", 20150711, 1635, 1720, 0, 0, "Saturdayday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (13, "George Ezra", "Main Stage", 20150711, 1750, 1840, 0, 0, "Saturdayday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (14, "The Script", "Main Stage", 20150711, 1905, 2015, 0, 0, "Saturdayday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (15, "The Libertines", "Main Stage", 20150711, 2045, 2205, 0, 0, "Saturdayday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (16, "Avicii", "Main Stage", 20150711, 2235, 2350, 0, 0, "Saturdayday", "video_link_HERE")');
//Sunday
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (17, "Ella Eyre", "Main Stage", 20150712, 1335, 1420, 0, 0, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (18, "The View", "Main Stage", 20150712, 1450, 1535, 0, 0, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (19, "James Bay", "Main Stage", 20150712, 1605, 1650, 0, 0, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (20, "Alabama Shakes", "Main Stage", 20150712, 1720, 1805, 0, 0, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (21, "Paloma Faith", "Main Stage", 20150712, 1835, 1920, 0, 0, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (22, "Stereophonics", "Main Stage", 20150712, 1950, 2050, 0, 0, "Sunday", "video_link_HERE")');
tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name, video_link) VALUES (23, "Noel Gallaghers High Flying Birds", "Main Stage", 20150712, 2120, 2250, 0, 0, "Sunday", "video_link_HERE")');
		
	
	});
	
	
	//updates here
	db.transaction(function(tx){
		//tx.executeSql('UPDATE bands SET start_time=1700 WHERE id=1');
		//tx.executeSql('DELETE FROM bands WHERE id=74');
		
		set_up_main_page();
	});
}













