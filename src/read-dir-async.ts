import fs from "fs"

process.argv.slice(2).map((path) => {
  fs.readdir(path, (err, files) => {
    if (err) {
      console.error("Invalid directory path")
      return
    }

    console.log(`Files in "${path}":`)
    console.log(`=================`)

    files.map((file) => {
      console.log(file)
    })

    console.log(`=================`)
    console.log()
  })
})
