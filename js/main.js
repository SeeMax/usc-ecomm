$(document).ready(function(){ function TrafficTimeline () {

  var trafficTL = new TimelineMax();

  var trafficSection= $('#section-traffic'),
      trafficSectionContent= $('#section-traffic .content');

  trafficTL.from(trafficSection, .6, {padding:0, height:0, margin:0,ease: Power4.easeIn})




  var trafficFactOneTL = new TimelineMax();

  var trafficFactOneImage = $('#traffic-fact-one .image'),
      trafficFactOneText = $('#traffic-fact-one .text'),
      trafficFactOneDigits = $('#traffic-fact-one .digits'),
      trafficFactOneSubDigits = $('#traffic-fact-one .sub-digits');

  trafficFactOneTL.from(trafficFactOneImage, .3, {opacity:0, x:"-100%", ease:Power4.easeIn})
                  .from(trafficFactOneText, .2, {opacity:0, x:"-20%", ease:Power4.easeIn});


  var manWalkingTL = new TimelineMax({repeat:3, repeatDelay:.7});

  var manWalking = $('.svg-store-man'),
      storeDoor = $('#svg-store-door-two');

  manWalkingTL.to(manWalking, 1.5, { x:"35%", y:"-50%", ease: Power4.easeIn})
              .add("manEnters")
              .to(manWalking, .3, { opacity:0, scale:1.2, ease: Power4.easeIn}, "manEnters", "-=.2")
              .to(storeDoor, .4, { opacity:.5, ease: Power4.easeIn}, "manEnters")
              .to(storeDoor, .15, { opacity:1, ease: Power4.easeIn});


  trafficFactOneTL.add(manWalkingTL, "-=.6");





  var trafficFactTwoTL = new TimelineMax();

  var trafficFactTwo = $('#traffic-fact-two'),
      trafficFactTwoImage = $('#traffic-fact-two .image'),
      trafficFactTwoText = $('#traffic-fact-two .text'),
      trafficFactTwoDigits = $('#traffic-fact-two .digits'),
      trafficFactTwoSubDigits = $('#traffic-fact-two .sub-digits');

  trafficFactTwoTL.from(trafficFactTwoImage, .3, {opacity:0, x:"-100%", ease:Power4.easeIn})
                  .from(trafficFactTwoText, .2, {opacity:0, x:"-20%", ease:Power4.easeIn});


  var handSetTL = new TimelineMax({repeat:4, repeatDelay:.7});

  var soundWaves = $('.svg-handset-soundwave')
      handSetHandset = $('#svg-handset-handset');

  handSetTL.add("handsetRing")
           .staggerFrom(soundWaves, .2, { scale:0, opacity:0, transformOrigin: "60% 50%", ease: Power4.easeOut}, ".1", "handsetRing")
           .fromTo(handSetHandset, .3, {rotationY:-30, transformOrigin:"50% 50%", ease: Bounce.easeOut}, {rotationY:30, transformOrigin:"50% 50%", ease: Bounce.easeOut}, "handsetRing");


  trafficFactTwoTL.add(handSetTL);





  var trafficFactThreeTL = new TimelineMax();

  var trafficFactThree = $('#traffic-fact-three'),
      trafficFactThreeImage = $('#traffic-fact-three .image'),
      trafficFactThreeText = $('#traffic-fact-three .text'),
      trafficFactThreeDigits = $('#traffic-fact-three .digits'),
      trafficFactThreeSubDigits = $('#traffic-fact-three .sub-digits');

  trafficFactThreeTL.to(trafficFactThreeText, 0, {whiteSpace: "nowrap"})
                    .from(trafficFactThreeImage, .3, {opacity:0, x:"-100%", ease:Power4.easeIn})
                    .from(trafficFactThreeText, .2, {width:0, marginLeft:0, padding:0, overflow:"hidden", x:"-100%", ease:Power4.easeOut})
                    .to(trafficFactThreeText, 0, {whiteSpace: "wrap"});


  var laptopTL = new TimelineMax({repeat:4, repeatDelay:.3});

  var laptopLogo = $('#svg-laptop-computerlogo'),
      laptopDeviceLogo = $('#svg-laptop-phonelogo');

  laptopTL.fromTo(laptopLogo, .3, {transformOrigin:'center center', scale:.3, opacity:0}, {scale:1.1, opacity:1})
          .to(laptopLogo, .3, {scale:1})
          .to(laptopLogo, .3, {scale:.3, opacity:0})
          .fromTo(laptopDeviceLogo, .3, {transformOrigin:'center center', scale:.3, opacity:0}, {scale:1.1, opacity:1}, "-=1")
          .to(laptopDeviceLogo, .3, {scale:1})
          .to(laptopDeviceLogo, .3, {scale:.3, opacity:0});


  trafficFactThreeTL.add(laptopTL);




  trafficTL.add(trafficFactOneTL, "1")
           .add(trafficFactTwoTL, "2")
           .add(trafficFactThreeTL, "3");


  return trafficTL;
}
function CustomersTimeline () {

  var fullCustomersTL = new TimelineMax();

  var fullCustomersSection = $('#section-customers'),
      fullCustomersSectionHeadline = $('#section-customers h2');

  fullCustomersTL.add("customerFullIntro")
                 .from(fullCustomersSection, .2, {opacity:0, margin:0, ease: Power4.easeOut}, "customerFullIntro")
                 .from(fullCustomersSectionHeadline, .3, {y:"-500%", height:0, margin:0, opacity:0, ease: Elastic.easeInOut.config(.2, .75)}, "customerFullIntro");


  // DEFINE PROSPECTIVE SECTION TIMELINE
  var prospectiveCustomersTL = new TimelineMax();

  var prospectiveSection = $('#customer-prospective');
      prospectiveHeaderHeadline = $('#customer-prospective h3'),
      prospectiveHeaderImage = $('#customer-prospective .customers-single-header .image'),
      linkLineOne = $("#linking-line-one"),
      linkLineTwo = $("#linking-line-two"),
      linkLineThree = $("#linking-line-three");


  // CREATE INTRO TIMELINE
  prospectiveCustomersTL.from(prospectiveSection, .5, {height:0, paddingLeft:0, paddingRight:0, ease: Power4.easeOut})
    .add("prospectiveIntro")
    .from(prospectiveHeaderImage, .5, {scale:0, ease: Elastic.easeInOut.config(.3, .2)}, "prospectiveIntro")
    .from(prospectiveHeaderHeadline, .5, {y:50, opacity:0, ease: Elastic.easeInOut.config(.3, .2)}, "prospectiveIntro")
    .from(linkLineOne, .7 , {scale:0, transformOrigin: "top right", ease: Elastic.easeInOut.config(.3, .2)}, "prospectiveIntro")
    .from(linkLineTwo, .7 , {scale:0, transformOrigin: "top center", ease: Elastic.easeInOut.config(.3, .2)}, "prospectiveIntro")
    .from(linkLineThree, .7 , {scale:0, transformOrigin: "top left", ease: Elastic.easeInOut.config(.3, .2)}, "prospectiveIntro");






    // DEFINE CURRENT SECTION TIMELINE
    var CurrentCustomersTL = new TimelineMax();

    var CurrentSection = $('#customer-current'),
        CurrentHeaderHeadline = $('#customer-current h3'),
        CurrentHeaderImage = $('#customer-current .customers-single-header .image'),
        linkLineFour = $("#linking-line-four"),
        linkLineFive = $("#linking-line-five"),
        linkLineSix = $("#linking-line-six");

    // CREATE INTRO TIMELINE
    CurrentCustomersTL.from(CurrentSection, .5, {height:0, paddingLeft:0, paddingRight:0, ease: Power4.easeOut})
      .add("CurrentIntro")
      .from(CurrentHeaderImage, .5, {scale:0, ease: Elastic.easeInOut.config(.3, .2)}, "CurrentIntro")
      .from(CurrentHeaderHeadline, .5, {y:50, opacity:0, ease: Elastic.easeInOut.config(.3, .2)}, "CurrentIntro")
      .from(linkLineFour, .7 , {scale:0, transformOrigin: "top right", ease: Elastic.easeInOut.config(.3, .2)}, "CurrentIntro")
      .from(linkLineFive, .7 , {scale:0, transformOrigin: "top center", ease: Elastic.easeInOut.config(.3, .2)}, "CurrentIntro")
      .from(linkLineSix, .7 , {scale:0, transformOrigin: "top left", ease: Elastic.easeInOut.config(.3, .2)}, "CurrentIntro");






  // CREATE FACT ONE TIMELINE
  var factOneTL = new TimelineMax();

  // DEFINE OBJECTS FOR FACT ONE TIMELINE
  var customersFactOne = $("#customer-fact-one"),
      customersFactOneImage = $("#customer-fact-one .image"),
      customersFactOneText = $("#customer-fact-one .text"),
      customersFactOneDigits = $('#customer-fact-one .digits'),
      customersFactOneSubDigits = $('#customer-fact-one .sub-digits'),
      mapBigMarker = $('#svg-map-big-marker'),
      mapLittleMarker = $('.svg-map-marker'),
      mapLand = $('#svg-map-land');

  // ANIMATE IMAGE TEXT IN
  factOneTL.from(customersFactOneImage, .4, {transformOrigin: "top center", scale:0, opacity:0, ease: Elastic.easeOut.config(1, .5)}, "-=.33")
  .add("textOutOne", "-=.3")
  .from(customersFactOneDigits, .3, {opacity:0, y:-5, lineHeight:"0px", ease: Power4.easeInOut}, "textOutOne")
  .from(customersFactOneSubDigits, .3, {opacity:0, y:-20, ease: Power4.easeInOut}, "textOutOne")

  // ANIMATE MAP MARKERS IN
  .staggerFrom(mapLittleMarker, .7, { scale:0, transformOrigin: "bottom center", ease: Bounce.easeOut}, ".07", "-=.3");




  // CREATE FACT TWO TIMELINE
  var factTwoTL = new TimelineMax();

  // DEFINE OBJECTS FOR FACT Two TIMELINE
  var customersFactTwo = $("#customer-fact-two"),
      customersFactTwoImage = $("#customer-fact-two .image"),
      customersFactTwoText = $("#customer-fact-two .text"),
      customersFactTwoDigits = $('#customer-fact-two .digits'),
      customersFactTwoSubDigits = $('#customer-fact-two .sub-digits');
      burstBurst = $('#svg-burst-burst');

  // ANIMATE IMAGE TEXT IN
  factTwoTL.from(customersFactTwoImage, .4, {transformOrigin: "top center", scale:0, opacity:0, ease: Elastic.easeOut.config(1, .5)}, "-=.33")
  .add("textOutTwo", "-=.3")
  .from(customersFactTwoDigits, .3, {opacity:0, y:-5, lineHeight:"0px", ease: Power4.easeInOut}, "textOutTwo")
  .from(customersFactTwoSubDigits, .3, {opacity:0, y:-20, ease: Power4.easeInOut}, "textOutTwo")

  // ANIMATE BURST SPIN
  .from(burstBurst, 5.3, {rotation:"180", transformOrigin: "center center", ease: Power0.easeNone}, "-=.3")



  // CREATE FACT THREE TIMELINE
  var factThreeTL = new TimelineMax(),
      gigaDeviceOutTL = new TimelineMax({repeat:2, repeatDelay:1});

  // DEFINE OBJECTS FOR FACT THREE TIMELINE
  var customersFactThree = $("#customer-fact-three"),
      customersFactThreeImage = $("#customer-fact-three .image"),
      customersFactThreeText = $("#customer-fact-three .text"),
      customersFactThreeDigits = $('#customer-fact-three .digits'),
      customersFactThreeSubDigits = $('#customer-fact-three .sub-digits');
      gigaPhone = $('#svg-gigabyte-device');

  // ANIMATE IMAGE TEXT IN
  factThreeTL.from(customersFactThreeImage, .4, {transformOrigin: "top center", scale:0, opacity:0, ease: Elastic.easeOut.config(1, .5)}, "-=.33")
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





  // CREATE FACT Four TIMELINE
  var factFourTL = new TimelineMax(),
      wrenchTL = new TimelineMax({repeat:3, repeatDelay:.2});

  // DEFINE OBJECTS FOR FACT Four TIMELINE
  var customersFactFour = $("#customer-fact-four"),
      customersFactFourImage = $("#customer-fact-four .image"),
      customersFactFourText = $("#customer-fact-four .text"),
      customersFactFourDigits = $('#customer-fact-four .digits'),
      customersFactFourSubDigits = $('#customer-fact-four .sub-digits');
      wrench = $('#svg-wrench-wrench');

  // ANIMATE IMAGE TEXT IN
  factFourTL.from(customersFactFourImage, .4, {transformOrigin: "top center", scale:0, opacity:0, ease: Elastic.easeOut.config(1, .5)}, "-=.33")
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
  var customersFactFive = $("#customer-fact-five"),
      customersFactFiveImage = $("#customer-fact-five .image"),
      customersFactFiveText = $("#customer-fact-five .text"),
      customersFactFiveDigits = $('#customer-fact-five .digits'),
      customersFactFiveSubDigits = $('#customer-fact-five .sub-digits'),
      billDollar = $('#svg-bill-dollar'),
      billDollarBackground = $('#svg-bill-dollarbackround');

  // ANIMATE IMAGE TEXT IN
  factFiveTL.from(customersFactFiveImage, .4, {transformOrigin: "top center", scale:0, opacity:0, ease: Elastic.easeOut.config(1, .5)}, "-=.33")
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
  var customersFactSix = $("#customer-fact-six"),
      customersFactSixImage = $("#customer-fact-six .image"),
      customersFactSixText = $("#customer-fact-six .text"),
      customersFactSixDigits = $('#customer-fact-six .digits'),
      customersFactSixSubDigits = $('#customer-fact-six .sub-digits')
      bagBag = $('#svg-bag-bag'),
      bagDevice = $('#svg-bag-device');

  // ANIMATE IMAGE TEXT IN
  factSixTL.from(customersFactSixImage, .4, {transformOrigin: "top center", scale:0, opacity:0, ease: Elastic.easeOut.config(1, .5)}, "-=.33")
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
  .add(prospectiveCustomersTL, "0")
  .add(CurrentCustomersTL, "0")
  .add(factOneTL, "1.5")
  .add(factTwoTL, "2.5")
  .add(factThreeTL, "3.5")
  .add(factFourTL, "4.5")
  .add(factFiveTL, "5.5")
  .add(factSixTL, "6.5");

  return customersTL;
}
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
  customersSubOneTL
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
  customersSubTwoTL
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
  .add(customersSubTwoTL, "2.8");

  return customersSubTL;
}
function GrossTimeline () {

  var grossSectionFull = $('#section-gross'),
      grossRedSection= $('#gross-red-section'),
      grossCounter = $("#gross-counter"),
      grossCounterDigits = { var: 60 },
      grossBlueHeadline = $("#gross-blue-headline");

  var grossTL = new TimelineMax();



  grossTL.from(grossSectionFull, .5, {opacity:0, height:0, padding:0, ease: Power4.easeOut})
          .add("counterOut")
          .from(grossRedSection, .5, {x:"-500%", ease: Power4.easeOut}, "counterOut")
          .from(grossCounterDigits, 1.5, {
            var: 0,
            onUpdate: function () {
              $(grossCounter).html(Math.ceil(grossCounterDigits.var));
            },
            ease:Circ.easeIn
          }, "counterOut")
          .from(grossBlueHeadline, .2, {x:-20, opacity:0, ease: Elastic.easeInOut.config(.3, .2)}, "-=.2");

  return grossTL;
}



function HeaderTimeline () {
  var headerTL = new TimelineMax();

  var headerHeadline = $('#section-header h1');

  headerTL.from(headerHeadline, 3, {scale:.97, ease: Power1.easeOut});

  return headerTL;
}
function ImpactTimeline () {

  // OPEN IMPACT SECTION, ANIMATE CIRCLES, AND MOVE TYPE OUT FROM BEHIND CIRCLE
  var impactTL = new TimelineMax();

  var impactSection = $('#section-impact')

  impactTL.set(impactSection, {transformStyle: "preserve-3d", transformPerspective:200 })
          .from(impactSection, .5, {opacity:0, height:0, rotationX:-90, transformOrigin: "top center", ease: Elastic.easeInOut.config(.5, .75)});




  var impactFactOneTL = new TimelineMax();

  var impactFactOne = $('#impact-fact-one')
  var impactSvgOne = $('#impact-fact-one svg')
  var impactTextOne = $('#impact-fact-one .text');


  impactFactOneTL.from(impactSvgOne, .5, {scale:0, ease: Bounce.easeOut}, "svgAnimateOpenOne")
                 .from(impactTextOne, .3, { letterSpacing:0, scale:.2, opacity:0, x:-60, rotationY:-90, transformOrigin:"0 50%",ease: Power4.easeOut}, "svgAnimateOpenOne+=.2");

  // ANIMATING CART AND BOXES
  var cartTL = new TimelineMax({repeat:3, repeatDelay:2 });

  var cartBox = $('.svg-cart-box'),
      cartCart = $('#svg-cart-cart');
      cartPlus = $('#svg-cart-plussign');

  cartTL.from(cartPlus, 0.5, {scale:0, opacity:0, rotation:720, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(.5, .75)}, "cartIn")
  .from(cartCart, .25, {x:-80, opacity:0, ease: Elastic.easeOut.config(.5, .75)}, "cartIn")
  .staggerFrom(cartBox, 1, {y:-77, x:40, rotation:480, ease: Bounce.easeInOut}, 0.5, "stagger")
  .to(cartCart, .45, {y:.5, ease: Bounce.easeOut, repeat:4}, "stagger+=.58");

  impactFactOneTL.add(cartTL, "-=1");




  var impactFactTwoTL = new TimelineMax();

  var impactFactTwo = $('#impact-fact-two')
  var impactSvgTwo = $('#impact-fact-two svg')
  var impactTextTwo = $('#impact-fact-two .text');


  impactFactTwoTL.from(impactSvgTwo, .5, {scale:0, ease: Bounce.easeOut}, "svgAnimateOpenTwo")
                 .from(impactTextTwo, .3, { letterSpacing:0, scale:.2, opacity:0, x:-60, rotationY:-90, transformOrigin:"0 50%",ease: Power4.easeOut}, "svgAnimateOpenTwo+=.2");

  // ANIMATING THE PIN ON THE PHONE MAP
  var phonePinTL = new TimelineMax({repeat:3, repeatDelay:2 });

  var pinDevice = $('#svg-phonepin-device'),
      pinLogo = $('#svg-phonepin-logo'),
      pinPin = $('#svg-phonepin-pin'),
      pinDeviceback = $('#svg-phonepin-devicebackground'),
      pinRoads = $('#svg-phonepin-roads');

  phonePinTL.from(pinDevice, .5, {scale:0, transformOrigin: "50% 50%", opacity:0, ease: Elastic.easeOut.config(.5, .75)}, "deviceIn")
  .from(pinLogo, .3, {delay:.2, opacity:0, ease: Power4.easeOut})
  .from(pinPin, .75, {y:-25, scale:5, rotationX:100, transformOrigin: "50% 50%", ease: Bounce.easeOut}, "pinBounce")
  .from(pinLogo, .3, {y:.75, ease: Bounce.easeInOut, repeat:1}, "pinBounce+=.1");

  impactFactTwoTL.add(phonePinTL, "-=1");




  impactTL.add(impactFactOneTL, "+=.8")
  .add(impactFactTwoTL, "2.8");


  return impactTL;
}
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





 });