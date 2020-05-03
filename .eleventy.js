module.exports = function(eleventyConfig) {
  // Copy the `assets` directory to the compiled site folder
  eleventyConfig.addPassthroughCopy('./src/assets');

  return {
    dir: {
      input: "./src",
      output: "./public"
    },
    passthroughFileCopy: true,
  };
};
