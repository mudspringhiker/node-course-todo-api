const { MongoClient, ObjectID } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "TodoApp";

MongoClient.connect(
  url,
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDb server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db(dbName);

    // db.collection("Todos")
    //   .find({
    //     _id: new ObjectID("5bb7b88436aad846ba70129f")
    //   })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log("Todos");
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log("unable to fetch to dos", err);
    //     }
    //   );

    // db.collection("Todos")
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log(`To dos count: ${count}`);
    //     },
    //     err => {
    //       console.log("unable to fetch to dos", err);
    //     }
    //   );

    db.collection("Users")
      .find({
        name: "Pogi"
      })
      .count()
      .then(
        count => {
          console.log(count);
        },
        err => {
          console.log("unable to fetch users", err);
        }
      );

    // client.close();
  }
);
