// Events

// Dog Head (Intro)
$("#dogheadfacingfront").on("click", function() {
  if (globalState.currentscene == "introduction") {
    optionsScene();
  }
});

// Mirror (Practical)
$("#miscmirrorwithdog").on("click", function() {
  if (globalState.currentscene == "options") {
    practicalIntroScene();
  }
});
