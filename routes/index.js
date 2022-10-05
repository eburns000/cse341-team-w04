const routes = require('express').Router();
const temple = require('./temple');
const swagger = require('./swagger');

routes.use('/', swagger);
routes.use('/temples', temple);
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://localhost:8080/api-docs',
    };
    res.send(docData);
  })
);

module.exports = routes;
