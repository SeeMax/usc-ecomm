// CREATE A MASTER TIMELINE
var masterTimeline = new TimelineMax();


function bottomScroll() {
  // console.log('ok');
  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  return false;
}

masterTimeline.add(HeaderTimeline ())
              .add(TrafficTimeline(), "-=2.8")
              .add(GrossTimeline (), "-=9")
              .add(CustomersTimeline(), "-=6.7")
              .add(CustomersSubTimeline(),"-=11.5")
              .addCallback(bottomScroll, "-=16.9")
              .add(ImpactTimeline (), "-=17");





