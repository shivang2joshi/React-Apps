const express = require('express');
const router = express.Router();

router.get('/:id',function(req,res){
    res.json(req.params.id*10);
});

module.exports = router;