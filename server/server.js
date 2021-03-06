const express = require("express");
const bodyParser = require("body-parser");

const { mongoose } = require("./db/mongoose");
const { Todo } = require("./models/todo");
const { User } = require("./models/user");
const { ObjectId } = require("mongodb");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.post("/todos", (req, res) => {
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

app.get("/todos", (req, res) => {
  Todo.find().then(
    todos => {
      res.send({ todos });
    },
    e => res.status(400).send(e)
  );
});

// GET /todos/1234322
app.get("/todos/:id", (req, res) => {
  const id = req.params.id;
  if (!ObjectId.isValid(id)) {
    res.status(404).send();
  } else {
    Todo.findById(id)
      .then(todo => {
        if (!todo) {
          return res.status(404).send();
        }
        res.send({ todo });
      })
      .catch(e => res.status(404).send());
  }
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = { app };
