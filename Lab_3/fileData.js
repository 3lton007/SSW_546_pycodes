const bluebird = require("bluebird");
const Promise = bluebird.Promise;

const fs = bluebird.promisifyAll(require("fs"))

async function getFileAsString(path)
{
    let data;
    if(typeof path === undefined || typeof path !== "string" || !path)
    {
        throw "File path is invalid, Provide a proper Path" 
    }
    else
    {
        data = await fs.readFileAsync(path,"utf-8")
    }
    
    return data
}


async function getFileAsJSON(path)
{
    
    let data;
    if(typeof path === undefined || typeof path !== "string" || !path)
    {
        throw "File path is invalid, Provide a proper path"
    }
    else
    {
        data = await fs.readFileAsync(path,"utf-8")
    }

        
} 


async function saveStringToFile(path,text)
{
    let data
    if(typeof path === undefined || typeof path !== "string" || !path)
    {
        throw "File path is Invalid, Provide a proper path"
    }
    else
    {
        data = await fs.writeFileAsync(path,text)  
    }
    return data
}
    

async function saveJSONToFile(path, obj)
{
    let data    
    if(typeof path === undefined || typeof path !== "string" || !path)
    {
        throw "FIle path is invalid, Provide a proper path"
    }
    else
    {
        const text = JSON.stringify(obj)
        await fs.writeFileAsync(path, text)
    }
    return data
}

module.exports = {
    getFileAsString,
    getFileAsJSON,
    saveStringToFile,
    saveJSONToFile
}