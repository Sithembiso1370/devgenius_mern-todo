const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/todos', (req, res, next) => {
  // get placeholder
    // This will return all the data, exposing only the id and action field to the client
    Todo.find({}, 'action')
    .then((data) => res.json(data))
    .catch(next);
});


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


router.delete('/todos/:id', (req, res, next) => {
  // delete placeholder
  Todo.findOneAndDelete({ _id: req.params.id })
  .then((data) => res.json(data))
  .catch(next);
});



module.exports = router;