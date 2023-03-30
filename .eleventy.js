const eleventySass=require("@11tyrocks/eleventy-plugin-sass-lightningcss");
const eleventyWebcPlugin=require("@11ty/eleventy-plugin-webc");
const {eleventyImagePlugin}=require("@11ty/eleventy-img");
const eleventyNavigationPlugin=require("@11ty/eleventy-navigation");
const criticalCss=require("eleventy-critical-css");
const bundlerPlugin=require("@11ty/eleventy-plugin-bundle");
const {EleventyRenderPlugin}=require("@11ty/eleventy");
const CleanCSS=require("clean-css");


module.exports=function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
  // Nav
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  // WebC
  eleventyConfig.addPlugin(eleventyWebcPlugin, {
    components: [
      // …
      // Add as a global WebC component
      "npm:@11ty/eleventy-img/*.webc",
    ]
  });

  // Image plugin
  eleventyConfig.addPlugin(eleventyImagePlugin, {
    // Set global default options
    formats: ["avif", "webp", "png"],
    urlPath: "/img/",

    // Notably `outputDir` is resolved automatically
    // to the project output directory

    defaultAttributes: {
      loading: "lazy",
      decoding: "async"
    }
  });

  // SASS
  eleventyConfig.addPlugin(eleventySass);
  // BUNDLER
  eleventyConfig.addPlugin(bundlerPlugin);
  // CRITICAL
  // eleventyConfig.addPlugin(criticalCss);
  eleventyConfig.addPassthroughCopy("src/main.js");
  eleventyConfig.addPassthroughCopy("public");

  return {
    dir: {
      input: "src",
      output: "dist",
    },
  };

};
