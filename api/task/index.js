var router  = require('express').Router();
var config  = require('../../config');
var Task    = require('./taskModel.js');
var twilio  = require('twilio')(config.twilio.accountSid, config.twilio.authToken);

function getSingleTask(req, res, next) {
  if(!req.params.id) {
    return next();
  }

  Task.findById(req.params.id, function find(err, task) {
    if(err) {
      return res.send(500);
    }

    if(!task) {
      return res.send(404);
    }

    req.task = task;
    next();
  });
}

router.get('/', function(req, res, next) {
  Task.find({}, function find(err, tasks) {
    res.send(tasks);
  });
});

router.post('/', function(req, res, next) {
  Task.create(req.body, function (err, task) {
    if(err) {
      return res.send(500);
    }

    res.send(201, task);
  });
});

router.all('/:id', getSingleTask);

router.get('/:id', function(req, res, next) {
  res.send(req.task);
});

router.put('/:id', function(req, res, next) {
  var taskStatus = req.task.done;

  req.task.set('done', req.body.done);
  req.task.set('title', req.body.title);
  req.task.set('body', req.body.body);

  req.task.save(function (err) {
    if(err) {
      return res.send(500);
    }

    // Send a text message if the task has been marked done
    if(taskStatus !== req.body.done && req.body.done === true) {
      twilio.messages.create({
        to: config.twilio.phonenumber,
        from: config.twilio.phonenumber,
        body: '"' + req.body.title + '" task has been marked as done.',
      }, function(err, message) {
        console.log(err, message);
      });
    }

    res.send(200, req.task);
  });
});

router.delete('/:id', function(req, res, next) {
  req.task.remove(function (err) {
    if(err) {
      return res.send(500);
    }

    res.send(200);
  });
});

module.exports = router;