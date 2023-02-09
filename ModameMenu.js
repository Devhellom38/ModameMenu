var img,Credits,Btn,x,y,z,Div,Title,Code,CreditsN;
var CreateElement = function(elem, left, top) {
  elem.style.position = "absolute";
  elem.style.left = left;
  elem.style.top = top;
};
var SusMode = function() {
img = document.createElement("img");
  img.src="https://i1.sndcdn.com/avatars-5YhOoeqkl8R1QTtE-VPEy0Q-t500x500.jpg";
  document.body.appendChild(img);
};
var GetCredits = function(dov) {
  document.getElementById("Amogus").remove();
  document.getElementById("Firefox").remove();
  document.getElementById("Credits").remove();
  CreditsN = document.createElement("h1");
    CreditsN.style.position = "absolute";
  CreditsN.style.left = "25%";
  CreditsN.style.top = "150%";
  CreditsN.style.zIndex = "505";
  CreditsN.style.fontSize="50px";
  CreditsN.innerText = "Programmer: Carlos Lawrie";
  CreditsN.style.FontFamily = "Lucida Console";
  CreditsN.style.zIndex="505";
  dov.appendChild(CreditsN);

};
var ButtonCreator = function(Text,top) {
Btn = document.createElement("button");
  CreateElement(Btn, "5%", top);
  Btn.innerText = Text;
  Btn.style.backgroundColor = "green";
  Btn.style.zIndex = "505";
  Btn.style.fontSize = "60px";
  Btn.style.padding = "30px 100px";
  Btn.id=Text;

  return Btn;

};
var Start = function(div) {

x = ButtonCreator("Firefox","30%");
div.appendChild(x);
x.onclick=function() {window.location.replace(`javascript:document.write('<iframe frameborder="0" width="200%" height="1000px" src="https://replit.com/@hellom38/firefox?embed=true"></iframe>%27);`)};
y = ButtonCreator("Amogus","50%");
div.appendChild(y);
y.onclick=function() {SusMode()};
z = ButtonCreator("Credits","70%");
div.appendChild(z);
z.onclick=function() {GetCredits(div)};



};
var Beta = function() {
Div = document.createElement("div");
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
  Title = document.createElement("h1");
  CreateElement(Title, "5%", "1%");
  Title.style.zIndex = "505";
  Title.innerText = "Modame Menu";
  Title.style.FontFamily = "Lucida Console";
  Div.appendChild(Title);
  Start(Div);
 
};
Beta();
