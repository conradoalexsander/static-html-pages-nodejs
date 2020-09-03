const express = require('express');
var path = require('path');

const router = express.Router();

router.get('/', async (_, res) => {
	try {
        res.sendFile(path.join(__dirname, '..', '/pages/MyPage/index.html'));
       
	} catch (err) {
	console.log(err.message);
	}
});

module.exports = router;


