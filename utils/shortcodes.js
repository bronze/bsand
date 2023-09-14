// https://github.com/11ty/eleventy/issues/813

module.exports={
  // book_url: function (liquidEngine) {
  //   return {
  //     parse(tagToken, remainingTokens=[]) {
  //       this.str=tagToken.args;
  //     },
  //     async render(ctx) {
  //       const slug=await liquidEngine.evalValue(this.str, ctx);
  //       const postFilename=`./src/books/${slug}`;
  //       const posts=ctx.environments.collections.books;
  //       const post=posts.find(p => p.inputPath.startsWith(postFilename));
  //       if (post) {
  //         return post.url;
  //       }
  //       throw new Error(`${slug} not found in post collection.`);
  //     },
  //   };
  // }
}
