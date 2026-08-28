import sum from './sum.js'
import { subtract } from './operation.js'
import age from './AgeVerify.js'
import simple from './SimpleIntrest.js'
import files from "./file.js"
console.log(subtract(8,6))
console.log(sum(3,4))
console.log(age.elder(33))
console.log(age.child(13))
console.log(simple(3,4,5))
files.read()
console.log(files.write())
console.log(files.append())
console.log(files.delete())