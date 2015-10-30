function CustomersTimeline () {

  var fullCustomersTL = new TimelineMax();

  var fullCustomersSection = $('#section-customers'),
      fullCustomersSectionHeadline = $('#section-customers h2');

  fullCustomersTL.add("customerFullIntro")
                 .from(fullCustomersSection, .2, {opacity:0, margin:0, ease: Elastic.easeInOut.config(.3, .2)}, "customerFullIntro")
                 .from(fullCustomersSectionHeadline, .3, {y:"-500%", height:0, margin:0, opacity:0, ease: Elastic.easeInOut.config(.2, .75)}, "customerFullIntro");


  // DEFINE PROSPECTIVE SECTION TIMELINE
  var prospectiveCustomersTL = new TimelineMax();

  var prospectiveSection = $('#customer-prospective');
      prospectiveHeaderHeadline = $('#customer-prospective h3'),
      prospectiveHeaderImage = $('#customer-prospective .customers-single-header .image');

  // CREATE INTRO TIMELINE
  prospectiveCustomersTL.from(prospectiveSection, .5, {height:0, padding:0, ease: Elastic.easeInOut.config(.3, .2)})
    .add("prospectiveIntro")
    .from(prospectiveHeaderImage, .5, {scale:0, ease: Elastic.easeInOut.config(.3, .2)}, "prospectiveIntro")
    .from(prospectiveHeaderHeadline, .5, {y:50, opacity:0, ease: Elastic.easeInOut.config(.3, .2)}, "prospectiveIntro");




  // CREATE FACT ONE TIMELINE
  var factOneTL = new TimelineMax();

  // DEFINE OBJECTS FOR FACT ONE TIMELINE
  var linkLineOne = $("#linking-line-one"),
      customersFactOne = $("#customer-fact-one"),
      customersFactOneImage = $("#customer-fact-one .image"),
      customersFactOneText = $("#customer-fact-one .text"),
      customersFactOneDigits = $('#customer-fact-one .digits'),
      customersFactOneSubDigits = $('#customer-fact-one .sub-digits'),
      mapBigMarker = $('#svg-map-big-marker'),
      mapLittleMarker = $('.svg-map-marker'),
      mapLand = $('#svg-map-land');

  // ANIMATE IMAGE TEXT IN
  factOneTL.from(linkLineOne, .7 , {scale:0, transformOrigin: "top right", ease: Elastic.easeInOut.config(.3, .2)})
  .from(customersFactOneImage, .4, {transformOrigin: "top center", scale:0, opacity:0, ease: Elastic.easeOut.config(1, .5)}, "-=.33")
  .add("textOutOne", "-=.3")
  .from(customersFactOneDigits, .3, {opacity:0, y:-5, lineHeight:"0px", ease: Power4.easeInOut}, "textOutOne")
  .from(customersFactOneSubDigits, .3, {opacity:0, y:-20, ease: Power4.easeInOut}, "textOutOne")

  // ANIMATE MAP MARKERS IN
  .staggerFrom(mapLittleMarker, .7, { scale:0, transformOrigin: "bottom center", ease: Bounce.easeOut}, ".07", "-=.3");




  // CREATE FACT TWO TIMELINE
  var factTwoTL = new TimelineMax();

  // DEFINE OBJECTS FOR FACT Two TIMELINE
  var linkLineTwo = $("#linking-line-two"),
      customersFactTwo = $("#customer-fact-two"),
      customersFactTwoImage = $("#customer-fact-two .image"),
      customersFactTwoText = $("#customer-fact-two .text"),
      customersFactTwoDigits = $('#customer-fact-two .digits'),
      customersFactTwoSubDigits = $('#customer-fact-two .sub-digits');
      burstBurst = $('#svg-burst-burst');

  // ANIMATE IMAGE TEXT IN
  factTwoTL.from(linkLineTwo, .7 , {scale:0, transformOrigin: "top center", ease: Elastic.easeInOut.config(.3, .2)})
  .from(customersFactTwoImage, .4, {transformOrigin: "top center", scale:0, opacity:0, ease: Elastic.easeOut.config(1, .5)}, "-=.33")
  .add("textOutTwo", "-=.3")
  .from(customersFactTwoDigits, .3, {opacity:0, y:-5, lineHeight:"0px", ease: Power4.easeInOut}, "textOutTwo")
  .from(customersFactTwoSubDigits, .3, {opacity:0, y:-20, ease: Power4.easeInOut}, "textOutTwo")

  // ANIMATE BURST SPIN
  .from(burstBurst, 5.3, {rotation:"180", transformOrigin: "center center", ease: Power0.easeNone}, "-=.3")



  // CREATE FACT THREE TIMELINE
  var factThreeTL = new TimelineMax(),
      gigaDeviceOutTL = new TimelineMax({repeat:2, repeatDelay:1});

  // DEFINE OBJECTS FOR FACT THREE TIMELINE
  var linkLineThree = $("#linking-line-three"),
      customersFactThree = $("#customer-fact-three"),
      customersFactThreeImage = $("#customer-fact-three .image"),
      customersFactThreeText = $("#customer-fact-three .text"),
      customersFactThreeDigits = $('#customer-fact-three .digits'),
      customersFactThreeSubDigits = $('#customer-fact-three .sub-digits');
      gigaPhone = $('#svg-gigabyte-device');

  // ANIMATE IMAGE TEXT IN
  factThreeTL.from(linkLineThree, .7 , {scale:0, transformOrigin: "top left", ease: Elastic.easeInOut.config(.3, .2)})
  .from(customersFactThreeImage, .4, {transformOrigin: "top center", scale:0, opacity:0, ease: Elastic.easeOut.config(1, .5)}, "-=.33")
  .add("textOutThree", "-=.3")
  .from(customersFactThreeDigits, .3, {opacity:0, y:-5, lineHeight:"0px", ease: Power4.easeInOut}, "textOutThree")
  .from(customersFactThreeSubDigits, .3, {opacity:0, y:-20, ease: Power4.easeInOut}, "textOutThree")

  // ANIMATE PHONE IN AND OUT
  gigaDeviceOutTL.add("gigaPhoneOut")
    .to(gigaPhone, .8, { x:35, ease: Elastic.easeOut.config(.5, 1)}, "gigaPhoneOut")
    .to(gigaPhone, .5, { skewX:5, transformOrigin:"bottom left", ease: Elastic.easeOut.config(.5, 1)}, "gigaPhoneOut")
    .to(gigaPhone, 0, { x:-35, skewX:5 })
    .add("gigaPhoneIn")
    .to(gigaPhone, .8, { x:0, ease: Elastic.easeIn.config(.5, 1)}, "gigaPhoneIn")
    .to(gigaPhone, .8, { skewX:0, transformOrigin:"center center", ease: Elastic.easeOut.config(.5, 1)}, "gigaPhoneIn");

  // AND THE TWO PHONE ANIMATIONS TO FACT THREE TIMELINE
  factThreeTL.add(gigaDeviceOutTL);





  // DEFINE CURRENT SECTION TIMELINE
  var CurrentCustomersTL = new TimelineMax();

  var CurrentSection = $('#customer-current'),
      CurrentHeaderHeadline = $('#customer-current h3'),
      CurrentHeaderImage = $('#customer-current .customers-single-header .image');

  // CREATE INTRO TIMELINE
  CurrentCustomersTL.from(CurrentSection, .5, {height:0, padding:0, ease: Elastic.easeInOut.config(.3, .2)})
    .add("CurrentIntro")
    .from(CurrentHeaderImage, .5, {scale:0, ease: Elastic.easeInOut.config(.3, .2)}, "CurrentIntro")
    .from(CurrentHeaderHeadline, .5, {y:50, opacity:0, ease: Elastic.easeInOut.config(.3, .2)}, "CurrentIntro");





  // CREATE FACT Four TIMELINE
  var factFourTL = new TimelineMax(),
      wrenchTL = new TimelineMax({repeat:3, repeatDelay:.2});

  // DEFINE OBJECTS FOR FACT Four TIMELINE
  var linkLineFour = $("#linking-line-four"),
      customersFactFour = $("#customer-fact-four"),
      customersFactFourImage = $("#customer-fact-four .image"),
      customersFactFourText = $("#customer-fact-four .text"),
      customersFactFourDigits = $('#customer-fact-four .digits'),
      customersFactFourSubDigits = $('#customer-fact-four .sub-digits');
      wrench = $('#svg-wrench-wrench');

  // ANIMATE IMAGE TEXT IN
  factFourTL.from(linkLineFour, .7 , {scale:0, transformOrigin: "top right", ease: Elastic.easeInOut.config(.3, .2)})
  .from(customersFactFourImage, .4, {transformOrigin: "top center", scale:0, opacity:0, ease: Elastic.easeOut.config(1, .5)}, "-=.33")
  .add("textOutFour", "-=.3")
  .from(customersFactFourDigits, .3, {opacity:0, y:-5, lineHeight:"0px", ease: Power4.easeInOut}, "textOutFour")
  .from(customersFactFourSubDigits, .3, {opacity:0, y:-20, ease: Power4.easeInOut}, "textOutFour");

  // ANIMATE WRENCH TURNING
  wrenchTL.to(wrench, .4, {rotation:-20, transformOrigin: "20% 20%", ease: Power0.easeNone})
    .to(wrench, .2, {rotation:0, transformOrigin: "20% 20%", ease: Power0.easeNone})
    .to(wrench, .2, {rotation:20, transformOrigin: "20% 20%", ease: Power0.easeNone})
    .to(wrench, .2, {rotation:0, transformOrigin: "20% 20%", ease: Power0.easeNone});

  // ADD WRENCH TURN TO SECTION TIMELINE
  factFourTL.add(wrenchTL);





  // CREATE FACT five TIMELINE
  var factFiveTL = new TimelineMax(),
      billDollarTL = new TimelineMax({repeat:3});

  // DEFINE OBJECTS FOR FACT five TIMELINE
  var linkLinefive = $("#linking-line-five"),
      customersFactFive = $("#customer-fact-five"),
      customersFactFiveImage = $("#customer-fact-five .image"),
      customersFactFiveText = $("#customer-fact-five .text"),
      customersFactFiveDigits = $('#customer-fact-five .digits'),
      customersFactFiveSubDigits = $('#customer-fact-five .sub-digits'),
      billDollar = $('#svg-bill-dollar'),
      billDollarBackground = $('#svg-bill-dollarbackround');

  // ANIMATE IMAGE TEXT IN
  factFiveTL.from(linkLinefive, .7 , {scale:0, transformOrigin: "top center", ease: Elastic.easeInOut.config(.3, .2)})
            .from(customersFactFiveImage, .4, {transformOrigin: "top center", scale:0, opacity:0, ease: Elastic.easeOut.config(1, .5)}, "-=.33")
            .add("textOutfive", "-=.3")
            .from(customersFactFiveDigits, .3, {opacity:0, y:-5, lineHeight:"0px", ease: Power4.easeInOut}, "textOutfive")
            .from(customersFactFiveSubDigits, .3, {opacity:0, y:-20, ease: Power4.easeInOut}, "textOutfive")
            .from(billDollar, .5, {scale:0, opacity:0, rotation:900, transformOrigin: "center center", ease: Power4.easeIn});

  billDollarTL.add("billBlack")
              .fromTo(billDollar, .25, {scale:.7, ease: Elastic.easeOut.config(1, .5)}, {scale:1, ease: Elastic.easeOut.config(1, .5)}, "billBlack")
              .to(billDollarBackground, 1, {fill:"black", ease: Elastic.easeOut.config(1, .5)}, "billBlack")
              .add("billGreen")
              .fromTo(billDollar, .25, {scale:.7, ease: Elastic.easeOut.config(1, .5)}, {scale:1, ease: Elastic.easeOut.config(1, .5)}, "billGreen")
              .to(billDollarBackground, 1, {fill:"#A7D394", ease: Elastic.easeOut.config(1, .5)}, "billGreen");


  factFiveTL.add(billDollarTL);





  // CREATE FACT Six TIMELINE
  var factSixTL = new TimelineMax(),
      bagDeviceTL = new TimelineMax({repeat:4, repeatDelay:2});

  // DEFINE OBJECTS FOR FACT Six TIMELINE
  var linkLineSix = $("#linking-line-six"),
      customersFactSix = $("#customer-fact-six"),
      customersFactSixImage = $("#customer-fact-six .image"),
      customersFactSixText = $("#customer-fact-six .text"),
      customersFactSixDigits = $('#customer-fact-six .digits'),
      customersFactSixSubDigits = $('#customer-fact-six .sub-digits')
      bagBag = $('#svg-bag-bag'),
      bagDevice = $('#svg-bag-device');

  // ANIMATE IMAGE TEXT IN
  factSixTL.from(linkLineSix, .7 , {scale:0, transformOrigin: "top left", ease: Elastic.easeInOut.config(.3, .2)})
            .from(customersFactSixImage, .4, {transformOrigin: "top center", scale:0, opacity:0, ease: Elastic.easeOut.config(1, .5)}, "-=.33")
            .add("textOutSix", "-=.3")
            .from(customersFactSixDigits, .3, {opacity:0, y:-5, lineHeight:"0px", ease: Power4.easeInOut}, "textOutSix")
            .from(customersFactSixSubDigits, .3, {opacity:0, y:-20, ease: Power4.easeInOut}, "textOutSix");

  bagDeviceTL.from(bagDevice, .65, {y:-100, transformOrigin: "center center", rotation:360, ease: Power4.easeOut})
             .fromTo(bagBag, .005, {y:-.2, ease: Bounce.easeOut}, {y:.2, ease: Bounce.easeOut}, "-=.25")
             .to(bagBag, .0025, {y:-.2, ease: Bounce.easeOut});

  factSixTL.add(bagDeviceTL);




  // DEFINE MASTER TIMELINE
  var customersTL = new TimelineMax();

  // ADD SUBTIMELINES TO MASTER CUSTOMERS SECTION TIMELINE
  customersTL.add(fullCustomersTL)
  .add(prospectiveCustomersTL, "+=.3")
  .add(factOneTL, "2")
  .add(factTwoTL, "4")
  .add(factThreeTL, "6")
  .add(CurrentCustomersTL, "8.5")
  .add(factFourTL, "10.5")
  .add(factFiveTL, "12.6")
  .add(factSixTL, "15.2");

  return customersTL;
}