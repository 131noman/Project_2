var aa = document.querySelector("#aa");
var bb = document.querySelector("#bb");
var cc = document.querySelector("#cc");

// Directory List
var dA = document.querySelector("#directory-A");
var dB = document.querySelector("#directory-B");
var dC = document.querySelector("#directory-C");
var dD = document.querySelector("#directory-D");

window.addEventListener("load", function () {
  aa.style.borderBottom = "2px solid black";

});
aa.addEventListener("click", function () {
  aa.style.borderBottom = "2px solid black";
  bb.style.borderBottom = "none";
  cc.style.borderBottom = "none";
  dd.style.borderBottom = "none";
  dA.style.display = "block";
  dB.style.display = "none";
  dC.style.display = "none";
  dD.style.display = "none";
});

bb.addEventListener("click", function () {
  aa.style.borderBottom = "none";
  bb.style.borderBottom = "2px solid black";
  cc.style.borderBottom = "none";
  dd.style.borderBottom = "none";
  dA.style.display = "none";
  dB.style.display = "block";
  dC.style.display = "none";
  dD.style.display = "none";
});

cc.addEventListener("click", function () {
  aa.style.borderBottom = "none";
  bb.style.borderBottom = "none";
  cc.style.borderBottom = "2px solid black";
  dd.style.borderBottom = "none";
  dA.style.display = "none";
  dB.style.display = "none";
  dC.style.display = "block";
  dD.style.display = "none";
});

dd.addEventListener("click", function () {
  aa.style.borderBottom = "none";
  bb.style.borderBottom = "none";
  cc.style.borderBottom = "none";
  dd.style.borderBottom = "2px solid black";
  dA.style.display = "none";
  dB.style.display = "none";
  dC.style.display = "none";
  dD.style.display = "block";
});
