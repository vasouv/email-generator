const EMAILS_DB = []

function generateEmail(name, surname) {

    if (!name || !surname) {
        throw new Error("Name or Surname is blank");
    }

    let nameL = name.toLowerCase();
    let surnameL = surname.toLowerCase();
    let email = `${nameL}.${surnameL}@mail.com`;

    if (emailExists(email)) {
        throw new Error("Email already exists");
    }

    EMAILS_DB.push(email);
    console.log(EMAILS_DB);

    return email;
}

function emailExists(email) {
    return EMAILS_DB.includes(email);
}

module.exports.generateEmail = generateEmail;