var express = require('express');
var emailService = require('../services/email-service');
var router = express.Router();

// POST generated email
router.post('/', function(req, res) {
    try {
        let email = emailService.generateEmail(req.query.name, req.query.surname, req.query.domain);
        res.send(email);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// GET all generated emails
router.get('/', function(req, res) {

    let emails = emailService.getAllEmails();
    let noOfEmails = emails.length;

    let emailDB = {
        "size": noOfEmails,
        "emails": emails
    }

    res.json(emailDB);
    
});

// DELETE generated email
router.delete('/', function(req, res) {
    res.send(emailService.deleteEmail(req.query.email));
});

module.exports = router;