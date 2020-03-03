const animals = require("./data/animals")
const connection = require ("./mongoConnection")


const main = async () => {

    const Sasha = await animals.create("Sasha", ["Dog"])
    console.log("Sasha has been added")
    console.log(Sasha)

    const Lucy = await animals.create("Lucy", ["Dog"])
    console.log("Lucy has been added")
    console.log(Lucy)

    const all = await animals.getAll()
    console.log("All animals are added")
    console.log(all)

    const Duke = await animals.create("Duke", ["Walrus"])
    console.log("Duke has been added")
    console.log(Duke)

    const updatedSashaName = await animals.rename(Sasha._id, "Sashita")
    console.log("Now Sasha's name is:")
    console.log(updatedSashaName)
    
    console.log(all)

    const remove_lucy = await animals.remove(Lucy._id)
    console.log("Lucy is Sucessfully Removed")
    console.log(remove_lucy)

    const db = await connection()
    await db.serverConfig.close()


    console.log("Done")
}

main().catch((error) => {
    console.log(error)
})