# hugo-easy-gallery
Automagical css image gallery in [Hugo](https://gohugo.io/) using shortcodes, with optional lightbox/carousel gadget using [PhotoSwipe](http://photoswipe.com/) and jQuery.

## Demo

Demo at https://www.liwen.id.au/heg/

## Image Gallery Features

- Gallery is responsive, images are scaled/cropped to fill square (or other evenly-sized) tiles
- Optionally make gallery images zoom, grow, shrink, slide up, or slide down upon hover
- Only requires 3.6kB of CSS (unminified; you can minify it if you want)

## PhotoSwipe Features

- Loads all of the `<figure>` elements in your post, regardless of where in your post they appear, into a lightbox/carousel style image gallery
- Works with any existing `<figure>` elements/shortcodes in your posts
- Does not require you to [pre-define the image sizes](http://photoswipe.com/documentation/faq.html#image-size) (the initialisation script pre-loads the image to determine its size; you can optionally pre-define the image size if you want to avoid this pre-loading)
- Loads PhotoSwipe js and css libraries from `cdnjs.cloudflare.com`

## Installation
Put files in following places:

- /layouts/shortcodes/figure.html
- /layouts/shortcodes/gallery.html
- /layouts/shortcodes/load-photoswipe.html
- /static/js/load-photoswipe.js
- /static/css/hugo-easy-gallery.js


- If your template already loads jQuery in the header, you can delete the jQuery link in `load-photoswipe.html`.
- If your template already loads jQuery in the footer,  you should `load-photoswipe.js` from the footer instead of in `load-photoswipe.html`.



Specifying your image files:

- `{{< figure src="thumb.jpg" link="image.jpg" >}}` will use `thumb.jpg` for thumbnail and `image.jpg` for lightbox
- `{{< figure src="image.jpg" >}}` or `{{< figure link="image.jpg" >}}` will use `image.jpg` for both thumbnail and lightbox
- `{{< figure link="image.jpg" thumb="-small" >}}` will use `image-small.jpg` for thumbnail and `image.jpg` for lightbox

Optional parameters:

- All the [features/parameters](https://gohugo.io/extras/shortcodes) of Hugo's built-in `figure` shortcode work as normal, i.e. src, link, title, caption, class, attr (attribution), attrlink, alt
- `size` (e.g. `size="1024x768"`) pre-defines the image size for PhotoSwipe. Use this option if you don't want to pre-load the linked image to determine its size.
- `class` allows you to set any custom classes you want on the `<figure>` tag.





Optional parameters:

- `caption-position` - determines the captions' position over the image. Options:
  - `bottom` (default)
  - `center`
  - `none` hides captions on the page (they will only show in PhotoSwipe)
- `caption-effect` - determines if/how captions appear upon hover. Options:
  - `slide` (default)
  - `fade`
  - `none` (captions always visible)
- `hover-effect` - determines if/how images change upon hover. Options:
  - `zoom` (default)
  - `grow`
  - `shrink`
  - `slideup`
  - `slidedown`
  - `none`
- `hover-transition` - determines if/how images change upon hover. Options:
  - not set - smooth transition (default)
  - `none` - hard transition

## PhotoSwipe usage

- It doesn't matter where on the page.
- If you don't load PhotoSwipe, each figure will instead have a good ol' fashioned hyperlink to a bigger image (or - if you haven't specified a bigger image - the same one).

## CSS Hackers

`hugo-easy-gallery.css` is designed to provide square tiles in a container with `max-width: 768px`.

Here are some pointers if you want to adapt the CSS:

 - Change `.gallery {max-width: 768px;}` if you want a gallery wider than 768px.
 - Change `min-width` in the `@media` styles to change the screen widths at which the layout changes
 - Change `min-width: 9999px` in the last `@media` style to something sensible if you want to use a 4-tile layout
 - If you want more than 4 tiles per row, set `width` = 100% / number of tiles per row
 - `padding-bottom` = `width` gives square tiles. Change padding-bottom if you want some other aspect ratio, e.g. `width: 33.3%; padding-bottom: 25%` gives a 4:3 aspect ratio.

## Issues

I've tested this with the [beautifulhugo](https://github.com/halogenica/beautifulhugo) theme. If things don't work properly with other themes, raise an issue on GitHub, or even better fix the issue and submit a pull request :-)

## Credits

These blog posts helped me immensely:

- http://www.dwuser.com/education/content/creating-responsive-tiled-layout-with-pure-css/
- http://www.thehome.dk/article/photoswipe-gallery-hugo/
- https://webdesign.tutsplus.com/tutorials/the-perfect-lightbox-using-photoswipe-with-jquery--cms-23587
