import sum from './sum.js'
import { subtract } from './operation.js'
import age from './AgeVerify.js'
import simple from './SimpleIntrest.js'
import files from "./file.js"
import paths from "./path.js"
import decrypt from './crypto.js'







console.log(decrypt.random)
console.log(decrypt.hashing)
console.log(decrypt.passwordHashing('hello'))
console.log(decrypt.verifyPassword)
'hell',
'e351ac3de9f79a05040d19ab8863d3db',
'c3b92e4a2fde5ea95f4e7db19db4fb3e8be7cd4882a4c16da68e123fc612dd05'


const encrypted = decrypt.encryption("fucking world")
console.log(encrypted)
console.log(decrypt.decrypts(encrypted.encryptedData))









/*console.log(paths.baseName)
console.log(paths.extension)
console.log(paths.joinPath)
console.log(paths.absolutePath)
console.log(paths.detail)
console.log(paths.formats)
console.log(paths.correction)*/


/*console.log(subtract(8,6))
console.log(sum(3,4))
console.log(age.elder(33))
console.log(age.child(13))
console.log(simple(3,4,5))
files.read()
console.log(files.write())
console.log(files.append())
console.log(files.delete())*/