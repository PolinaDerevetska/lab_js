function func_name(user) {
   let {name, ...rest} = user; 
   return {name, rest}; 
}
let user = {
   name: "Поліна",
   age: 18,
   city: "Кривий Ріг",
};
let result = func_name(user);
console.log(result);