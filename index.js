

// import json-server
const jsonServer= require('json-server')

// creating a server application using jsonServer
const restServer= jsonServer.create()

// setup path for db.json
const router= jsonServer.router('db.json')

// return a middleware user by json server
const middleware= jsonServer.defaults()

//setup port
const port=3001

// use in server
restServer.use(middleware)
restServer.use(router)

// to run a port
restServer.listen(port,()=>{
    console.log('Rest server listening on port' +port);
})
