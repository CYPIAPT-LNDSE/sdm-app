// BackgroundColor = #fff3e0
// TextColor = #f9a857

/* Text =
This can be found at CAMHS,
at school,
online
or in the community.

*/

function locationsScene () {

  // BackgroundChange
  TweenMax.to("#background", 1, {backgroundColor: "#fff3e0", onComplete: changeText});
  TweenMax.to("#textcontainer", 1, {x: "-430px", color: "#f9a857", textAlign: "left"});

  // Timeline
  TL.to("#miscpracticallistdetailed", 1, {y: "400px", opacity: 0})
    .to("#misclocationpin", .6, {left: "5%", top: "10%", width: "4%", opacity: 1}, "-=.7")
    .to("#miscchurch", 0, {left: "15%", top: "55%", width: "12%", opacity: 1}, "+=.3")
    .to("#miscschool", 0, {left: "40%", top: "70%", width: "12%", opacity: 1}, "+=.2")
    .to("#miscbuilding", 0, {left: "60%", top: "33%", width: "12%", opacity: 1}, "+=.2")
    .to("#miscwebdevices", 0, {left: "80%", top: "70%", width: "20%", opacity: 1, onComplete: showEndDemoText}, "+=.2")

    function changeText () {
      $("#textcontainer").text("This can be found at CAMHS, school, online or in the community.");
    }

    function showEndDemoText(){
      setTimeout(function(){
        $("#endofdemocontainer").fadeIn()
      }, 3000);
    }

}
