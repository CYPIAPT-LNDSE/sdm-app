// BackgroundColor = #4FC3F7
// TextColor = white

(function introScene() {
  var textContainerBottomCenter = {
    "text-align": "center",
    "width": "100%",
    "padding": "0 20%",
    "left": 0,
    "bottom": "10%"
  }

  var dogBodyCenter = {
    "bottom": 0,
    "left": "50%",
    "width": "13%"
  }

  var dogHeadCenter = {
    "bottom": 0,
    "left": "50%",
    "width": "11%"
  }

  // Text Pre-Set
  $("#textcontainer").css(textContainerBottomCenter);
  $("#textcontainer").text("I'd like to present you with three options for treating Depression");

  // Center Dog Pre-Set
  $("#dogbodyfacingfront").css(dogBodyCenter);
  $("#dogheadfacingfront").css(dogHeadCenter);

  // Animations
  TL.to("#background", 1, {backgroundColor: "#4FC3F7"}, 0);
  TL.to(["#dogbodyfacingfront", "#dogheadfacingfront"], 0.3, {opacity: 1}, 0);
  TL.to("#dogbodyfacingfront", 0.8, {top: "50%"}, 0);
  TL.to("#dogheadfacingfront", 0.8, {top: "37%"},0);
  TL.to("#textcontainer", 1, {color: "white", opacity: 1}, .5);

})();
