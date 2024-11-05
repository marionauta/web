module.exports = function (eleventyConfig) {
  // Copy the `assets` directory to the compiled site folder
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/*.json");
  eleventyConfig.addPassthroughCopy("./src/**/*.css");
  eleventyConfig.addPassthroughCopy("./src/*.txt");

  eleventyConfig.addFilter("simpledate", function(date) {
    if (!date) return;
    const y = date.getUTCFullYear();
    const m = date.getUTCMonth() + 1;
    const d = date.getUTCDate();
    return `${y}-${m}-${d}`
  })

  return {
    dir: {
      input: "./src",
      output: "./public",
    },
    passthroughFileCopy: true,
  };
};
