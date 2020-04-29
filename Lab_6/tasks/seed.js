const dbConnection = require('../config/mongoConnection');
const data = require('../data/');
const bands = data.bands;
const albums = data.albums;

async function main() {
	

    const bandone = await bands.addBand("Pink Floyd", ["Roger Waters","David Gilmour", "Richard Wright", "Nick Mason"], 1965, ["Psychedelic rock", "Classic Rock", "Rock"], [] , "Columbia Records");
    console.log("band one has been added")
    id = bandone._id
    
    const bandtwo = await bands.addBand("Linkin Park", ["Chester, Mike Shinoda"], 1990, ["Classic Rock", "HipHop Rock"], [], "LPRecords");
    console.log("band two has been added")

    // const albumone = await albums.addAlbum("The Wall", ["In the Flesh?", "The Thin Ice", "Another Brick in the Wall Part 1"], id)
    // console.log("album one has beed added")

    // const albumtwo = await albums.addAlbum("Living Things"," ", ["Lost in the Echo", "Castle of Glass", "Burn it Down"] )
    // console.log("album one has beed added")

    const db = await dbConnection();
	await db.serverConfig.close();
}

main();
