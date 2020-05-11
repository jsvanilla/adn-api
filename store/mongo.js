const { MongoClient } = require('mongodb')
const  config  = require('../config.js')

const USER = encodeURIComponent(config.api.dbUser)
const PASSWORD = encodeURIComponent(config.api.dbPassword)
const DB_NAME = config.api.dbName
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.api.dbHost}/${DB_NAME}?retryWrites=true&w=mayority`

module.exports = function MongoLib(){
  
    const client = new MongoClient(MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true})
    const dbName = DB_NAME


  function connect(){
    if(!MongoLib.connection){
      MongoLib.connection = new Promise ((resolve, reject) => {
        client.connect(err => {
          if(err){
            reject(err)
          }
          
          resolve(client.db(dbName))
        })
      })
    }
    return MongoLib.connection
  }

  function getAll(collection){
    return connect().then(db => {
      return db.collection(collection).find().toArray()
    })
  }
  //function getData(collection,id){}
  //function deleteData(collection,id){}

  function create(collection, data){
    return connect().then(db => {
      return db.collection(collection).insertOne(data)
    }) 
  }

  return {
    getAll,
    create
  }

  /*function update(collection, id, data){
    return connect().then(db => {
      
    }) 
  } */
}



/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://db_user_dna_api:<password>@cluster0-nlmq2.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});  */  
