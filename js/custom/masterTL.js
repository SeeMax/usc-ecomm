// CREATE A MASTER TIMELINE
var masterTimeline = new TimelineMax();


function bottomScroll() {
  // console.log('ok');
  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  return false;
}

masterTimeline.add(HeaderTimeline ())
              .add( TrafficTimeline(), "-=2")
              .add(GrossTimeline (), "-=10")
              .add(CustomersTimeline ("-=25"))
              .add(CustomersSubTimeline())
              .add(ImpactTimeline ());



              // masterTimeline.seek(0);