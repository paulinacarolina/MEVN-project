const express = require('express');
const router = express.Router();

router.get('/tasks', (req, res)  =>
{
res.send('Api TASKS here');
});

module.exports = router;