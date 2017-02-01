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

  // Text Pre Set
  $("#textcontainer").css(textContainerBottomCenter);
  $("#textcontainer").text("I'd like to present you with three options for treating Depression");

  // Center Dog Pre Set
  $("#dogbodyfacingfront").css(dogBodyCenter);
  $("#dogheadfacingfront").css(dogHeadCenter);

  // Animations
  TweenMax.to("#background", 0, {backgroundColor: "#4FC3F7"});
  TweenMax.to(["#dogbodyfacingfront", "#dogheadfacingfront"], 0.3, {delay: 1, opacity: 1});
  TweenMax.to("#dogbodyfacingfront", 0.8, {delay: 0.6, top: "50%"});
  TweenMax.to("#dogheadfacingfront", 0.8, {delay: 0.7, top: "37%"});
  TweenMax.to("#textcontainer", 1, {delay: 1.8, color: "white", opacity: 1});


  //
  // Set Up globalState
  //
  globalState.currentscene = "introduction";
  globalState.nextscene = "options";
})();
