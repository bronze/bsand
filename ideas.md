cloudflare wrangler?
npx wrangler pages deploy dist --commit-dirty=true

## fonts: the story so near/the story ends

- https://www.fontspring.com/fonts/comicraft/the-story-begins-ends

## images:

- https://www.aleksandrhovhannisyan.com/blog/eleventy-image-plugin/#4-returning-a-lesspicturegreater-tag
- https://gfscott.com/blog/eleventy-img-without-central-image-directory/
- https://www.zachleat.com/web/fluid-images/

## lighthouse:

- https://github.com/stefanfrede/11st-starter-kit
- https://github.com/11ty/eleventy-base-blog/blob/main/netlify.toml

## https://pagefind.app/

- https://rknight.me/using-pagefind-with-eleventy-for-search/
- https://cloudcannon.com/blog/introducing-pagefind/

## https://jampack.divriots.com/

## alpinejs scrolling

- https://codepen.io/jwssnr/pen/MWVRzap
- https://www.thiscodeworks.com/set-boolean-to-true-after-scrolling-on-page-using-alpine-js-html/6047c854b5a8500014ae3562

## alpinejs scroll progress

- https://github.com/google/eleventy-high-performance-blog#getting-started
- https://codepen.io/A_kamel/pen/qBmmGKJ

```
if (window.ResizeObserver && document.querySelector("header nav #nav")) {
  var progress = document.getElementById("reading-progress");

  var timeOfLastScroll = 0;
  var requestedAniFrame = false;
  function scroll() {
    if (!requestedAniFrame) {
      requestAnimationFrame(updateProgress);
      requestedAniFrame = true;
    }
    timeOfLastScroll = Date.now();
  }
  addEventListener("scroll", scroll);

  var winHeight = 1000;
  var bottom = 10000;
  function updateProgress() {
    requestedAniFrame = false;
    var percent = Math.min(
      (document.scrollingElement.scrollTop / (bottom - winHeight)) * 100,
      100
    );
    progress.style.transform = `translate(-${100 - percent}vw, 0)`;
    if (Date.now() - timeOfLastScroll < 3000) {
      requestAnimationFrame(updateProgress);
      requestedAniFrame = true;
    }
  }

  const observe = () => {
    new ResizeObserver(() => {
      const bottomOfMainContent = document.querySelector("#comments,footer");
      bottom =
        document.scrollingElement.scrollTop +
        bottomOfMainContent.getBoundingClientRect().top;
      winHeight = window.innerHeight;
      scroll();
    }).observe(document.body);
  };
  if (document.readyState != "loading") {
    observe();
  } else {
    document.addEventListener("DOMContentLoaded", observe);
  }
}
```
