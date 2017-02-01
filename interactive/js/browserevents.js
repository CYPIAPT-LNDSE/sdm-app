// Browser Events


// Background Click
$("#background").on("click", function() {
  if (globalState.currentscene != "options") {
    switchScene();
  }
});

// Dog Head (Intro)
$("#dogheadfacingfront").on("click", function() {
  if (globalState.currentscene == "introduction") {
    globalState.currentscene = "options";
    optionsScene();
  }
});


// Mirror (Practical Scene)
$("#miscmirrorwithdog").on("click", function() {
  if (globalState.currentscene == "options") {
    globalState.currentscene = "practicalintro";
    practicalIntroScene();
  }
});

// Practical List Small Click
$("#miscpracticallistsmall").on("click", function() {
  if (globalState.currentscene == "practicalintro") {
    globalState.currentscene = "practicaldetails";
    practicalDetailsScene();
  }
});

// Switch scene
function switchScene() {
  switch (globalState.currentscene) {
    case "introduction" : {
      globalState.currentscene = "options";
      optionsScene();
      break;
    }
    case "practicalintro" : {
      globalState.currentscene = "practicaldetails";
      practicalDetailsScene();
      break;
    }
    default : return;
  }
}
