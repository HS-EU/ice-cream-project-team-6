$(document).mouseup(function (e) {
  var div = $('.mobile-menu-content');
  if (!div.is(e.target) && div.has(e.target).length === 0) {
    $('.mobile-menu').removeClass('is-open');
    $('.content-container-overlay').removeClass('is-open');
  }
});
