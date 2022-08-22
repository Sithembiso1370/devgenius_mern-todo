// Require the mongoose framework
const mongoose = require('mongoose');

// Create a Mongoose schema instance to use
const Schema = mongoose.Schema;

// Create schema for todo
const TodoSchema = new Schema({
  // Create a column/attribute action
  action: {
    // define attributes rules
    type: String,
    required: [true, 'The todo text field is required'],
  },
});


// Create model for todo using the above schema
const Todo = mongoose.model('todo', TodoSchema);

// Export the schemas model to be used by other parts of the application
module.exports = Todo;