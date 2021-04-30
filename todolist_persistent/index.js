#!/usr/bin/node

const http = require("http");
const mongo = require("mongodb").MongoClient;

let server_url = "mongodb://localhost:27017";
let todolist_db;
mongo.connect(server_url, (err, server) => {
	if(err){
		console.log("Error connecting to MongoDB");
		throw err;
	}
	console.log("Into MONGODB Server");

	todolist_db = server.db("todolist");

	//chat_db.collection("chat").find({});
});

console.log("INIT LIST SERVER");

http.createServer( (request, response) => {	
	console.log("File"+request.url);

	/*if (request.url == "/list"){
		//console.log("Chat Starting");
		let itemCursor = todolist_db.collection("items").find({});

		itemCursor.toArray().then( (data) =>{
			response.writeHead(200, {'Content-Type': 'text/plain'});
			response.write( JSON.stringify(data));
			response.end();
		});

		return;
	}*/

	if (request.url == "/submit"){
		console.log("sent item");
		let body = [];
		request.on('data', (chunk) => {
			body.push(chunk);
		}).on('end', () => {
			let data = Buffer.concat(body).toString();
			console.log(data);
		});

		response.end();
		return;
	}
}).listen(8081);

