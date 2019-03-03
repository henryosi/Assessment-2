var express = require('express');
var router = express.Router();
var Todo = require('./todo');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  title: 'Unit 2 Assessment', 
  heading: 'To Do List' ,
  empty: 'There is No To Dos yet',
  todos: Todo.getAll()
});
});

router.post('/', function(req, res, next) {
  req.body.done = false;
  Todo.create(req.body);
    res.redirect('/');
  });

router.delete('/:id', function(req, res, next) {
  Todo.deleteOne(req.params.id);
    res.redirect('/');
  });

module.exports = router;
