function HeaderTimeline () {
  var headerTL = new TimelineMax();

  var headerHeadline = $('#section-header h1');

  headerTL.from(headerHeadline, 3, {scale:.97, ease: Power1.easeOut});

  return headerTL;
}