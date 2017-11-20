// password at least 5 characters
// contains small letters as well as capital letters
// contains numbers
// contains one special character
// contains more than one special character


$(document).ready(function() {

  $("#meter").progressbar();

  $("#password").keyup(function(){
    checkPassword($("#password").val());
  });




});

function checkPassword(password) {
  var strength = 0;
  if (password.length >= 5) {
    strength++;
    if (password.match(/([a-z])/) && password.match(/([A-Z])/)) {
      strength++;
    }
    if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
      strength++;
    }
    if (password.match(/([!, @, #, $, %, ^, &, *, _, ~, ?])/)) {
      strength++;
    }
    if (password.match(/(.*[!, @, #, $, %, ^, &, *, _, ~, ?].*[!, @, #, $, %, ^, &, *, _, ~, ?])/)) {
      strength++;
    }

  }
  if(strength == 0){
    $("#meter").progressbar({value:20});
    $(".ui-progressbar-value").css("background", "red");
    $("#result").html("Too short").css("color", "red");
  }else if(strength < 3){
    $("#meter").progressbar({value:40});
    $(".ui-progressbar-value").css("background", "orange");
    $("#result").html("Weak").css("color", "orange");
  }
  else if(strength == 3){
    $("#meter").progressbar({value:70});
    $(".ui-progressbar-value").css("background", "blue");
    $("#result").html("Good").css("color", "blue");

} else{
    $("#meter").progressbar({value:100});
    $(".ui-progressbar-value").css("background", "green");
    $("#result").html("Strong").css("color", "green");
  }
  if (password.length == 0){
    $("#meter").progressbar({value:0});
    $(".ui-progressbar-value").css("background", "white");
    $("#result").html("");
  }

}
