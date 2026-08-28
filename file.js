import fs from 'fs'//yo chai node.js ley deko filesystem code chalauna

//read lets you read the file in the js
const files = {
read : () =>{
    fs.readFile("assets/prabesh.html",'utf-8',(err,data)=>{
        if (err){
            console.log(err)
        }
        console.log(data)

    })
},

//write
write:()=>{
    return fs.writeFileSync('assets/boka.docx',"prabesh lives in butwal",'utf-8')
},//comma is mandatory cause we are writing more code below

//append
append:()=>{
    return fs.appendFileSync('assets/boka.docx'," bishow is boka",'utf-8')

},

//delete
delete:()=>{
    fs.unlinkSync('assets/khatey.txt')
    console.log("deleeted") //return paxi console lekhna mildena so nalekheko yaa chai
}
}
export default files