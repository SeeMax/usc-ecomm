var grossSectionFull = $('#section-gross'),
    grossRedSection= $('#gross-red-section'),
    grossCounter = $("#gross-counter"),
    grossCounterDigits = { var: 60 },
    grossBlueHeadline = $("#gross-blue-headline");

var grossTL = new TimelineMax();



 grossTL.from(grossSectionFull, 1, {opacity:0, height:0, padding:0, ease: Power4.easeOut})
 .add("counterOut")
 .from(grossRedSection, 1, {x:"-500%", ease: Power4.easeOut}, "counterOut")
 .from(grossCounterDigits, 1.5, {
    var: 0,
    onUpdate: function () {
      $(grossCounter).html(Math.ceil(grossCounterDigits.var));
    },
    ease:Circ.easeIn
  }, "counterOut")
 .from(grossBlueHeadline, .3, {x:-20, opacity:0, ease: Elastic.easeInOut.config(.3, .2)}, "-=.2");
