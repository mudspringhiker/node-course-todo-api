const { MongoClient, ObjectID } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "TodoApp";

MongoClient.connect(
  url,
  { useNewUrlParser: true },
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MondoDB server");
    const db = client.db(dbName);

    // findOneAndUpdate (see api doc)
    // db.collection("Todos")
    //   .findOneAndUpdate(
    //     {
    //       _id: new ObjectID("5bb7ef6b36aad846ba701f27")
    //     },
    //     {
    //       // see mongodb update operators, particulary, set
    //       $set: {
    //         completed: true
    //       }
    //     },
    //     { returnOriginal: false }
    //   )
    //   .then(result => console.log(result));

    // Exercise:
    // Edit one user document and increment age by 1

    db.collection("Users")
      .findOneAndUpdate(
        {
          _id: new ObjectID("5bb7d41f36aad846ba701903")
        },
        {
          $set: {
            name: "Alona"
          },
          $inc: {
            age: 1
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => console.log(result));
  }
  // db.close();
);
