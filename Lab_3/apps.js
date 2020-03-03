const fileData = require("./fileData")
const textMetrics = require("./textMetrics")


async function eraser() {
    const numChapters = 3
    for (i = 0; i < numChapters; i++) 
    {
        const chapter = `chapter${ i + 1 }`
        console.log(chapter)
    

    try 
    {
        console.log(await fileData.getFileAsJSON(chapter + ".result.json"))
    } 
    catch (error) 
    {

        try
        {
            var text = await fileData.getFileAsString(chapter + ".txt")
        }
        catch (error)
        {
            console.log(error)
        }

        const metrics = textMetrics.createMetrics(text)
        console.log(metrics)

        try
        {
            await fileData.saveJSONToFile(`${chapter}.result.json`, metrics)
        }
        catch (error)
        {
            console.log(error)
        }
    }
    console.log('')
}
}
eraser()