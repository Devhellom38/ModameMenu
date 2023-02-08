var CreateElement = function(elem, left, top) {
  elem.style.position = "absolute";
  elem.style.left = left;
  elem.style.top = top;
};
var SusMode = function() {

  document.write("<img src='https://i1.sndcdn.com/avatars-5YhOoeqkl8R1QTtE-VPEy0Q-t500x500.jpg'>")
};
var ButtonCreator = function(Text,top) {
var Btn = document.createElement("button");
  CreateElement(Btn, "5%", top);
  Btn.innerText = Text;
  Btn.style.backgroundColor = "green";
  Btn.style.zIndex = "505";
  Btn.style.fontSize = "60px";
  Btn.style.padding = "30px 100px";

  return Btn;

};
var Start = function(div) {

var x = ButtonCreator("Firefox","30%");
div.appendChild(x);
x.onclick=function() {window.location.replace(`javascript:document.write('<iframe frameborder="0" width="200%" height="1000px" src="https://replit.com/@hellom38/firefox?embed=true"></iframe>%27);`)};
var y = ButtonCreator("Amogus","80%");
div.appendChild(y);
y.onclick=function() {SusMode()};
var z = ButtonCreator("Credits","140%");
div.appendChild(z);
z.onclick=function() {Credits()};


};
var Beta = function() {
var Div = document.createElement("div");
document.body.appendChild(Div);
  Code = document.createElement("img");
  
  Code.src = "https://media1.giphy.com/media/RsWTBRWrA071LXNMXM/giphy.gif";
  Code.style.position = "absolute";
  Code.style.height="700px";
  Code.style.width="500px"
  Code.style.top = "1%";
  Code.style.left = "1%";
  Code.style.zIndex = "500";
  Div.appendChild(Code);
  var Title = document.createElement("h1");
  CreateElement(Title, "5%", "1%");
  Title.style.zIndex = "505";
  Title.innerText = "Modame Menu";
  Title.style.FontFamily = "Lucida Console";
  Div.appendChild(Title);
  Start(Div);
  
};
Beta();
