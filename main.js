import fs from 'fs/promises'
import path from 'path'

const dirPath="C:\\Users\\Eric Mannikarottu\\Desktop\\coding\\WD\\File management system"

let files= await fs.readdir(dirPath)


for (const item of files) {
    const filePath= path.join(dirPath,item)
    const ext=path.extname(item).slice(1)


    if(ext ==="js"||ext === "json" ){
        continue
    }

    const stats = await fs.stat(filePath)

    if(stats.isFile()){
        const targetDir= path.join(dirPath,ext)

        await fs.mkdir(targetDir, { recursive: true } )


        const targetPath=path.join(targetDir,item)

        await fs.rename(filePath,targetPath)

        console.log(`moved ${item} to ${targetPath}`)
    }

}