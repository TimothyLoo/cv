// define variables
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userCLickedPattern = [];
var level = 0;
var started = false;


// plays sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

// animate press
function animatePress(currentColour) {
  $('#' + currentColour).addClass('pressed');
  setTimeout(function () {
    $('#' + currentColour).removeClass('pressed');
  }, 100);
}

// detect if button is click, append user click to user gamePattern
$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");
  userCLickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  // console.log(userCLickedPattern);
  checkAnswer(userCLickedPattern.length - 1);
});

// randomly generate integers from 0-3. This will help to select one of the four colors
function nextSequence() {
  userCLickedPattern = [];
  level++;
  $('#level-title').text('Level ' + level);

  var randomNumber = Math.floor(Math.round(Math.random() * 3));

  // choose a color
  var randomChosenColour = buttonColours[randomNumber];

  // add to the simon sequence
  gamePattern.push(randomChosenColour);

  // animate button
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

};

function startOver() {
  console.log('wrong');
  playSound('wrong');
  $('body').addClass('game-over');
  setTimeout(function () {
    $('body').removeClass('game-over');
  }, 200);
  $("#level-title").text('Game Over, Press Any Key to Restart');
  gamePattern = [];
  userCLickedPattern = [];
  level = 0;
  started = false;
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userCLickedPattern[currentLevel]) {
    console.log('sucesss');
    if (userCLickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    startOver();
  }
};

$(document).keydown(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
})
