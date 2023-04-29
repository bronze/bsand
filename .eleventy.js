const eleventySass=require("@11tyrocks/eleventy-plugin-sass-lightningcss");
const eleventyWebcPlugin=require("@11ty/eleventy-plugin-webc");
const {eleventyImagePlugin}=require("@11ty/eleventy-img");
const eleventyNavigationPlugin=require("@11ty/eleventy-navigation");
const criticalCss=require("eleventy-critical-css");
const {EleventyRenderPlugin}=require("@11ty/eleventy");
const CleanCSS=require("clean-css");
const htmlmin=require("html-minifier");

const pluginImages=require("./eleventy.config.images.js");
const {EleventyHtmlBasePlugin}=require("@11ty/eleventy");
const pluginBundle=require("@11ty/eleventy-plugin-bundle");


module.exports=function (eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });
  // App plugins
  eleventyConfig.addPlugin(pluginImages);

  // Official plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin); //Nav
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  eleventyConfig.addPlugin(pluginBundle);

  // WebC
  eleventyConfig.addPlugin(eleventyWebcPlugin, {
    components: [
      "./src/_components/**/*.webc",
      "npm:@11ty/eleventy-img/*.webc",
      "npm:@11ty/is-land/*.webc"
    ]
  });
  // Image plugin
  eleventyConfig.addPlugin(eleventyImagePlugin, {
    // Set global default options
    formats: ["webp", "jpeg", "png"],
    urlPath: "/img/",
    outputDir: "dist/img/",

    // Notably `outputDir` is resolved automatically
    // to the project output directory

    defaultAttributes: {
      loading: "lazy",
      decoding: "async"
    }
  });

  // SASS
  eleventyConfig.addPlugin(eleventySass);

  // CRITICAL
  // eleventyConfig.addPlugin(criticalCss);
  eleventyConfig.addPassthroughCopy("src/main.js");
  eleventyConfig.addPassthroughCopy({"public": "/"});
  if (process.env.ELEVENTY_ENV!='dev') {
    eleventyConfig.addTransform("htmlmin", function (content) {
      // Prior to Eleventy 2.0: use this.outputPath instead
      if (this.page.outputPath&&this.page.outputPath.endsWith(".html")) {
        let minified=htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true
        });
        return minified;
      }

      return content;
    });
  }
  // Run Eleventy when these files change:
  // https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

  // Watch content images for the image pipeline.
  eleventyConfig.addWatchTarget("src/**/*.{svg,webp,png,jpeg}");
  return {
    dir: {
      input: "src",
      output: "dist",
      layouts: '_layouts',
      data: "_data" // ⚠️ This value is relative to your input directory.
    },
  };

};
