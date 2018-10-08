const express = require("express");
const bodyParser = require("body-parser");

const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
  // console.log(req.body);
  const todo = new Todo({
    text: req.body.text
  });

  todo.save().then(
    doc => {
      res.send(doc);
    },
    e => {
      res.status(400).send(e);
    }
  );
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

// const newTodo = new Todo({
//   text: "Buy gloves",
//   completed: true
// });

// newTodo.save().then(
//   doc => {
//     console.log("Saved todo", doc);
//   },
//   e => {
//     console.log("Unable to save todo");
//   }
// );

// const otherTodo = new Todo({
//   text: "Get lacinato kale"
// });

// otherTodo.save().then(
//   doc => {
//     console.log(JSON.stringify(doc, undefined, 2));
//   },
//   e => console.log("unable to save", e)
// );

// User = email, password, associated wth user
//  email require, trim, set type, set min length 1

// const newUser = new User({
//   name: "Tom",
//   email: "tom@eamil.com"
// });

// newUser
//   .save()
//   .then(user => console.log(user), e => console.log("Unable to save", e));

module.exports = { app };
