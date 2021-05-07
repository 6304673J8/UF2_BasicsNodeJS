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
	
	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Access-Control-Request-Method", "*");
	response.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, HEAD, PUT");
	response.setHeader("Access-Control-Allow-Headers", 'Origin, X-Request-With, Content-Type, Accept, Authorization');
	if (request.method === "OPTIONS"){
		console.log("options");
		response.writeHead(200);
		response.end();
		return;
	}
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

			let item_data = JSON.parse(data);

			todolist_db.collection("items").insertOne({			
				id: item_data.id,
				item: item_data.item
			
			});
		});

		response.end();
		return;
	}
	else if (request.url == "/get_items"){
		let list = todolist_db.collection("items").find({}).toArray();
		list.then( (data) => {
			response.writeHead( 200, {'Content-Type':'text/json' });
			response.write(JSON.stringify(data));
			response.end();
			todolist_db.collection("items".find({
			});
		});
	}
}).listen(8081);

