// CREATE A MASTER TIMELINE
var masterTimeline = new TimelineMax();


function bottomScroll() {
  // console.log('ok');
  $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  return false;
}

// CONTROL THE TIMING OF EACH ANIMATION
masterTimeline.add(headerTL)
.add( trafficTimeline() );
// .add(grossTL, "14")
// .add(customersTL, "18")
// .add(customersSubTL, "35.5")
// .add(impactTL, "44")
// .addCallback(bottomScroll, "44.1");

