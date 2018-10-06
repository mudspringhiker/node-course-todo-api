const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://localhost:27017/TodoApp",
  { useNewUrlParser: true }
);

const Todo = mongoose.model("Todo", {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

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

const User = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    tring: true
  }
});

const newUser = new User({
  name: "Tom",
  email: "tom@eamil.com"
});

newUser
  .save()
  .then(user => console.log(user), e => console.log("Unable to save", e));
