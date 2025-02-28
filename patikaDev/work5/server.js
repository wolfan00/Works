const http = require('http')

const server =  http.createServer((req,res)=>{
    console.log(`istek işleniyor...`)
    const url = req.url
    if(url==="/index"){
        res.writeHead(`200`,{"content-type":"text/html"});
        res.write("<h1>Anasayfa'ya Hoşgeldiniz</h1>")
    }else if(url==="/hakkımda"){
        res.writeHead(`200`,{"content-type":"text/html"});
        res.write("<h1>Anasayfa'ya Hoşgeldiniz</h1>")
    }else if(url==="/iletişim"){
        res.writeHead(`200`,{"content-type":"text/html"});
        res.write("<h1>Anasayfa'ya Hoşgeldiniz</h1>")
    }else {
        res.writeHead(`404`,{"content-type":"text/html"});  
        res.write("<h1>Aradığınız Sayfa Bulunamadı :C </h1>")
    }
})

const port = 5000

server.listen(port,()=>{
    console.log(`sunucu ${port} ile başlatılmıştır.`)
});