const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  books: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Book",
  },
});

module.exports = mongoose.model("Author", AuthorSchema);
