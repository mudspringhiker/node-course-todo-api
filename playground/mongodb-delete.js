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
    console.log("Connected to MongoDB server");
    const db = client.db(dbName);

    // deleteMany
    // db.collection("Todos")
    //   .deleteMany({
    //     text: "Get groceries"
    //   })
    //   .then(result => console.log(result));

    // deleteOne
    // db.collection("Todos")
    //   .deleteOne({
    //     text: "Eat lunch"
    //   })
    //   .then(result => console.log(result));

    // findOneAndDelete
    // db.collection("Todos")
    //   .findOneAndDelete({
    //     completed: false
    //   })
    //   .then(result => console.log(result));

    // Exercise:
    // delete one user with a particular id
    db.collection("Users")
      .findOneAndDelete({
        _id: new ObjectID("5bb6ce53a86d86112861dffe")
      })
      .then(res => console.log(res));

    // client.close();
  }
);
