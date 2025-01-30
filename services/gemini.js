const { GoogleGenerativeAI } = require("@google/generative-ai");
const config = require('../config');
const { marked } = require('marked');

async function generateBlogContent(title) {
  const genAI = new GoogleGenerativeAI(config.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: config.GENERATIVE_AI_MODEL });
  const prompt = `Generate some text content about ${title} for a blog.`;

  try {
    const result = await model.generateContent(prompt);
    let content = result.response.text();

    content = content.replace(/\\n/g, '\n');
    content = content.replace(/\\/g, '');

    const htmlContent = marked(content);

    return htmlContent;
  } catch (error) {
    console.error("Error generating content:", error);
    return null;
  }
}

module.exports = { generateBlogContent };
