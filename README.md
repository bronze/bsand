lighthouse http://localhost:8080/ --output-path ./dist/lighthouse --quiet --chrome-flags="--headless"
# To do:
- New Hero section. WTF do i do there?
- fonts https://www.aleksandrhovhannisyan.com/blog/configuring-web-fonts-in-11ty-with-global-data/
- Check the size of the icon on favicons. Seem to be too small
  - https://realfavicongenerator.net/favicon_compatibility
- Blog posts open graph share images -> all page images
  - https://bnijenhuis.nl/notes/automatically-generate-open-graph-images-in-eleventy/
  - https://annualbeta.com/blog/dynamic-social-sharing-images-with-eleventy/
  - https://github.com/11ty/eleventy/discussions/2439
  - https://www.zachleat.com/web/automatic-opengraph/
  - https://github.com/zachleat/zachleat.com/blob/1b396e18bbe5e8a7b050497b501b85256cc78620/web/_posts/opengraph-posts.liquid#L12
- Hover links: https://css-tricks.com/css-link-hover-effects/
- images https://dev.to/itsrennyman/needs-the-100-performance-score-on-lighthouse-my-11ty-experience-5552

# DONE:
- Full navigation/pages listed on Footer (no need for links, just showing the new architecture)
- Start porting over About and Books
- Dark mode .class to data-theme

To deploy to production (bsand.vercel.app), run `vercel --prod`
vercel build --prod
vercel deploy --prod --prebuilt

vercel --prod
netlify deploy --prod --build
