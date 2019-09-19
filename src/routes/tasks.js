const express = require('express');
const router = express.Router();
const task = require('./models/Task');
router.get('/', (req, res)  =>
{
task.find()
.then(data=> {
    res.json(data)
})
});

module.exports = router;