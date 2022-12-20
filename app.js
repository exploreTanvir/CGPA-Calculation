var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");
var fifth = document.getElementById("fifth");
var sixth = document.getElementById("sixth");
var seventh = document.getElementById("seventh");
var eight = document.getElementById("eight");
var result = document.getElementById("result");

result.addEventListener("click", function () {
  var text = document.getElementById("CGPA");
  if (
    first.value == 0 ||
    second.value == 0 ||
    third.value == 0 ||
    fourth.value == 0 ||
    fifth.value == 0 ||
    sixth.value == 0 ||
    seventh.value == 0 ||
    eight.value == 0
  ) {
    alert("vai sob input den");
  }

  if (
    first.value > 4 ||
    second.value > 4 ||
    third.value > 4 ||
    fourth.value > 4 ||
    fifth.value > 4 ||
    sixth.value > 4 ||
    seventh.value > 4 ||
    eight.value > 4
  ) {
    text.innerHTML =
      "You Enterd A value Whice Is Grater Than 4 And Your Infrmation Is Unvalid";
  } else {
    var firsts = (first.value * 5) / 100;
    var seconds = (second.value * 5) / 100;
    var thirds = (third.value * 5) / 100;
    var fourths = (fourth.value * 10) / 100;
    var fifths = (fifth.value * 15) / 100;
    var sixths = (sixth.value * 20) / 100;
    var sevenths = (seventh.value * 25) / 100;
    var eights = (eight.value * 15) / 100;
    var cgpa = parseFloat(
      firsts + seconds + thirds + fourths + fifths + sixths + sevenths + eights
    );

    text.innerHTML = "YOUR CGPA IS : " + cgpa.toFixed(2);
  }
  if (
    first.value < 2 ||
    second.value < 2 ||
    third.value < 2 ||
    fourth.value < 2 ||
    fifth.value < 2 ||
    sixth.value < 2 ||
    seventh.value < 2 ||
    eight.value < 2
  ) {
    text.innerHTML = "You Are Failed";
  }
});
