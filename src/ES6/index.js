//? ┌────────────────────────────────┐
//? │ Default Params & Concatenation │
//? └────────────────────────────────┘

//* Default Params & concatenation before ECMAScript 6+
function JSnewFunction(name, age, country) {
	//? The default values are assigned to variables that are not passed as parameters, using the same name as the parameter with a default value assigned by OR operator.
	var name    = name || 'Oscar';
	var age     = age || 32;
	var country = country || 'MX';
	//? The concatenation operator is used to join two or more strings.
	var text = 'My name is ' + name + ', I am ' + age + ' years old and I am from ' + country;
	console.log(text);
}

//* Default Params & concatenation after ECMAScript 6+
function ESnewFunction(name = 'Oscar', age = 32, country = 'MX') {
	//? The default values are assigned directly to the parameters.
	//? The concatenation is done using the template literals.
	var text = `My name is ${name}, I am ${age} years old and I am from ${country}`;
	console.log(text);
}

//* Execute the params functions with and without parameters

console.log('Default Params & concatenation before ECMAScript 6+...');
JSnewFunction();
JSnewFunction('Mario', 23, 'JP');

console.log('Default Params & concatenation after ECMAScript 6+...');
ESnewFunction();
ESnewFunction('Mario', 23, 'JP');



//? ┌──────────────────────────────────────────────────────────────────┐
//? │ LET, VAR and CONST, Multiline, Spread Operator and Destructuring │
//? └──────────────────────────────────────────────────────────────────┘

//? let, var and const examples

{
	//* var is a function-scoped variable declaration.
	var a = 1;
}

{
	//* let is a block-scoped variable declaration.
	let b = 2;
	console.log('let called inside the block:', b); //$ 2
}

//* You can use the same variable name in different blocks or functions and outsi the scope.
console.log('var called outside the block:', a); //$ 1
//* If you try to access a variable declared with let outside the block, you will get an error.
//console.log('let called outside the block:', b); //! ReferenceError: a is not defined

//* const is a block-scoped variable declaration.
const c = 3;
console.log('const called without changing the value:', c); //$ 3
//* If you try to change the value of a const variable, you get an error.
//c = 4; //! TypeError: Assignment to constant variable.

//? Multiline

//* Multiline after ECMAScript 6+
let text = "This is a row\n"
+ "This is another row";
console.log(text);

//* Multiline before ECMAScript 6+
let textES6 = `This is a row
This is another row`;
console.log(textES6);

//? Spread Operator

//* Spread Operator on ECMAScript 6+
let numbers    = [4, 5, 6];
let moreNumbers = [...numbers, 7, 8, 9];
let moreNumbers2 = [1, 2, 3, ...moreNumbers];
console.log(moreNumbers2);

//? Destructuring

//* Set an object to be destructured
let users = {
	user   : 'Juan',
	age    : 32,
	country: 'MX'
};

//* Destructuring before ECMAScript 6+
console.log(users.user, users.age, users.country);

//* Destructuring after ECMAScript 6+
let { user, age, country } = users;
console.log(user, age, country);


//? ┌─────────────────────────────────────────────────────┐
//? │ Arrow Functions, Promises and Parameters in objects │
//? └─────────────────────────────────────────────────────┘

/** Promise example
 * recieve a value and return a promise when finish the operation
 * @param {*} value (true or false)
 * @returns {Promise} (resolve or reject)
 */
const helloPromise = (value) => {                 //? Arrow function with one parameter
	return new Promise((resolve, reject) => {       //? Promise constructor
		//* Seting a timeout to simulate a long operation
		setTimeout(() => {
			if (value) {                                //$ If the value is true
				//* Resolve the promise
				resolve('Hello');
			} else {                                    //! If the value is false
				//* Reject the promise
				reject('Something went wrong');
			}
		}, 3000);
	});
}

//* Execute the promise with a value of true
helloPromise(true).then((response) => {           //? Then is a callback function
	console.log(response);
})

//* Execute the promise with a value of false
helloPromise(false).then((response) => {          //? Then is a callback function
	console.log(response);
}).catch((error) => {                             //! Catch is a callback function for the reject
	console.log(error);
})


function hash(x) {

	seed = 47;
	dictonary = "abehinoprstuv";

	for(i = 0; i < x.length; i++) {
		seed = (seed * 19 + dictonary.indexOf(x[i]));
	}

	return seed;

}

function deHash(x) {

	hashInput = x - 47;

	dictonary = "abehinoprstuv";

	while (hashInput > 100) {
		if (hashInput % 19 == 0) {
			return dictonary[hashInput];
		} else {
			hashInput = hashInput / 19;
		}
	}
}

//* find the string x that, when applied to the hash function, would produce the following result integer: 290460476046687
console.log('deHash 290460476046687', deHash("290460476046687"));
console.log('perseverar', hash("perseverar"));
