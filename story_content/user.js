window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  var p = GetPlayer();
var missing = [];
for (var i = 1; i <= 20; i++) {
  var num = (i < 10 ? "0" + i : "" + i);
  var answer = p.GetVar("Q" + num + "_First");
  if (answer === null || answer === undefined || String(answer).trim() === "") {
    missing.push(i);
  }
}
p.SetVar("MissingList", missing.join(", "));
p.SetVar("Unanswered", missing.length);
}

};
