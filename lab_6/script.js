let arr = [23, 1, 54, 39, 8, 3];
let dob = arr.reduce(function(total, num) {
   return total * num;
});
console.log(dob);