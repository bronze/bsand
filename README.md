# To do:
- New Hero section. WTF do i do there?
- Full navigation/pages listed on Footer (no need for links, just showing the new architecture)
- Start porting over About and Books
- Check the size of the icon on favicons. Seem to be too small
  - https://realfavicongenerator.net/favicon_compatibility
- Blog posts open graph share images -> all page images
  - https://www.zachleat.com/web/automatic-opengraph/
  - https://github.com/zachleat/zachleat.com/blob/1b396e18bbe5e8a7b050497b501b85256cc78620/web/_posts/opengraph-posts.liquid#L12

# DONE:
- Dark mode .class to data-theme

To deploy to production (bsand.vercel.app), run `vercel --prod`
vercel build --prod
vercel deploy --prebuilt --prod

vercel --prod
netlify deploy --prod --build
