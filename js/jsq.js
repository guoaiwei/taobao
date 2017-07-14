/*获取对象*/
var jsq = document.getElementById("jsq");
/*功能按键*/
document.getElementById("equal").onclick = function() {
	jsq.value = eval(jsq.value);
}
document.getElementById("clear").onclick = function() {
	jsq.value = "";
}
document.getElementById("add").onclick = function() {
	jsq.value = jsq.value + "+";
}
document.getElementById("minus").onclick = function() {
	jsq.value = jsq.value + "-";
}
document.getElementById("multiply").onclick = function() {
	jsq.value = jsq.value + "*";
}
document.getElementById("division").onclick = function() {
	jsq.value = jsq.value + "/";
}
/*获取数值*/
document.getElementById("num0").onclick = function() {
	jsq.value = jsq.value + "0";
}
document.getElementById("num1").onclick = function() {
	jsq.value = jsq.value + "1";
}
document.getElementById("num2").onclick = function() {
	jsq.value = jsq.value + "2";
}
document.getElementById("num3").onclick = function() {
	jsq.value = jsq.value + "3";
}
document.getElementById("num4").onclick = function() {
	jsq.value = jsq.value + "4";
}
document.getElementById("num5").onclick = function() {
	jsq.value = jsq.value + "5";
}
document.getElementById("num6").onclick = function() {
	jsq.value = jsq.value + "6";
}
document.getElementById("num7").onclick = function() {
	jsq.value = jsq.value + "7";
}
document.getElementById("num8").onclick = function() {
	jsq.value = jsq.value + "8";
}
document.getElementById("num9").onclick = function() {
	jsq.value = jsq.value + "9";
}