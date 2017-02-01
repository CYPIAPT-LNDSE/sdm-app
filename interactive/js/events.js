// Events

// Dog Head (Intro)
$("#dogheadfacingfront").on("click", function() {
  if (globalState.currentscene == "introduction") {
    optionsScene();
  }
});
