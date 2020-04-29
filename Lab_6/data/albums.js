const mongoCollections = require('../config/mongoCollections')
const albums = mongoCollections.albums
const bands = require('./bands') 
const ObjectId = require("mongodb").ObjectID



module.exports = {

    async getAlbum(id) {
        if (!id) throw "You must provide an id to search for"
        if (typeof id !== "string" && typeof id !== 'object') throw "Id must be a string or object id//"
        id = ObjectId(id)
        const AlbumCollection = await albums()
        const album = await AlbumCollection.findOne({_id: id});
        if (!album) throw 'album not found'
        return album
    },


    async getAllAlbums() {
        const AlbumCollection = await albums()
        const getAllAlbums = await AlbumCollection.find({}).toArray()
        return getAllAlbums
    },

    async addAlbum(title, songs, author) {
        if(typeof title !== 'string') throw 'No title provided'
        if (typeof author !== 'string' ) throw 'Id is objectid!';
        let AlbumCollection = await albums() 

        const bandthatAlbum = await bands.getBand(author)

        let newAlbum = {    
            title: title,
            author:{ 
                id: author,
                bandName: bandthatAlbum.bandName,
            },
            songs: songs,
        }

        const insertInfo = await AlbumCollection.insertOne(newAlbum)
        if (insertInfo.InsertedCount === 0) throw "Could not add Band"

        const newId = insertInfo.insertedId

        await bands.addAlbumstobands(author, newId, title, songs)
        return await this.getAlbum(newId)
    },

    async updateAlbum(id, updatedAlbum) {
        if (typeof id === "string") id = ObjectId(id)
        
        const AlbumCollection = await albums()

        const updatedAlbumData = {}

        if (updatedAlbum.title) {
            updatedAlbumData.title = updatedAlbum.title;
          }
        
          if (updatedAlbum.songs) {
            updatedAlbumData.songs = updatedAlbum.songs;
          }

        await AlbumCollection.updateOne({_id: id}, {$set: updatedAlbumData});
        
        return await this.getAlbum(id);
    },

    async removeAlbum(id) {

        id = ObjectId(id)
        const AlbumCollection = await albums();
        let album = null;
        try {
          album = await this.getAlbum(id);
        } catch (e) {
          console.log(e);
          return;
        }
        const deletionInfo = await AlbumCollection.removeOne({_id: id});
        if (deletionInfo.deletedCount === 0) {
          throw `Could not delete post with id of ${id}`;
        }
        
        await bands.removeAlbumFromband(album._id, id); //probelm passing
        
        return true;
      },
}

