import http from "node:http"

const server = http.createServer((request,response)=>{
    return response.end("Meu servidor")
})

server.listen(3333)
