const { getTrendingTopic } = require('./services/serpapi');
const { generateBlogContent } = require('./services/gemini');
const { getImageUrl } = require('./services/unsplash');
const { publishPost } = require('./services/blog');

async function main() {
  const title = await getTrendingTopic();
  console.log("Trending Topic:", title);

  const content = await generateBlogContent(title);
  if (!content) {
    console.error("Failed to generate blog content. Exiting.");
    fetch(process.env.MY_NTFY, {
      method: 'POST',
      body: "Failed to generate blog content. Exiting. Gemini Problem",
    });
    return;
  }

  const imageUrl = await getImageUrl(title);
  if (!imageUrl) {
    console.error("Failed to get image URL. Exiting.");
    fetch(process.env.MY_NTFY, {
      method: 'POST',
      body: "Failed to get image URL. Exiting. Unsplash Problem.",
    });
    return;
  }

  const postResult = await publishPost(title, content, imageUrl);

  if (postResult) {
    fetch(process.env.MY_NTFY, {
      method: 'POST',
      body: `https://xspark.live/post/${postResult.slug}`,
    });
  } else {
    console.error("Post publishing failed.");
    fetch(process.env.MY_NTFY, {
      method: 'POST',
      body: "Post publishing failed. Blog issue.",
    });
  }
}

main();