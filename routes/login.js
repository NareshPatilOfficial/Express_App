let express = require('express');
let router = express.Router();

router.post('/', (request, response, next) => {
    response.send('Patil');
})

module.exports = router;