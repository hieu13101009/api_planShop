const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('notesnotesnotes')
    res.json([])
});

module.exports = router;