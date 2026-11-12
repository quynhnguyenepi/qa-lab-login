// Plain JavaScript, no framework: the server HTML has an empty #app, the content is filled about
// 100 ms after the load event, so the server-sent text is far under 10% of the rendered text.
window.addEventListener('load', function () {
  setTimeout(function () {
    var para = 'This paragraph is rendered by plain JavaScript after the page has loaded. It exists only so that the '
      + 'rendered text is much longer than the server-sent text of this page, which is empty. ';
    var html = '<div id="promo-banner">Free shipping this week</div><h1 id="hero-title">QA Lab</h1>'
      + '<a id="cta-primary" href="#">Buy now</a><p id="price">$10</p>';
    for (var i = 1; i <= 6; i++) { html += '<section><h2>Section ' + i + '</h2><p>' + para + para + '</p></section>'; }
    document.getElementById('app').innerHTML = html;
  }, 100);
});
