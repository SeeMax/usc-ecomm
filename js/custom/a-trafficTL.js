function trafficTimeline() {

  var trafficTL = new TimelineMax();

  var trafficSection= $('#section-traffic'),
      trafficSectionContent= $('#section-traffic .content');

  trafficTL.from(trafficSection, 1, {padding:0, height:0, margin:0,ease: Power4.easeIn})
           .from(trafficSectionContent, 1, {y:"-500%", opacity:0, ease: Power4.easeOut});




  var trafficFactOneTL = new TimelineMax();

  var trafficFactOneImage = $('#traffic-fact-one .image'),
      trafficFactOneText = $('#traffic-fact-one .text'),
      trafficFactOneDigits = $('#traffic-fact-one .digits'),
      trafficFactOneSubDigits = $('#traffic-fact-one .sub-digits');

  trafficFactOneTL.from(trafficFactOneImage, .3, {opacity:0, x:"-100%", ease:Power4.easeIn})
                  .from(trafficFactOneText, .3, {opacity:0, x:"-20%", ease:Power4.easeIn});


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
                  .from(trafficFactTwoText, .3, {opacity:0, x:"-20%", ease:Power4.easeIn});


  var handSetTL = new TimelineMax({repeat:3, repeatDelay:.7});

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

  trafficFactThreeTL.to(trafficFactThreeText, 0, {zIndex:-2, whiteSpace: "nowrap"})
                    .from(trafficFactThreeImage, .3, {opacity:0, x:"-100%", ease:Power4.easeIn})
                    .from(trafficFactThreeText, .3, {width:0, marginLeft:0, padding:0, overflow:"hidden", x:"-100%", ease:Power4.easeOut})
                    .to(trafficFactThreeText, 0, {whiteSpace: "wrap"});


  var laptopTL = new TimelineMax({repeat:3, repeatDelay:.3});

  var laptopLogo = $('#svg-laptop-computerlogo'),
      laptopDeviceLogo = $('#svg-laptop-phonelogo');

  laptopTL.fromTo(laptopLogo, .5, {transformOrigin:'center center', scale:.3, opacity:0}, {scale:1.1, opacity:1})
          .to(laptopLogo, 1, {scale:1})
          .to(laptopLogo, .5, {scale:.3, opacity:0})
          .fromTo(laptopDeviceLogo, .5, {transformOrigin:'center center', scale:.3, opacity:0}, {scale:1.1, opacity:1}, "-=1")
          .to(laptopDeviceLogo, 1, {scale:1})
          .to(laptopDeviceLogo, .5, {scale:.3, opacity:0});


  trafficFactThreeTL.add(laptopTL);




  trafficTL.add(trafficFactOneTL)
           .add(trafficFactTwoTL, "4.5")
           .add(trafficFactThreeTL, "7");
}