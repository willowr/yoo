module.exports = function(config) {
  config.addPassthroughCopy('src/css');
  config.addPassthroughCopy('src/js');
  config.addPassthroughCopy('src/images');
  return {
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "_site"
    }
  }
}
