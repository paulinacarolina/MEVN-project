const express = require('express');
const router = express.Router();
const task = require('./model/Task');
router.get('/', (req, res)  =>
{
task.find()
.then(data=>{
    res.json(data)
})
});

module.exports = router;