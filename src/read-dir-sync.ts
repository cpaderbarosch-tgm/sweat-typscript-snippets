import fs from "fs"

process.argv.slice(2).map((path) => {
  let files = fs.readdirSync(path)

  console.log(`Files in "${path}":`)
  console.log(`=================`)

  files.map((file) => {
    console.log(file)
  })

  console.log(`=================`)
  console.log()
})
