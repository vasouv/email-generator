var express = require('express');
var emailService = require('../services/email-service');
var router = express.Router();

// GET generated email
router.get('/', function(req, res) {

    try {
        let email = emailService.generateEmail(req.query.name, req.query.surname);
        res.send(email);
    } catch (error) {
        res.status(400).send(error.message);
    }

});

module.exports = router;