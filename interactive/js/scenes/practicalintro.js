// BackgroundColor = #FAFAFA
// TextColor = #0097A7

/* Text =
" For practical support,
you’ll first meet with a CAMHS worker who will offer you short term,
goal-focused support and activities. "
*/

function practicalIntroScene () {

  // Styles

  var dogHeadFacingRight = {
    opacity: 1,
    top: "35%",
    left: "29%",
    width: "11%"
  }

  var bdogHeadFacingLeft = {
    opacity: 1,
    top: "35%",
    right: "20%",
    width: "11%"
  }

  var practicalListSmallCenter = {
    opacity: 1,
    top: "50%",
    left: "50%",
    width: "0%"
  }


  // BackgroundChange
  TweenMax.to("#background", 1, {backgroundColor: "#FAFAFA"});
  TweenMax.to("#practicaloptiontext", 1, {opacity: 0});
  TweenMax.to("#talkingoptiontext", 1, {opacity: 0});
  TweenMax.to("#medicationoptiontext", 1, {opacity: 0});
  //


  // Timeline
  TL.to("#textcontainer", 0.5, {opacity: 0, onComplete: change})
    .to("#dogheadfacingleft", 0, {opacity: 0}, "+=.8")
    .to("#bdogheadfacingright", 0, {opacity: 0, onComplete: enterNewHeads})
    .to("#textcontainer", 1, {opacity: 1, color: "#0097A7"}, "-=.3")
    .to("#miscpracticallistsmall", 0, practicalListSmallCenter, "-=0.5")
    .to("#miscpracticallistsmall", 1.5, {width: "8%"});

    function change () {
      changeText();
      detach();
      swapDogs();
    }

    // Move Mirror and Bowl Away
    function detach () {
      TweenMax.to("#miscmirrorwithdog", 1.7, {y: "600px", opacity: 0});
      TweenMax.to("#miscdogbowl", 1.7, {y: "-600px", opacity: 0});
    }

    // Swap Dogs
    function swapDogs () {
      TweenMax.to("#dogbodyfacingfront", 0.7, {x: "-280px"});
      TweenMax.to("#dogheadfacingleft", 0.6, {x: "-580px"});

      TweenMax.to("#bdogbodyfacingfront", 0.7, {x: "250px"});
      TweenMax.to("#bdogheadfacingright", 0.6, {x: "250px"});
    }

    // addNewHeads
    function enterNewHeads () {
      TweenMax.to("#dogheadfacingright", 0, dogHeadFacingRight);
      TweenMax.to("#bdogheadfacingleft", 0, bdogHeadFacingLeft);
    }


    // TextChange
    function changeText () {
      $("#textcontainer").text("For practical support, you’ll first meet with a CAMHS worker who will offer you short term, goal-focused support and activities.");
    }

}
