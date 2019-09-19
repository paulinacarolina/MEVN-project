const express = require('express');
const router = express.Router();
const task = require('./models/Task');
router.get('/',async (req, res)  =>
{
   const tasks =  await task.find();// storing all the tasks if db responds
   console.log(tasks);//printing the db results
});

module.exports = router;