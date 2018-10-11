const { ObjectId } = require("mongodb");

const { mongoose } = require("../server/db/mongoose");
const { Todo } = require("../server/models/todo");
const { User } = require("../server/models/user");

// ObjectId("5bbf68f69376e032e52ae1d1") copied form robomongo
const id = "5bbf68f69376e032e52ae1d1";

if (!ObjectId.isValid(id)) {
  console.log("ID not valid");
}
// Todo.find({
//   _id: id // mongoose will do the conversion itself
// }).then(todos => console.log("Todos", todos));

// // .findOne is recommended over .find because it returns an object while .find returs an array
// Todo.findOne({
//   _id: id
// }).then(todo => console.log("Todo", todo));

Todo.findById(id)
  .then(todo => {
    if (!todo) {
      return console.log("Id not found");
    }
    console.log("Todo By Id", todo);
  })
  .catch(e => console.log(e));

// For more, go to mongoosejs.com--> docs--> queries

// Queries on the User model:
// ObjectId("5bb82d41f5b8d234781c4358") - copied from Robo3T
const userId = "5bb82d41f5b8d234781c4358";
User.findById(userId)
  .then(user => {
    if (!user) {
      return console.log("User not found");
    }
    console.log(JSON.stringify(user, undefined, 2));
  })
  .catch(e => console.log(e));
