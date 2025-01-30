const axios = require('axios');
const config = require('../config');

async function getImageUrl(query) {
  try {
    const response = await axios.get(config.UNSPLASH_API_ENDPOINT, {
      params: { query, client_id: config.UNSPLASH_API_KEY },
    });
    return response.data.urls.full;
  } catch (error) {
    console.error("Error getting image URL:", error);
    return null;
  }
}

module.exports = { getImageUrl };