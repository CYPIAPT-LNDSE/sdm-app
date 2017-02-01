// BackgroundColor = #26C6DA
// TextColor = #FAFAFA

function optionsScene () {
  // Styles

  // Initial Styles
  var turnHeadToOptions = {
    opacity: 1,
    top: "35%",
    right: "8%",
    width: "11%"
  }

  var practicalMirror = {
    opacity: 1,
    top: "45%",
    left: "15%"
  }

  var bDogBody = {
    opacity: 1,
    top: "50%",
    left: "38%",
    width: "13%"
  }

  var bDogHead = {
    opacity: 1,
    top: "35%",
    left: "40%",
    width: "11%"
  }

  var dogBowlOption = {
    opacity: 1,
    top: "61%",
    right: "30%",
    width: "9%"
  }
  /* Text Styles */
  var practicalOptionText = {
    opacity: 1,
    top: "67%",
    left: "12%"
  }
  var talkingOptionText = {
    opacity: 1,
    top: "67%",
    left: "36%"
  }
  var medicalOptionText = {
    opacity: 1,
    top: "67%",
    left: "57%"
  }

  // BackgroundChange
  TweenMax.to("#background", 1, {backgroundColor: "#26C6DA"});

  // Timeline
  TL.to("#textcontainer", 1, {opacity: 0, onComplete: changeText})
    .to("#dogheadfacingfront", 1, {x: "270px"}, "-=0.7")
    .to("#dogbodyfacingfront", 1, {x: "260px"}, "-=1.05")
    .to("#dogheadfacingfront", 0, {opacity: 0})
    .to("#dogheadfacingleft", 0, turnHeadToOptions)
    .to("#miscmirrorwithdog", .2, practicalMirror, "+=0.5")
    .to("#bdogbodyfacingfront", .2, bDogBody)
    .to("#bdogheadfacingright", .2, bDogHead, "-=0.1")
    .to("#miscdogbowl", .2, dogBowlOption, "-=0.1")
    .to("#practicaloptiontext", 0.3, practicalOptionText, "-=.4")
    .to("#talkingoptiontext", 0.3, talkingOptionText, "-=.2")
    .to("#medicationoptiontext", 0.3, medicalOptionText, "-=.1")
    .to("#textcontainer", 1, {opacity: 1}, "-=.3");

    // TextChange
    function changeText () {
      $("#textcontainer").text("Click one of the options to find out more");
    }

}
