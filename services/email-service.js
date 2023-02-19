const EMAILS_DB = []

function generateEmail(name, surname, domain) {

    if (!name || !surname || !domain) {
        throw new Error("Name, Surname or Domain is blank");
    }

    validateDomain(domain);

    let nameL = name.toLowerCase();
    let surnameL = surname.toUpperCase();
    let email = `${nameL}.${surnameL}@${domain}`;

    if (emailExists(email)) {
        throw new Error("Email already exists");
    }

    EMAILS_DB.push(email);

    return email;
}

function validateDomain(domain) {
    if (!domain.includes('.')) {
        throw new Error("Domain must be xxx.ccc");
    }
    return true;
}

function emailExists(email) {
    return EMAILS_DB.includes(email);
}

function getAllEmails() {
    return EMAILS_DB;
}

function deleteEmail(email) {
    if (!emailExists(email)) {
        return false;
    }
    let index = EMAILS_DB.indexOf(email);
    EMAILS_DB.splice(index, 1);
    return true;
}

module.exports.generateEmail = generateEmail;
module.exports.getAllEmails = getAllEmails;
module.exports.deleteEmail = deleteEmail;