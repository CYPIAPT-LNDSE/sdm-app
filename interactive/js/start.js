// BackgroundColor = #4FC3F7
// TextColor = white



// Set Text Position
$("#textcontainer").css({
  "opacity": 0,
  "color": "white",
  "width" : "50%",
  "bottom" : "10%",
  "left" : "25%",
  "fontSize" : "30px"
}).text("I'd like to present you with three options for treating Depression");

// Set Dog Parts initially
$("#dogbodyfacingfront").css({
  "bottom": 0,
  "left": "50%",
  "width": "13%"
})
$("#dogheadfacingfront").css({
  "bottom": 0,
  "left": "50%",
  "width": "11%"
})

// BG Color
var tl = new TimelineLite();
var tm = TweenMax;
  tm.to("#imgcontainer", 0, {backgroundColor: "#4FC3F7"});
  tm.to(["#dogbodyfacingfront", "#dogheadfacingfront"], 0.3, {delay: 1, opacity: 1});
  tm.to("#dogbodyfacingfront", 0.8, {delay: 0.6, top: "50%"});
  tm.to("#dogheadfacingfront", 0.8, {delay: 0.7, top: "37%"});
  tm.to("#textcontainer", 1, {delay: 1.8, color: "white", opacity: 1});
