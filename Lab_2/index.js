const utilities = require("./utilities");
const geometry = require("./Geometry");


///////////////// For Volume of Rectangular Prism  ////////////////////////
try {
	console.log(geometry.vol_rectPrism(3, 4, 5)); 		// 60
	console.log(geometry.vol_rectPrism(5, 3, 4)); 		// 60
	console.log(geometry.vol_rectPrism(3, 8, 17));		// 408
	console.log(geometry.vol_rectPrism(123, 32, 0));		// throws an Exception
}
catch (err) {
	console.log(err)
}

try {
	console.log(geometry.vol_rectPrism(-5, 3, 4))  //throw Exception
}
catch (err) {
	console.log(err)
}

try {
	console.log(geometry.vol_rectPrism("lmno"))    //throws  Exception 
}
catch (err) {
	console.log(err)
}


///////////////// For Surface Area of Rectangle /////////////////////////
try {
	console.log(geometry.surf_rectprism(3, 4, 5)); 		// 94
	console.log(geometry.surf_rectprism(5, 3, 4)); 		// 94
	console.log(geometry.surf_rectprism(9, 3, 18));		// 486
	console.log(geometry.surf_rectprism(123, 32, NaN));	// Throws an Exception
}
catch (err) {
	console.log(err)
}

try {
	console.log(geometry.surf_rectprism("klsd")) //Throws an Exception
}
catch (err) {
	console.log(err)
}

try {
	console.log(geometry.surf_rectprism(-3, -8, 17));		// Throws an Exception
}
catch (err) {
	console.log(err)
}



////////////////////   Volume of Sphere    ///////////////////////
try{
	console.log(geometry.vol_sphere(1)) 		// 4.188...
	console.log(geometry.vol_sphere(5)) 		// 523.598...
	console.log(geometry.vol_sphere(3))		// 113.097...
	console.log(geometry.vol_sphere(123))		// 7794781.462...
	console.log(geometry.vol_sphere(0))		// Throws an Exception
}
catch (err) {
	console.log(err)
}

try {
	console.log(geometry.vol_sphere(-3))  //Throws an Exception
}
catch (err) {
	console.log(err)
}

try {
	console.log(geometry.vol_sphere("bcd")) //Throws an Exception
}
catch (err) {
	console.log(err)
}



//////////////////// Surface Area of Sphere  ////////////////////
try {
	console.log(geometry.surf_sphere(1)); 		// 12.566...
	console.log(geometry.surf_sphere(5)); 		// 314.159...
	console.log(geometry.surf_sphere(3));		// 113.0967...
	console.log(geometry.surf_sphere(0));		// throw an Exception
}
catch (err) {
	console.log(err);
}

try {
	console.log(geometry.surf_sphere(-4))    //throws an Exception
}
catch (err) {
	console.log(err)
}

try {
	console.log(geometry.surf_sphere("abcd"))    //throws an Exception
}
catch (err) {
	console.log(err)
}




////////////// Utilities ////////////////



//test for unique_Elements
try {
    console.log(utilities.unique_Elements(["a", "a", "b", "a", "b", "c"]));   // 3
	console.log(utilities.unique_Elements([1, "1", 1.0, "a"]));	// 3
	console.log(utilities.unique_Elements(["a", "a", "a", "a", "a", "a", "a"]));	// 1	
	console.log(utilities.unique_Elements([]));	// 0
	console.log(utilities.unique_Elements({0: 'a'}));	// Throws an Exception
}
catch (err) {
    console.log(err);
}

//test for countofeachString

try {
console.log(utilities.count_str("Hellllllllo, the pie is in the oven"))
console.log(utilities.count_str("My name is Uzumaki naruto"))
console.log(utilities.count_str("Ittadakimasu"))
console.log(utilities.count_str("It's 5:30AM because my roommate was Sleeping so I figured I might as well be productive."))
console.log(utilities.count_str(1235456))
}
catch (err) {
    console.log(err);
}


//Deep Equality
try {
var obj1 = {'a': 0, 'b': 1, 'c': 2, 1: 'a', 2: 'b', 3: 'c'}
var obj2 = {1: 'a', 2: 'b', 3: 'c', 'a': 0, 'b': 1, 'c': 2}

const first = {a: 2, b: 3}
const second = {a: 2, b: 4}
const third = {a: 2, b: 3}

var ike1 = {'a': 4, 'b': 1, 'c': 2, 4: 'a', 2: 'b', 3: 'c'}
var ike2 = {'a': 0, 'b': 6, 'c': 2, 1: 'a', 8: 'b', 3: 'c'}
console.log(utilities.equality(first, second)) // false
console.log(utilities.equality(first, third)) // true
console.log(utilities.equality(obj1, obj2))
console.log(utilities.equality(ike1, ike2))
console.log(utilities.equality("ADSA",ike2))
}
catch (err) {
	console.log(err)
}