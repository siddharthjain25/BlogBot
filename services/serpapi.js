const { getJson } = require("serpapi");
const config = require('../config');

async function getTrendingTopic() {
  return new Promise((resolve, reject) => {
    getJson({
      engine: "google_trends_trending_now",
      geo: "US",
      api_key: config.SERPAPI_API_KEY,
    }, (json) => {
      for (const search of json.trending_searches) { 
        if (search.categories && search.categories[0] && search.categories[0].name === "Technology") {
          resolve(search.query);
          return; 
        }
      }
      resolve("default_topic"); 
    });
  });
}

module.exports = { getTrendingTopic };