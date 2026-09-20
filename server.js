import http from 'http'
 const PORT =  5003
const server = http.createServer((req,res)=>{
    if (req.url == "/"){
        res.writeHead(200,{"Content-Type":"text/plain"})//multipart/form
        res.end("hello world")
    }
     if (req.url == "/about"){
        res.end("About page")
     }

     if(req.url == "/contact"){
        res.end("Contact page")
     }
})

server.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)

})