const {MongoClient} =require('mongodb')
const databaseName ='mydb'
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
client.connect();
console.log("connected")

