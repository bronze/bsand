const markdownIt=require('markdown-it')
const markdownItAnchor=require('markdown-it-anchor')

const EleventyPluginNavigation=require('@11ty/eleventy-navigation')
const EleventyPluginRss=require('@11ty/eleventy-plugin-rss')
const EleventyPluginSyntaxhighlight=require('@11ty/eleventy-plugin-syntaxhighlight')
const EleventyVitePlugin=require('@11ty/eleventy-plugin-vite')

const rollupPluginCritical=require('rollup-plugin-critical').default

const filters=require('./utils/filters.js')
const transforms=require('./utils/transforms.js')
const shortcodes=require('./utils/shortcodes.js')

const pluginImages=require("./eleventy.config.images.js")
const pluginWebc=require('@11ty/eleventy-plugin-webc');
const {EleventyRenderPlugin}=require("@11ty/eleventy");
const embedEverything=require("eleventy-plugin-embed-everything");
const {resolve}=require('path')

module.exports=function (eleventyConfig) {
  eleventyConfig.setServerPassthroughCopyBehavior('copy');
  eleventyConfig.addPassthroughCopy("public");

  // Plugins
  eleventyConfig.addPlugin(pluginImages)
  eleventyConfig.addPlugin(pluginWebc, {
    // Glob to find no-import global components
    // This path is relative to the project-root!
    // The default value is shown:
    // components: "_components/**/*.webc",

    // or an Array (Eleventy WebC v0.9.2+)
    components: [
      "src/_includes/**/*.webc",
    ]
  })
  eleventyConfig.addPlugin(embedEverything)
  eleventyConfig.addPlugin(EleventyRenderPlugin)
  eleventyConfig.addPlugin(EleventyPluginNavigation)
  eleventyConfig.addPlugin(EleventyPluginRss)
  eleventyConfig.addPlugin(EleventyPluginSyntaxhighlight)
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    tempFolderName: '.11ty-vite', // Default name of the temp folder

    // Vite options (equal to vite.config.js inside project root)
    viteOptions: {
      server: {
        mode: 'development',
        middlewareMode: true
      },
      build: {
        emptyOutDir: false,
        mode: 'production',
        sourcemap: 'true',
        manifest: true,
        // This puts CSS and JS in subfolders – remove if you want all of it to be in /assets instead
        rollupOptions: {
          // output: {
          //   assetFileNames: 'assets/css/main.[hash].css',
          //   chunkFileNames: 'assets/js/[name].[hash].js',
          //   entryFileNames: 'assets/js/[name].[hash].js'
          // },
          plugins: [rollupPluginCritical({
            criticalUrl: './',
            criticalBase: './dist/',
            criticalPages: [
              {uri: 'index.html', template: 'index'},
              {uri: 'blog/index.html', template: 'blog/index'},
              {uri: '404.html', template: '404'},
              {uri: 'about/index.html', template: 'about/index'},
              {uri: 'books/index.html', template: 'books/index'},
              {uri: 'contact/index.html', template: 'contact/index'},
            ],
            criticalConfig: {
              inline: true,
              dimensions: [
                {
                  height: 900,
                  width: 375,
                },
                {
                  height: 720,
                  width: 1280,
                },
                {
                  height: 1080,
                  width: 1920,
                }
              ],
              penthouse: {
                forceInclude: ['.fonts-loaded-1 body', '.fonts-loaded-2 body', /^\:root.*/],
              }
            }
          })
          ]
        }
      }
    }
  })

  // Filters
  Object.keys(filters).forEach((filterName) => {
    eleventyConfig.addFilter(filterName, filters[filterName])
  })
  // eleventyConfig.addShortcode("postByBookTitle", function (slug) {
  //   const posts=this.environments.collections.books;
  //   const post=posts.find((p) => p.url.endsWith(`/${slug}/`));
  //   if (post===undefined) {
  //     throw new Error(`${slug} not found in post collection.`);
  //   }
  //   return post.url;
  // });
  eleventyConfig.addLiquidTag("book_url", function (liquidEngine) {
    return {
      parse(tagToken, remainingTokens=[]) {
        this.str=tagToken.args;
      },
      async render(ctx) {
        const slug=await liquidEngine.evalValue(this.str, ctx);
        // const postFilename=`./src/books/${slug}`;
        const posts=ctx.environments.collections.books;
        // console.log(posts);
        // const post=posts.find(p => p.inputPath.startsWith(postFilename));
        // const post=posts.find(p => p.data.title===slug);
        const slugLowercase=slug.toLowerCase();
        const bookName=this.str.replace(/["]/g, '');
        const post=posts.find(p => p.data.title.toLowerCase()===slugLowercase);
        if (post) {

          return `<a href="${post.url}">${bookName}</a>`;
        }
        throw new Error(`${slug} not found in post collection.`);
      },
    };
  });

  // Transforms
  Object.keys(transforms).forEach((transformName) => {
    eleventyConfig.addTransform(transformName, transforms[transformName])
  })

  // Shortcodes
  Object.keys(shortcodes).forEach((shortcodeName) => {
    eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName])
  })

  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`)

  // Customize Markdown library and settings:
  let markdownLibrary=markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.ariaHidden({
      placement: 'after',
      class: 'direct-link',
      symbol: '#',
      level: [1, 2, 3, 4]
    }),
    slugify: eleventyConfig.getFilter('slug')
  })
  eleventyConfig.setLibrary('md', markdownLibrary)

  // Layouts
  eleventyConfig.addLayoutAlias('base', 'base.njk')
  eleventyConfig.addLayoutAlias('post', 'post.njk')

  // Copy/pass-through files
  eleventyConfig.addPassthroughCopy('src/assets/css')
  eleventyConfig.addPassthroughCopy('src/assets/js')
  eleventyConfig.addPassthroughCopy('src/assets/images')

  return {
    templateFormats: ['md', 'njk', 'html', 'liquid'],
    htmlTemplateEngine: 'njk',
    passthroughFileCopy: true,
    dir: {
      input: 'src',
      // better not use "public" as the name of the output folder (see above...)
      output: 'dist',
      includes: '_includes',
      layouts: 'layouts',
      data: '_data'
    }
  }
}
