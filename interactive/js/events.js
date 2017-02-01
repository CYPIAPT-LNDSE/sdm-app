// Events


// Background Click
$("#background").on("click", function() {
  if (globalState.currentscene != "options") {
    switchScene();
  }
});

// Dog Head (Intro)
$("#dogheadfacingfront").on("click", function() {
  if (globalState.currentscene == "introduction") {
    optionsScene();
  }
});


// Mirror (Practical Scene)
$("#miscmirrorwithdog").on("click", function() {
  if (globalState.currentscene == "options") {
    practicalIntroScene();
  }
});




// Switch scene
function switchScene() {

  var scene = globalState.currentscene;

  switch (scene) {
    case "introduction" : {
      scene = "options";
      optionsScene();
      break;
    }
  }
}
