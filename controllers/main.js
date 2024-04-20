const staticFile = require("../appModules/http-utils/static-file");
const getData = require("../appModules/api/api-utils");
const endpoins = require("../appModules/api/config");
const { makeRatingFile, config } = require("../appModules/rating");

async function mainRouteController(res, publicUrl, extname) {
    const data = await getData(endpoins.games);
    await makeRatingFile(config.PATH_TO_RATING_FILE, data);
    res.statusCode = 200;
    staticFile(res, publicUrl, extname);
  }
  module.exports = mainRouteController;