require('dotenv').config();

module.exports = {
  GENERATIVE_AI_MODEL: "gemini-1.5-flash",
  BLOG_API_ENDPOINT: 'https://xspark.live/api/post/botcreate',
  UNSPLASH_API_ENDPOINT: 'https://api.unsplash.com/photos/random',
  SERPAPI_API_KEY: process.env.SERPAPI_API_KEY,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY,
  UNSPLASH_API_KEY: process.env.UNSPLASH_API_KEY,
  BLOG_API_KEY: process.env.BLOG_API_KEY,
  BOT_PHRASE: process.env.BOTPHRASE,
  ID: process.env.ID,
};