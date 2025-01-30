const axios = require('axios');
const config = require('../config');

async function publishPost(title, content, imageUrl) {
  try {
    const response = await axios.post(config.BLOG_API_ENDPOINT, {
      title,
      content,
      image: imageUrl,
      code: config.BOT_PHRASE,
      id: config.ID,
    });
    console.log('Post published successfully!');
    return response.data;
  } catch (error) {
    console.error("Error publishing post:", error);
    if (error.response) {
      console.error("Response details:", error.response.status, error.response.data);
    }
    return null;
  }
}

module.exports = { publishPost };