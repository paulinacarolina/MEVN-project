const express = require('express');
const router = express.Router();
const task = require('../models/Task');


router.get('/',async (req, res)  =>
{
   const tasks =  await task.find();// storing all the tasks if db responds
   res.json(tasks);//printing the db results as json
   console.log(tasks);//ptinting the db results in console
});

router.post('/',async (req, res)  =>
{
   new Task();//create new task
   console.log(new Task());
});

module.exports = router;