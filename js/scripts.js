
//fluidbox plugin

$('.item').fluidbox();

$('.menu a').anchorScroll({
    scrollSpeed: 800, // scroll speed
    offsetTop: 80, // offset for fixed top bars (defaults to 0)
    onScroll: function () {
      // callback on scroll start
    },
    scrollEnd: function () {
      // callback on scroll end
    }
 });
