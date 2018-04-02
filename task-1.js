// You will make a function that converts between camelCase, snake_case, and kebab-case.
// You must write a function that changes to a given case. It must be able to handle all three case types:

function changeCase(string, type) {

}

console.log(changeCase("snakeCase", "snake")); // "snake_case"
console.log(changeCase("some-lisp-name", "camel")); //"someLispName"
console.log(changeCase("map_to_all", "kebab")); // "map-to-all"
console.log(changeCase("doHTMLRequest", "kebab")); // "do-h-t-m-l-request"
console.log(changeCase("invalid-inPut_bad", "kebab")); // undefined
console.log(changeCase("valid-input", "huh???")); // undefined
console.log(changeCase("", "camel")); // ""
