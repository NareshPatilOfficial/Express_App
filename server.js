const app = require('./app');

//find and test routes of an express application. on -> http://localhost:3000/api-docs
const sitemap = require('express-sitemap-html');
sitemap.swagger('My App APIs', app)

const port = 3000
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
