# email-generator
 
**Express JS** application that creates sample email with first and last name.

## Build
`npm install`

## Run Dev Server
`npm run devstart`

## Create Sample Email
Endpoint: `/email-generate`

Query Parameters: **name**, **surname**

`localhost:3000/email-generate?name=Vasilis&surname=Souvatzis` will create the following email: *vasilis.souvatzis@mail.com*