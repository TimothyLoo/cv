// define variables
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userCLickedPattern = [];
var level = 0;
var started = new Boolean(false);


// plays sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// animate press
function animatePress(currentColour) {
  setTimeout($("#btn").addClass("pressed"),100);
}

// detect if button is click, append user click to user gamePattern
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userCLickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  // console.log(userCLickedPattern);
});

// randomly generate integers from 0-3. This will help to select one of the four colors
function nextSequence() {
  $("#level-title").text("Level " + level);
  level += 1;
  var randomNumber = Math.floor(Math.round(Math.random() * 3));

  // choose a color
  var randomChosenColour = buttonColours[nextSequence];

  // add to the simon sequence
  gamePattern.push(randomChosenColour);

  // animate button
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

};

function checkAnswer(currentLevel) {
  
}

$(document).keydown(function () {
  if (started == false) {
    nextSequence();
  }
})
