const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end('hello how u?')
        return
    }

    if(req.url === '/about'){
        res.end('i am about')
        return
    }
    
    res.end(`
    <h1>LOL</h1>
    <p>U at wrong spot my g</p>
    <a href="/">back home fucker</a>`)
   
 
})

server.listen(5041)