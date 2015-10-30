function CustomersSubTimeline () {
  // DEFINE MASTER TIMELINE
  var customersSubTL = new TimelineMax();




  var customersSubOneTL = new TimelineMax();

  // DEFINE OPENING SEQUENCE VARIABLES
  var customersSubSectionOne = $('#subsection-fact-one'),
      customersSubFactOne = $('#subsection-fact-one .fact'),
      customersSvgOne = $('#subsection-fact-one svg'),
      customersDigitsOne = $('#subsection-fact-one .digits'),
      customersSubDigitsOne = $('#subsection-fact-one .sub-digits');

  // OPEN CUSTOMERS SECTION, ANIMATE SVG, AND MOVE TYPE OUT FROM BEHIND CIRCLE
  customersSubOneTL.from(customersSubSectionOne, .2, {height:0, padding:0})
  .from(customersSubFactOne, .3, {height:0, padding:0, ease: Elastic.easeInOut.config(1, .75)})
  .from(customersDigitsOne, .5, {opacity:0, x:-40, ease: Elastic.easeInOut.config(1.2, .75)}, "+=.2")
  .add("subdigitsOneIn")
  .from(customersSubDigitsOne, .4, {x:-40, opacity:0, ease: Elastic.easeInOut.config(1.2, .75)}, "subdigitsInOne-=.3")
  .from(customersSvgOne, 1, {opacity:0, x:40, ease: Elastic.easeInOut.config(1.2, .75)}, "subdigitsInOne-=.5");



  // DEFINE THE MAGNIFY TIMELINES
  var magnifyTL = new TimelineMax({repeat:3});
  var magnifyStayTL = new TimelineMax();

  // DEFINE OBJECTS FOR MAGNIFY TIMELINE
  var magnifyGiga = $('#svg-magnify-giga'),
      magnifyGigaType = $('#svg-magnify-gigatype'),
      magnifyPhone = $('#svg-magnify-phone');

  // ANIMATE PHONE AND GB IN AND OUT
  magnifyTL.from(magnifyPhone, .6, { x:-25, ease: Power4.easeIn}, "phoneSlideIn")
  .from(magnifyPhone, .2, { skewX:5, transformOrigin:"bottom left", ease: Power4.easeIn}, "phoneSlideIn+=.5")
  .to(magnifyPhone, .6, { x:25, ease: Power4.easeIn}, "phoneSlideOut+=1")
  .to(magnifyPhone, .6, { skewX:-5, transformOrigin:"bottom right", ease: Elastic.easeOut.config(.5, 1)}, "phoneSlideOut+=1.3")
  .from(magnifyGiga, .6, { x:-25, ease: Power4.easeIn}, "gigaSlideIn")
  .from(magnifyGiga, .6, { skewX:10, ease: Power4.easeIn}, "gigaSlideIn")
  .to(magnifyGiga, .6, { x:25, ease: Power4.easeIn}, "gigaSlideOut+=1")
  .to(magnifyGiga, .6, { skewX:-5, transformOrigin:"bottom right", ease: Elastic.easeOut.config(.5, 1)}, "gigaSlideOut+=1");

  // RETURN THE PHONE TO VIEW AT END
  magnifyStayTL.to(magnifyPhone, .6, { x:0, skewX:0, ease: Power4.easeIn})
  .to(magnifyGiga, .6, { x:-25, skewX:0, opacity:0, ease: Power4.easeIn}, "-=.6")


  customersSubOneTL.add(magnifyTL)
  .add(magnifyStayTL);



  var customersSubTwoTL = new TimelineMax();

  var customersSubSectionTwo = $('#subsection-fact-two'),
      customersSubFactTwo = $('#subsection-fact-two .fact'),
      customersSvgTwo = $('#subsection-fact-two svg'),
      customersDigitsTwo = $('#subsection-fact-two .digits'),
      customersSubDigitsTwo = $('#subsection-fact-two .sub-digits');

  // OPEN CUSTOMERS SECTION, ANIMATE SVG, AND MOVE TYPE OUT FROM BEHIND CIRCLE
  customersSubTwoTL.from(customersSubSectionTwo, .2, {height:0, padding:0})
  .from(customersSubFactTwo, .3, {height:0, padding:0, ease: Elastic.easeInOut.config(1, .75)})
  .from(customersDigitsTwo, .5, {opacity:0, x:-40, ease: Elastic.easeInOut.config(1.2, .75)}, "+=.2")
  .add("subdigitsTwoIn")
  .from(customersSubDigitsTwo, .4, {x:-40, opacity:0, ease: Elastic.easeInOut.config(1.2, .75)}, "subdigitsInTwo-=.3")
  .from(customersSvgTwo, 1, {opacity:0, x:40, ease: Elastic.easeInOut.config(1.2, .75)}, "subdigitsInTwo-=.5");

  // DEFINE TOUCH TIMELINE
  var touchTL = new TimelineMax({repeat:3, repeatDelay:1.25});

  // DEFINE OBJECTS FOR TOUCH TIMELINE
  var touchScreen = $('#svg-touch-screen'),
      touchHand = $('#svg-touch-hand'),
      touchLine = $('.svg-touch-line');

  // ANIMATE HAND TOUCH
  touchTL.set(touchHand, {transformStyle: "preserve-3d", transformPerspective:10 })
  .to(touchHand, .5, {rotationX:25, y:-1.5, transformOrigin: "bottom center", ease: Elastic.easeIn.config(1, 1)})
  .staggerFrom(touchLine, .16, {opacity:0, scale:.2, ease: Power4.easeIn}, 0.1, "-=.1")
  .staggerTo(touchLine, .16, {opacity:0, scale:.2, ease: Power4.easeIn}, 0.1)
  .to(touchHand, .5, {rotationX:0, y:0, transformOrigin: "bottom center", ease: Elastic.easeOut.config(1, 1)}, "+=.1");

  customersSubTwoTL.add(touchTL);





  // ADD SUBTIMELINES TO MASTER CUSTOMERS SECTION TIMELINE
  customersSubTL.add(customersSubOneTL, "+=.8")
  .add(customersSubTwoTL, "5");

  return customersSubTL;
}