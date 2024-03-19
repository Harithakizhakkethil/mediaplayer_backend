//import json-server library - require keyword
const jsonServer = require('json-server')

// create server using create function
const mediaPlayerServer = jsonServer.create()  //now the server name is  mediaPlayerServer

//create path for db.json file
const router = jsonServer.router('db.json')

//create middleware to convert json into js   
// middleware - it's a function which has response to control request response cycle
const middleware =  jsonServer.defaults()

//connect (router and middleware with mediaplayerserver)
//use method 
mediaPlayerServer.use(middleware) //middleware should be at the top
mediaPlayerServer.use(router)

//setup port for the server
const port = 4000 || process.env.PORT 
//this means that mostly our server runs on 4000. if it runs in any other server, there is a chance for coincidence while we host it . to avoid this, we give process.env.PORT, then it gives any available server.

//run the server
mediaPlayerServer.listen(port,()=>{
    console.log('MediaPlayer server running successfully');
})


