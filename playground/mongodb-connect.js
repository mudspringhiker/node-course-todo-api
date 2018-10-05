// const MongoClient = require("mongodb").MongoClient;
const { MongoClient, ObjectID } = require("mongodb");

// Manually creating _id:
// const obj = new ObjectID();
// console.log(obj);

const url = "mongodb://localhost:27017";
const dbName = "TodoApp";

MongoClient.connect(
  url,
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDb server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db(dbName);

    // db.collection("Todos").insertOne(
    //   {
    //     text: "Feed Pogi",
    //     completed: false
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert to do.", error);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );

    // Insert new doc in to Users (name, age, location)

    db.collection("Users").insertOne(
      {
        name: "Alona",
        age: "46",
        location: "78613"
      },
      (error, result) => {
        if (error) {
          return console.log("Unable to insert", error);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
      }
    );

    client.close();
  }
);
