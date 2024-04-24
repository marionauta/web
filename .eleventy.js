module.exports = function (eleventyConfig) {
  // Copy the `assets` directory to the compiled site folder
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/*.json");
  eleventyConfig.addPassthroughCopy("./src/**/*.css");
  eleventyConfig.addPassthroughCopy("./src/*.txt");

  return {
    dir: {
      input: "./src",
      output: "./public",
    },
    passthroughFileCopy: true,
  };
};
