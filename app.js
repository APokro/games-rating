const http = require ('http')
const staticFile = require ("./appModules/http-utils/static-file")
const path = require("path")
const mimeTypes = require ("./appModules/http-utils/mime-types")
const fs = require('fs');
const mainRouteController = require('./controllers/default.js');
const defaultRouteController = require('./controllers/default.js');
const gameRouteController = require('./controllers/game.js');
const voteRouteController = require('./controllers/vote.js')

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
     mainRouteController(res, "/index.html", ".html");
     break;
    case "/game":
     gameRouteController(res);
     break;
    case "/vote":
      voteRouteController(req, res);
      break;
    default:
      defaultRouteController(res, url);
  }
});

server.listen(3005);
console.log('Server is running on port 3005');