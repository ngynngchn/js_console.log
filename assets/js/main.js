// variablen ohne let oder const deklarieren -> global variable = window.variable
a = 12;
console.log(a);
b = a * 3;
console.log(b);

document.write(b);

console.log(document.URL);

console.log("Hello World!");
console.log("Anton");

let firstName = "Anton";
console.log(firstName);

let age = 28;
console.log(age);

let job = "Traner";
console.log(job);

let married = "true";
console.log(married);

console.log(
  firstName +
    " ist " +
    age +
    " und von Beruf " +
    job +
    " und ist verheiratet: " +
    married
);

console.log(
  `${firstName} ist ${age} und von Beruf ${job} und ist verheiratet: ${married}`
);
