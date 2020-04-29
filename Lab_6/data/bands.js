const mongoCollections = require('../config/mongoCollections')
const bands = mongoCollections.bands;
const ObjectId = require("mongodb").ObjectID


module.exports = {

    async getBand(id) {
        if (!id) throw "You must provide an id to search for"
        if (typeof id !== "string" && typeof id !== 'object') throw 'Id must be a string or object ID ||' 
        id = ObjectId(id)
        const BandCollection = await bands()
        const band = await BandCollection.findOne({_id: id});
        if (!band) throw 'band not found'
        return band
    },

    async getAllBands() {
        const BandCollection = await bands()
        const getAllBands = await BandCollection.find({}).toArray();
        if(!getAllBands) throw "No bands in System"
        return getAllBands
    },

    async addBand(bandName, bandMembers, yearFormed, genres, albums, recordLabel) {
        const BandCollection = await bands()

        if (!bandMembers || !genres) throw "Not a proper bandmembers and genres"
        if (!bandMembers.length === 0 || !genres.length === 0) throw " Not a proper input"
        if (!bandMembers || !bandName || !yearFormed || !recordLabel || !genres || !albums) throw "One of the input is not supplied"
        
        let newBand = {
            bandName: bandName, 
            bandMembers: bandMembers,
            yearFormed: yearFormed,
            genres: genres,
            albums: [],
            recordLabel: recordLabel
        }

        const insertInfo = await BandCollection.insertOne(newBand)
        if (insertInfo.InsertedCount === 0) throw "Could not add Band"

        const newId = insertInfo.insertedId
        const ban = await this.getAllBands(newId)
        return ban
    },

    async updateBand(bandId, bandName, bandMembers, yearFormed, genres, albums, recordLabel) {
        bandId = ObjectId(bandId)
        if(!bandId) throw "Not a proper ID"
        if(!bandMembers.length === 0 || !genres.length === 0) throw " Not a proper input"
        if(!bandMembers || !Array.isArray(bandMembers)) throw "You must provide and array of bandmembers"
        if (!bandMembers || !bandName || !yearFormed || !recordLabel || !genres || !albums) throw "One of the input is not supplied"
        if (typeof id === "string") id = ObjectId(id)

       

        const BandCollection = await bands()

        const upd_Band = {
            bandName: bandName,
            bandMembers: bandMembers,
            yearFormed: yearFormed,
            genres: genres,
            albums: [],
            recordLabel: recordLabel
        }

        const updatedInfo = await BandCollection.updateOne({_id: bandId}, {$set: upd_Band})
        if (!updatedInfo.modifiedCount === 0) {
            throw "Could not update new name Successfully"
        }
        return await this.getBand(bandId)  
    },


    async removeBand(id) {

        id = ObjectId(id)
        const BandCollection = await bands();
        const deletionInfo = await BandCollection.removeOne({_id: id})

        if(deletionInfo.deletedCount === 0) {
            throw `Could not delete Band with ${id}`
        }
        return true
    },


    async addAlbumstobands(bandid, albumid, title, songs) {
        bandid = ObjectId(bandid)
        let currentband = await this.getBand(bandid);
        console.log(currentband)
    
        const BandCollection = await bands();
        const bandInfo = await BandCollection.updateOne(
          {_id: bandid},
          {$addToSet: {albums: {id: albumid, title: title, songs: songs}}}
        );
    
        if (!bandInfo.matchedCount && !bandInfo.modifiedCount) throw 'Update failed';

        return await this.getBand(bandid);
    },

    async removeAlbumFromband(bandid, albumid) {
        let currentband = await this.getBand(bandid);
        console.log(currentband)

        const BandCollection = await bands();
        const bandInfo = await BandCollection.updateOne({_id: bandid}, {$pull: {albums: {id: albumid}}});
        if (!bandInfo.matchedCount && !bandInfo.modifiedCount) throw 'Update failed';
        
        return await this.getBand(bandid);
      }
};








