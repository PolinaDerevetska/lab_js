function array_functions (functions) {
   functions.forEach(fn => fn());
}
function f1() {
   console.log("Перша");
}
function f2() {
   console.log("Друга");
}
function f3() {
   console.log("Третя");
}
array_functions ([f1, f2, f3]);
