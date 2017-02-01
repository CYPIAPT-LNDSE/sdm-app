// BackgroundColor = #a5d6a7
// TextColor = #FFFFFF
/* Text =
This basic support will give you practical
strategies to help you
feel better.

You’ll also receive advice about things
like sleep, diet and
exercise.

*/

function practicalDetailsScene () {
  // Styles

  var newTextPosition = {
    width: "80%",
    top: "10%",
    left: "35%"
  }

  var newPracticalListSmallPosition = {
    width: "35%",
    left: "25%",
    top: "66%",
  }

  var practicalListDetailedPosition = {
    width: "11%",
    left: "50%",
    top: "50%"
  }

  var newPracticalListDetailedPosition = {
    width: "38%",
    left: "25%",
    top: "66%",
    opacity: 1
  }



  // BackgroundChange
  TweenMax.to("#background", 1, {backgroundColor: "#a5d6a7"});

  // Timeline
  TL.to("#textcontainer", 1, {opacity: 0, onComplete: changeTextAndPosition})
    .to("#dogheadfacingright", 1.5, {x: "-600px", opacity: 0}, "dogstoside-=.7")
    .to("#dogbodyfacingfront", .8, {x: "-600px", opacity: 0}, "dogstoside-=.7")
    .to("#bdogheadfacingleft", 1.5, {x: "600px", opacity: 0}, "dogstoside-=.7")
    .to("#bdogbodyfacingfront", .8, {x: "600px", opacity: 0}, "dogstoside-=.7")
    .to("#miscpracticallistsmall", .5, {opacity: 0}, "dogstoside")
    .to("#miscpracticallistdetailed", 0, practicalListDetailedPosition, "listfade-=.7")
    .to("#miscpracticallistdetailed", .2, newPracticalListDetailedPosition, "listfade-=.7")
    .to("#textcontainer", 1.5, {opacity: 1}, "-=.3");



    function changeTextAndPosition () {
      changeText();
      changeTextPosition();
    }


    function changeTextPosition(){
      TweenMax.to("#textcontainer", 0, newTextPosition);
    }

    function changeText () {
      $("#textcontainer").text("This basic support will give you practical strategies to help you feel better... You’ll also receive advice about things like sleep, diet and exercise.");
    }

}
