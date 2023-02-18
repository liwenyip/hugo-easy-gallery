/*
Put this file in /static/js/load-photoswipe.js
Documentation and licence at https://github.com/liwenyip/hugo-easy-gallery/
*/
/* Show an alert if this js file has been loaded twice */
if (window.loadphotoswipejs) {
    window.alert("You've loaded load-photoswipe.js twice. See https://github.com/liwenyip/hugo-easy-gallery/issues/6")
} 
var loadphotoswipejs = 1

/* TODO: Make the share function work */

document.addEventListener('DOMContentLoaded', function() {
    var items = []; // array of slide objects that will be passed to PhotoSwipe()
    // for every figure element on the page:
    document.querySelectorAll('figure').forEach(function($figure, index) {
        if ($figure.className == 'no-photoswipe') return true;  // ignore any figures where class="no-photoswipe"
        var $a     = $figure.querySelector('a'),
            $img   = $figure.querySelector('img'),
            $src   = $a.href,
            $title = $img.alt,
            $msrc  = $img.src;
        // if data-size on <a> tag is set, read it and create an item
        if ($a.dataset.size) {
            var $size = $a.dataset.size.split('x');
            var item = {
                src   : $src,
                w     : $size[0],
                h     : $size[1],
                title : $title,
                msrc  : $msrc
            };
            console.log("Using pre-defined dimensions for " + $src);
            // if not, set temp default size then load the image to check actual size
        } else {
            var item = {
                src		: $src,
                w		: 400, // temp default size
                h 		: 300, // temp default size
                title 	: $title,
                msrc	: $msrc
            };
            console.log("Using default dimensions for " + $src);
            // load the image to check its dimensions
            // update the item as soon as w and h are known (check every 30ms)
            var img = new Image(); 
            img.src = $src;
            var wait = setInterval(function() {
                var w = img.naturalWidth,
                    h = img.naturalHeight;
                if (w && h) {
                    clearInterval(wait);
                    item.w = w;
                    item.h = h;
                    console.log("Got actual dimensions for " + img.src);
                }
            }, 30);
        }
        // Save the index of this image then add it to the array
        items.push(item);
        // Event handler for click on a figure
        $figure.addEventListener('click', function(event) {
            event.preventDefault();  // prevent the normal behaviour i.e. load the <a> hyperlink
            // Get the PSWP element and initialize it with the desired options
            var $pswp = document.querySelector('.pswp');
            var options = {
                index: index,
                bgOpacity: 0.8,
                showHideOpacity: true
            }
            new PhotoSwipe($pswp, PhotoSwipeUI_Default, items, options).init();
        }, false);
    });
}, false);
