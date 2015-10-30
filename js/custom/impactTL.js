function ImpactTimeline () {

  // OPEN IMPACT SECTION, ANIMATE CIRCLES, AND MOVE TYPE OUT FROM BEHIND CIRCLE
  var impactTL = new TimelineMax();

  var impactSection = $('#section-impact')

  impactTL.set(impactSection, {transformStyle: "preserve-3d", transformPerspective:200 })
          .from(impactSection, 1, {opacity:0, rotationX:-90, transformOrigin: "top center", ease: Elastic.easeInOut.config(.5, .75)});




  var impactFactOneTL = new TimelineMax();

  var impactFactOne = $('#impact-fact-one')
  var impactSvgOne = $('#impact-fact-one svg')
  var impactTextOne = $('#impact-fact-one .text');


  impactFactOneTL.from(impactSvgOne, 1, {scale:0, ease: Bounce.easeOut}, "svgAnimateOpenOne")
                 .from(impactTextOne, .5, { letterSpacing:0, scale:.2, opacity:0, x:-60, rotationY:-90, transformOrigin:"0 50%",ease: Power4.easeOut}, "svgAnimateOpenOne+=.2");

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


  impactFactTwoTL.from(impactSvgTwo, 1, {scale:0, ease: Bounce.easeOut}, "svgAnimateOpenTwo")
                 .from(impactTextTwo, .5, { letterSpacing:0, scale:.2, opacity:0, x:-60, rotationY:-90, transformOrigin:"0 50%",ease: Power4.easeOut}, "svgAnimateOpenTwo+=.2");

  // ANIMATING THE PIN ON THE PHONE MAP
  var phonePinTL = new TimelineMax({repeat:3, repeatDelay:2 });

  var pinDevice = $('#svg-phonepin-device'),
      pinLogo = $('#svg-phonepin-logo'),
      pinPin = $('#svg-phonepin-pin'),
      pinDeviceback = $('#svg-phonepin-devicebackground'),
      pinRoads = $('#svg-phonepin-roads');

  phonePinTL.from(pinDevice, .5, {scale:0, transformOrigin: "50% 50%", opacity:0, ease: Elastic.easeOut.config(.5, .75)}, "deviceIn")
  .from(pinLogo, .3, {delay:.2, opacity:0, ease: Power4.easeOut})
  .from(pinDeviceback, .5, {fill:"black", ease: Bounce.easeInOut}, "deviceOn")
  .from(pinRoads, .3, {opacity:0, ease: Power4.easeOut}, "deviceOn+=.9")
  .from(pinPin, .75, {y:-25, scale:5, rotationX:100, transformOrigin: "50% 50%", ease: Bounce.easeOut}, "pinBounce")
  .from(pinLogo, .3, {y:.75, ease: Bounce.easeInOut, repeat:1}, "pinBounce+=.1");

  impactFactTwoTL.add(phonePinTL, "-=1");




  impactTL.add(impactFactOneTL, "+=.8")
  .add(impactFactTwoTL, "6.5");


  return impactTL;
}