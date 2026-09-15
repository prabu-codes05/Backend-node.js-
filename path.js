import path from 'path'
const paths = {}
   
paths.baseName= path.basename("user/name/xyz/abc.jpeg")
paths.extension = path.extname("user/adsf/sdfer/sdfr.docx")
paths.joinPath = path.join("/Bishow","/prabesh","/swift", paths.extension)
paths.absolutePath= path.resolve("prabesh","/nirmal","swift")
paths.detail = path.parse("C:user/mac/desktop/download/biswa/girlfriend/asdf.mp4")
paths.formats= path.format({
    root : '/',
    dir : "C:user/mac/desktop/download/prabesh",
    base:"girlfriend",
    name:"asdf",
    ext: ".mp4"
})

paths.correction = path.normalize('asda////user/../fahhh/dfsk/fsdf/dfsd.pdf')


export default paths
