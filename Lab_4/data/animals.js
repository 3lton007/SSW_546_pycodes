const mongoCollections = require("../mongoCollections")
const animals = mongoCollections.animals



module.exports = {
    async create(name, animalType) {
        if(!name) throw "You must provide an id to search for"

        if(!animalType || !Array.isArray(animalType)) throw "You must provide an array of animalType"

        if(animalType.length === 0) throw "You must provide atleast one animalType"

        const animalCollection = await animals()

        let newAnimal = {
            name: name,
            animalType: animalType
        }

        const insertInfo = await animalCollection.insertOne(newAnimal)
        if (insertInfo.insertedCount === 0) throw "Could not add Animal"

        const newId = insertInfo.insertedId

        const anim = await this.get(newId)

        return anim
    },

    async getAll() {
        const animalCollection = await animals()

        const all_animals = await animalCollection.find({}).toArray()

       // return animals
    },

    async get(id) {
        if(!id) throw "You must provide an id to search for"

        const animalCollection = await animals()
        const ani = await animalCollection.findOne({_id: id})
        if(ani === null) throw "No dog with an id"

        return ani
    },

    async remove(id) {
        if (!id) throw "You must provide an id to search for"

        const animalCollection = await animals()
        const deletionInfo = await animalCollection.removeOne({_id: id})

        if (deletionInfo.deletedCount === 0) {
            throw `Could not delete animal with id of ${id}`
        }
    },

    async rename(id, newName) {
    if (!id) throw 'You must provide an id to search for';

    if (!newName) throw 'You must provide a new name for animal';

    if (!newName || !Array.isArray(newName)) throw 'You must provide a proper new name';

    if (newName.length === 0) throw 'You must provide at least onename.';

    const animalCollection = await animals();
    const updgetedAnimal = {
      newName: newName,
    };

    const updatedInfo = await animalCollection.updateOne({_id: id}, {$set: updatedAnimal});
    if (updatedInfo.modifiedCount === 0) {
      throw 'could not update new name Successfully';
    }

    return await this.get(id);

    }

}
