// Require the express framework mto create route modules that can be used by the API
const express = require('express');
// Create an instance of the router module of the express class
const router = express.Router();
// Require the the model with the schema object of the data to query
const Todo = require('../models/todo');


// view all tasks
router.get('/todos', (req, res, next) => {
  // get placeholder
    // This will return all the data, exposing only the id and action field to the client
    Todo.find({}, 'action')
    .then((data) => res.json(data))
    .catch(next);
});

// Add/Create a task
router.post('/todos', (req, res, next) => {
  // post placeholder
  if (req.body.action) {
    Todo.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

// delete a completed task
router.delete('/todos/:id', (req, res, next) => {
  // delete placeholder
  Todo.findOneAndDelete({ _id: req.params.id })
  .then((data) => res.json(data))
  .catch(next);
});


// Export the router model so it can be imported by other modules
module.exports = router;